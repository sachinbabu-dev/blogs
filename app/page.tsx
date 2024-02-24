"use client";
import Header from "@/components/header";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="flex-grow min-h-screen flex flex-col items-start justify-start">
      </main>
      <footer className="p-4">
        footer
      </footer>
    </div>
  );
}
