import NextImage from "@/components/NextImage";
import BgImage from "@/components/Utility/BgImage";
import HoverIcon from "@/components/Utility/HoverIcon";
import Link from "next/link";
import React from "react";

function Projects() {
  return (
    <>
      <div data-aos="zoom-in" className="aos-init aos-animate">
        <div className="about-project-box info-box shadow-box h-full">
          <a className="overlay-link" href="./works.html"></a>
          <BgImage />
          <NextImage
            src={"/images/my-works.png"}
            alt="Image"
            width={224}
            height={124}
          />
          <div className="d-flex align-items-center justify-content-between">
            <div className="infos">
              <h4>SHOWCASE</h4>
              <h1>Projects</h1>
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

export default Projects;
