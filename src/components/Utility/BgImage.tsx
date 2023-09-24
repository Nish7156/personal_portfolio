import React from "react";
import NextImage from "../NextImage";

function BgImage({ height, width }: any) {
  return (
    <NextImage
      
      src={"/images/bg1.png"}
      alt="Background Image"
      height={height ? height : 561}
      width={width ? width : 318}
      className="bg-img"
    />
  );
}

export default BgImage;
