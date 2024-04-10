import "../globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { PortableTextBlock, VisualEditing, toPlainText } from "next-sanity";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import { Suspense } from "react";
import logo from "../logo.png";
import AlertBanner from "./alert-banner";
import PortableText from "./portable-text";

import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SettingsQueryResponse, settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import Image from "next/image";
import { ModeToggle } from "../../components/darkModeToggle";
import { ThemeProvider } from "@/components/themeProvider";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityFetch<SettingsQueryResponse>({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  });
  const title = settings?.title || demo.title;
  const description = settings?.description || demo.description;

  const ogImage = resolveOpenGraphImage(settings?.ogImage);
  let metadataBase: URL | undefined = undefined;
  try {
    metadataBase = settings?.ogImage?.metadataBase
      ? new URL(settings.ogImage.metadataBase)
      : undefined;
  } catch {
    // ignore
  }
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: toPlainText(description),
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  };
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

async function Footer() {
  const data = await sanityFetch<SettingsQueryResponse>({
    query: settingsQuery,
  });
  const footer = data?.footer || ([] as PortableTextBlock[]);

  return (
    <>
      <footer className="bg-accent-1 border-accent-2 border-t">
        <div className="container mx-auto px-5">
          {footer.length > 0 ? (
            <PortableText
              className="prose-sm text-pretty bottom-0 w-full max-w-none bg-white py-12 text-center md:py-20"
              value={footer}
            />
          ) : (
            <div className="flex flex-col items-center py-28 lg:flex-row">
              <h3 className="mb-10 text-center text-4xl font-bold leading-tight tracking-tighter lg:mb-0 lg:w-1/2 lg:pr-4 lg:text-left lg:text-5xl">
                Built with Next.js.
              </h3>
              <div className="flex flex-col items-center justify-center lg:w-1/2 lg:flex-row lg:pl-4">
                <a
                  href="https://nextjs.org/docs"
                  className="mx-3 mb-6 border border-black bg-black py-3 px-12 font-bold text-white transition-colors duration-200 hover:bg-white hover:text-black lg:mb-0 lg:px-8"
                >
                  Read Documentation
                </a>
                <a
                  href="https://github.com/vercel/next.js/tree/canary/examples/cms-sanity"
                  className="mx-3 font-bold hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          )}
        </div>
      </footer>
    </>
  );
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const metaData: any = await generateMetadata();
  console.log(">>>", metaData?.title?.default);
  return (
    <html lang="en" className={`${inter.variable} bg-white text-black`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body>
          <section className="min-h-screen bg-white dark:bg-black">
            <div className="grid grid-cols-10 w-full border-y py-2 mb-2">
              <div className="col-span-1 px-5">EN</div>
              <div className="col-span-8">
                <div className="flex justify-center items-center">
                  <Image
                    src={logo}
                    alt="logo"
                    width={42}
                    height={42}
                    className="mr-4"
                  />
                  <span className="text-xl font-medium">
                    {metaData?.title?.default}
                  </span>
                </div>
              </div>
              <div className="col-span-1"> <ModeToggle /></div>
            </div>
            {/* {draftMode().isEnabled && <AlertBanner />} */}
            <main>{children}</main>
            <Suspense>
              <Footer />
            </Suspense>
          </section>
          {draftMode().isEnabled && <VisualEditing />}
          <SpeedInsights />
        </body>
      </ThemeProvider>
    </html>
  );
}
