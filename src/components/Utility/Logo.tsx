import React from "react";
import NextImage from "../NextImage";
import WhiteLogo from "/public/logo/whiteLogo.png";
import darkLogo from "/public/logo/darkLogo.png";

function Logo({ isDark }: { isDark?: boolean }) {
  return (
    <NextImage
      src={!isDark ? WhiteLogo : darkLogo}
      className="logo"
      width={100}
      height={27}
      alt="Logo"
    />
  );
}

export default Logo;
