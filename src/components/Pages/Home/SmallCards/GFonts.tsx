import NextImage from "@/components/NextImage";
import BgImage from "@/components/Utility/BgImage";
import HoverIcon from "@/components/Utility/HoverIcon";
import Link from "next/link";
import React from "react";

function GFonts() {
  return (
    <>
      <div data-aos="zoom-in" className="aos-init aos-animate">
        <div className="about-blog-box info-box shadow-box h-full">
          <a href="./blog.html" className="overlay-link"></a>
          <BgImage />
          <NextImage
            src={"/images/gfonts.png"}
            alt="Image"
            width={224}
            height={124}
          />
          <div className="d-flex align-items-center justify-content-between">
            <div className="infos">
              <h4>Blog</h4>
              <h1>GFonts</h1>
            </div>

            <Link href={''} className="about-btn">
              <HoverIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default GFonts;