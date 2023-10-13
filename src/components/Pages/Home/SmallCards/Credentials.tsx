import NextImage from "@/components/NextImage";
import BgImage from "@/components/Utility/BgImage";
import HoverIcon from "@/components/Utility/HoverIcon";
import Link from "next/link";
import React from "react";

function Credentials() {
  return (
    <>
      <div data-aos="zoom-in" className="aos-init aos-animate">
        <div className="about-crenditials-box info-box shadow-box h-full">
          <Link className="overlay-link" href={'/about'}></Link>
          <BgImage />
          <NextImage
            src={"/images/sign.png"}
            alt="Image"
            width={224}
            height={124}
            isCenter
          />
          <div className="d-flex align-items-center justify-content-between">
            <div className="infos">
              <h4>more about me</h4>
              <h1>Credentials</h1>
            </div>

            <Link className="about-btn" href={"/about"}>
              <HoverIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Credentials;
