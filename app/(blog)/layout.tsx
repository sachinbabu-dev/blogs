import "../globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { PortableTextBlock, VisualEditing, toPlainText } from "next-sanity";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import { Suspense } from "react";

import AlertBanner from "./alert-banner";
import PortableText from "./portable-text";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SettingsQueryResponse, settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import Image from "next/image";
import { ModeToggle } from "../../components/darkModeToggle";
import { ThemeProvider } from "@/components/themeProvider";
import Logo from "@/components/logo";
import Footer from "./components/footer";
import Header from "./components/header";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const metaData: any = await generateMetadata();
  return (
    <html lang="en" className={`${inter.variable} bg-white text-black`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <body>
          <section className="min-h-screen bg-white dark:bg-black">
            <Header title={metaData?.title?.default} />
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
