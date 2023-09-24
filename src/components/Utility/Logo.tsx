import React from "react";
import NextImage from "../NextImage";

function Logo({ isDark }: { isDark?: boolean }) {
  return (
    <NextImage
      src={isDark ? "/logo/whiteLogo.png" : "/logo/whiteLogo.png"}
      className="logo"
      width={100}
      height={27}
      alt="Logo"
    />
  );
}

export default Logo;
