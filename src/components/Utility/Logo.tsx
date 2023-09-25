import React from "react";
import NextImage from "../NextImage";
import WhiteLogo from "../../../public/logo/WhiteLogo.png";
import darkLogo from "../../../public/logo/darkLogo.png";

function Logo({ isDark }: { isDark?: boolean }) {
  return (
    <NextImage
      src={!isDark ? WhiteLogo : darkLogo}
      className="logo"
      width={80}
      height={27}
      alt="Logo"
    />
  );
}

export default Logo;
