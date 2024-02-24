"use client";
import React from "react";
import { ModeToggle } from "./darkModeToggle";
import { Menu } from "./menu";

const Header = () => {
  return (
    <header className="flex justify-between pr-4">
      <Menu />
      <ModeToggle />
    </header>
  );
};

export default Header;
