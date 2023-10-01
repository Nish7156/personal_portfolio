import BgImage from "@/components/Utility/BgImage";
import HoverIcon from "@/components/Utility/HoverIcon";
import { Dribbble, Twitter } from "iconoir-react";
import Link from "next/link";
import React from "react";

function Profile() {
  return (
    <>
      <div data-aos="zoom-in" className="aos-init aos-animate">
        <div className="about-profile-box info-box shadow-box h-full">
          <BgImage />
          <div className="inner-profile-icons shadow-box">
            <Link href={""} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Dribbble fontSize={"22px"}  />
              </a>
            </Link>

            <Link href={""} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Twitter fontSize={"22px"}  />
              </a>
            </Link>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="infos">
              <h4>Stay with me</h4>
              <h1>Profiles</h1>
            </div>

            <Link href={"/about"} className="about-btn">
              <HoverIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
