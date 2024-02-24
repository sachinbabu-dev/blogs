import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/themeProvider";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Starkfolio- Blogs",
  description: "Blogs by sachin babu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
      <body>
        <div className="container relative py-4">
          <section>
            <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow ">
              {children}
            </div>
          </section>
        </div>
      </body>
      </ThemeProvider>
    </html>
  );
}
