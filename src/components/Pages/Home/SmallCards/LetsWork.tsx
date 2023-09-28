import NextImage from "@/components/NextImage";
import BgImage from "@/components/Utility/BgImage";
import HoverIcon from "@/components/Utility/HoverIcon";
import Link from "next/link";
import React from "react";

function LetsWork() {
  return (
    <>
      <div className="col-md-6 aos-init aos-animate" data-aos="zoom-in">
        <div className="about-contact-box info-box shadow-box">
          <Link className="overlay-link" href="contact-us"></Link>
          <BgImage />

          <NextImage
            className="star-icon"
            src={"/images/icon2.png"}
            alt="Image"
            width={37}
            height={76}
          />
          <h1>
            Let's <br />
            work <span>together.</span>
          </h1>
          <Link className="about-btn" href={""}>
            <HoverIcon />
          </Link>
        </div>
      </div>
    </>
  );
}

export default LetsWork;
