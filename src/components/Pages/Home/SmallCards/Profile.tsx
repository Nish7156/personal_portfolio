import BgImage from "@/components/Utility/BgImage";
import HoverIcon from "@/components/Utility/HoverIcon";
import { Dribbble, LinkedIn } from "iconoir-react";
import Link from "next/link";
import React from "react";

function Profile() {
  return (
    <>
      <div data-aos="zoom-in" className="aos-init aos-animate">
        <div className="about-profile-box info-box shadow-box h-full">
          <BgImage />
          <div className="inner-profile-icons shadow-box">
            <Link href={"https://github.com/Nish7156"} prefetch={false} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <Dribbble fontSize={"22px"} />
              </a>
            </Link>

            <Link href={"https://www.linkedin.com/in/nishant-shedage-b2497520b/"} prefetch={false} legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <LinkedIn fontSize={"22px"} />
              </a>
            </Link>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div className="infos">
              <h4>Stay with me</h4>
              <h1>Profile</h1>
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
