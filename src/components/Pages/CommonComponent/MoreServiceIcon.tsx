import BgImage from "@/components/Utility/BgImage";
import HoverIcon from "@/components/Utility/HoverIcon";
import React from "react";
import Link from "next/link";
import { FaReact, FaNodeJs, FaAws, FaDocker } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { ImHtmlFive2 } from "react-icons/im";
import { BiLogoTailwindCss, BiLogoPostgresql } from "react-icons/bi";
import { TbBrandMongodb } from "react-icons/tb";

function MoreServiceIcon() {
  return (
    <>
      <div data-aos="zoom-in" className="aos-init aos-animate flex-1">
        <div className="about-services-box info-box shadow-box h-full">
          <Link className="overlay-link" href={""}></Link>
          <BgImage />
          <div className="icon-boxes flex-wrap">
            <ImHtmlFive2 fontSize={"40px"} color="white" />
            <BiLogoTailwindCss fontSize={"40px"} color="white" />
            <FaReact fontSize={"40px"} color="white" />
            <SiNextdotjs fontSize={"40px"} color="white" />
            <FaNodeJs fontSize={"40px"} color="white" />
            <TbBrandMongodb fontSize={"40px"} color="white" />
            <BiLogoPostgresql fontSize={"40px"} color="white" />
            <FaAws fontSize={"40px"} color="white" />
            <FaDocker fontSize={"40px"} color="white" />
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

export default MoreServiceIcon;
