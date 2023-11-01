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
          <Link href={"/projects"} className="overlay-link" prefetch={false}/>
          <BgImage />
          <NextImage
            src={"/images/5013256.jpg"}
            alt="Image"
            width={200}
            height={122}
            isCenter
          />
          <div className="d-flex align-items-center justify-content-between">
            <div className="infos">
              <h4>SHOWCASE</h4>
              <h1>Projects</h1>
            </div>

            <Link href={"/projects"} className="about-btn" prefetch={false}>
              <HoverIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
