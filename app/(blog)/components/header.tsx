import { ModeToggle } from "@/components/darkModeToggle";
import Logo from "@/components/logo";
import React from "react";
import mainLogo from "../../mainLogo.png";
import Image from "next/image";

const Header = ({ title }: any) => {
  return (
    <div className="grid grid-cols-10 w-full border-y py-2">
      <div className="col-span-1 px-5">
        {" "}
        <Logo type="logo" height={42} width={42} />
      </div>
      <div className="col-span-8">
        <div className="flex justify-center items-center">
          <Image src={mainLogo} alt="logo" width={220} height={220} />
        </div>
      </div>
      {/* <div className="col-span-1">
        <ModeToggle />
      </div> */}
    </div>
  );
};

export default Header;
