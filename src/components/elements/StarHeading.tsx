import React from "react";
import NextImage from "../NextImage";

function StarHeading({ heading }: { heading: string }) {
  return (
    <>
      <h1 className="section-heading ">
        <NextImage
          width={48}
          height={48}
          src={
            "/images/star-2.png"
          }
          alt="Star"
          loading="lazy"
        />
        {heading}
        <NextImage
          width={48}
          height={48}
          src={
            "/images/star-2.png"
          }
          alt="Star"
          loading="lazy"
        />
      </h1>
    </>
  );
}

export default StarHeading;
