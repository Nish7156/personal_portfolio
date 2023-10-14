import NextImage from "@/components/NextImage";
import BgImage from "@/components/Utility/BgImage";
import HoverIcon from "@/components/Utility/HoverIcon";
import Link from "next/link";
import React from "react";

interface IprofileCard {
  title: string;
  name: string;
  desc: string;
  link?: string;
  imageSrc?: any;
}

function ProfileCard({ title, name, desc, link, imageSrc }: IprofileCard) {
  return (
    <>
      <div className="about-me-box shadow-box">
        <Link
          className="overlay-link"
          href={link ? `${link}` : "/"}
          prefetch={false}
        ></Link>
        <BgImage />
        <div className="img-box">
          <NextImage
            src={imageSrc ? imageSrc : "/images/me.jpeg"}
            alt="Image"
            height={224}
            width={224}
          />
        </div>
        <div className="infos">
          <h4>{title}</h4>
          <h1>{name}</h1>
          <p>{desc}</p>
          <Link className="about-btn" href={link ? `${link}` : "/"}>
            <HoverIcon />
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProfileCard;
