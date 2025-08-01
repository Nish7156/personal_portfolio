"use client";
import useScreenResize from "@/Hooks/useScreenResize";
import { Twitter, Instagram, LinkedIn, Mail } from "iconoir-react";
import Link from "next/link";
import React from "react";
import { BiLocationPlus, BiPhoneCall } from "react-icons/bi";

function LeftSection() {
  const isTab = useScreenResize(320, 768);

  return (
    <div className="contact-infos">
      <h3 data-aos="fade-up">Contact Info</h3>
      <ul className="contact-details">
        {/* Email */}
        <li className="d-flex align-items-center" data-aos="zoom-in">
          <div className="icon-box shadow-box flex items-center justify-center">
            <Mail fontSize={isTab ? "17px" : "22px"} />
          </div>
          <div className="right">
            <span>MAIL us</span>
            <h4>
              <Link href="mailto:shedagenishant40@gmail.com">
                shedagenishant40@gmail.com
              </Link>
            </h4>
          </div>
        </li>

        {/* Phone */}
        <li className="d-flex align-items-center" data-aos="zoom-in">
          <div className="icon-box shadow-box flex items-center justify-center">
            <BiPhoneCall fontSize={isTab ? "25px" : "30px"} />
          </div>
          <div className="right">
            <span>Contact Us</span>
            <h4>
              <Link href="tel:8419997925">8419997925</Link>
            </h4>
          </div>
        </li>

        {/* Location */}
        <li className="d-flex align-items-center" data-aos="zoom-in">
          <div className="icon-box shadow-box flex items-center justify-center">
            <BiLocationPlus fontSize={isTab ? "25px" : "30px"} />
          </div>
          <div className="right">
            <span>Location</span>
            <h4>Mumbai</h4>
          </div>
        </li>
      </ul>

   
    </div>
  );
}

export default LeftSection;
