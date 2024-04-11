"use client";
import React from "react";
import logo from "../app/logo.png";
import logoWhite from "../app/logo-white.png";
import Image from "next/image";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();
  const logoMode = theme === "light" ? logo : logoWhite;
  return (
    <Image src={logoMode} alt="logo" width={42} height={42} className="mr-4 grayscale" />
  );
};

export default Logo;
