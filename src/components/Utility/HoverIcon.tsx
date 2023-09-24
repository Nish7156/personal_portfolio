import React from "react";
import NextImage from "../NextImage";

function HoverIcon({ height, width }: any) {
  return (
    <NextImage
      src={"/svg/icon.svg"}
      alt="Icon"
      width={width ? width : 46}
      height={height ? height : 42}
    />
  );
}

export default HoverIcon;
