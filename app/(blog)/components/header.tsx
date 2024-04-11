import { ModeToggle } from "@/components/darkModeToggle";
import Logo from "@/components/logo";
import React from "react";

const Header = ({ title }: any) => {
  return (
    <div className="grid grid-cols-10 w-full border-y py-2">
      <div className="col-span-1 px-5">EN</div>
      <div className="col-span-8">
        <div className="flex justify-center items-center">
          <Logo />
          <span className="text-xl font-medium">
            {title}
          </span>
        </div>
      </div>
      <div className="col-span-1">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;

