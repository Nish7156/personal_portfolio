import React from "react";
import CardOutline from "./CardOutline";
import Image from "next/image";
import Link from "next/link";
import HoverIcon from "../Utility/HoverIcon";
import BgImage from "../Utility/BgImage";

interface IprofileCard {
  title: string;
  name: string;
  desc: string;
  link?: string;
  imageSrc?: any;
  badge?: any;
}

function ProjectCard({
  title,
  name,
  desc,
  link,
  imageSrc,
  badge,
}: IprofileCard) {
  return (
    <>
      <div data-aos="zoom-in" className="aos-init aos-animate ">
        <div className="about-blog-box info-box shadow-box h-full">
          <Link
            className="overlay-link"
            href={link ? link : "/"}
            prefetch={false}
            target={link ? "_blank" : "_self"}
          ></Link>
          <BgImage />
          <div className="">
            <Image
              className=" rounded-lg"
              src={imageSrc}
              alt={name || "image"}
            />
          </div>
          <div className="flex items-center justify-between pt-3">
            <h4 style={{ fontSize: "14px" }}>{title}</h4>
            {badge && (
              <div className=" neon-badge bg-primary rounded-md px-3 py-[0.1em] text-xs text-white">
                {badge}
              </div>
            )}
          </div>
          <div className="flex items-end justify-between">
            <div className="infos">
              <h1 style={{ fontSize: "30px" }}>{name}</h1>
              <p className="py-2">{desc}</p>
            </div>

            <Link
              href={link ? link : "/"}
              prefetch={false}
              className="about-btn"
              target={link ? "_blank" : "_self"}
            >
              <HoverIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
