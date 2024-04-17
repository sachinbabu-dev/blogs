"use client";
import React from "react";
import logo from "../app/logo.png";
import logoWhite from "../app/mainLogo.png";
import Image from "next/image";
import { useTheme } from "next-themes";

const Logo = ({type, width, height}: any) => {
  const logoMode = type === "logo" ? logo : logoWhite;
  return (
    <Image src={logoMode} alt="logo" width={width} height={height} className="mr-4 grayscale" />
  );
};

export default Logo;
