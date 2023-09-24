import BgImage from "@/components/Utility/BgImage";
import HoverIcon from "@/components/Utility/HoverIcon";
import React from "react";
import { Camera, ColorFilter, DesignPencil, DevModePhone } from "iconoir-react";
import Link from "next/link";

function Service() {
  return (
    <>
      <div data-aos="zoom-in" className="aos-init aos-animate flex-1">
        <div className="about-services-box info-box shadow-box h-full">
          <Link className="overlay-link" href={""}></Link>
          <BgImage />
          <div className="icon-boxes">
            <Camera fontSize={"30px"} color="white" />
            <DesignPencil fontSize={"30px"} color="white" />
            <ColorFilter fontSize={"30px"} color="white" />
            <DevModePhone fontSize={"30px"} color="white" />
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="infos">
              <h4>specialization</h4>
              <h1>Services Offering</h1>
            </div>

            <Link className="about-btn" href={""}>
              <HoverIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
