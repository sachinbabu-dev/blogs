import "../globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { PortableTextBlock, VisualEditing, toPlainText } from "next-sanity";
import { Inter } from "next/font/google";
import { draftMode } from "next/headers";
import { Suspense } from "react";
import logo from "../logo.png";
import logoWhite from "../logo-white.png";

import AlertBanner from "./alert-banner";
import PortableText from "./portable-text";
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

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
     <footer className=" p-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Logo Section */}
        <div className="mb-4">
          {/* <Logo color="white" size={36} /> */}
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook color="white" size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter color="white" size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram color="white" size={24} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <Youtube color="white" size={24} />
          </a>
        </div>

        {/* Copyright Notice */}
        <div className="text-center text-sm">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
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
