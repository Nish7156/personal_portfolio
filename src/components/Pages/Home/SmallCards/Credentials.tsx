import NextImage from "@/components/NextImage";
import BgImage from "@/components/Utility/BgImage";
import HoverIcon from "@/components/Utility/HoverIcon";
import React from "react";

function Credentials() {
  return (
    <>
      <div data-aos="zoom-in" className="aos-init aos-animate">
        <div className="about-crenditials-box info-box shadow-box h-full">
          <a className="overlay-link" href="./credentials.html"></a>
          <BgImage />
          <NextImage
            src={"/images/sign.png"}
            alt="Image"
            width={224}
            height={124}
          />
          <div className="d-flex align-items-center justify-content-between">
            <div className="infos">
              <h4>more about me</h4>
              <h1>Credentials</h1>
            </div>

            <a href="./credentials.html" className="about-btn">
              <HoverIcon />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Credentials;