import BgImage from "@/components/Utility/BgImage";
import HoverIcon from "@/components/Utility/HoverIcon";
import React from "react";
import Link from "next/link";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { BsDatabaseAdd } from "react-icons/bs";
import { ImHtmlFive2 } from "react-icons/im";

function Service() {
  return (
    <>
      <div data-aos="zoom-in" className="aos-init aos-animate flex-1">
        <div className="about-services-box info-box shadow-box h-full">
          <Link className="overlay-link" href={"/about"} prefetch={false}></Link>
          <BgImage />
          <div className="icon-boxes">
            <ImHtmlFive2 fontSize={"40px"} color="white" />
            <FaReact fontSize={"40px"} color="white" />
            <FaNodeJs fontSize={"40px"} color="white" />
            <BsDatabaseAdd fontSize={"40px"} color="white" />
          </div>

          <div className="d-flex align-items-center justify-content-between">
            <div className="infos">
              <h4>specialization</h4>
              <h1>Services Offering</h1>
            </div>

            <Link className="about-btn" href={"/about"} prefetch={false}>
              <HoverIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
