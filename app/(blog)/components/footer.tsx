import { sanityFetch } from "@/sanity/lib/fetch";
import { SettingsQueryResponse, settingsQuery } from "@/sanity/lib/queries";
import { PortableTextBlock } from "next-sanity";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default async function Footer() {
    const data = await sanityFetch<SettingsQueryResponse>({
      query: settingsQuery,
    });
    const footer = data?.footer || ([] as PortableTextBlock[]);
  
    return (
      <>
        <footer className=" p-4">
          <div className="max-w-6xl mx-auto flex flex-col items-center">
            {/* Logo Section */}
            <div className="mb-4">{/* <Logo color="white" size={36} /> */}</div>
  
            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook color="white" size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter color="white" size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram color="white" size={24} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
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