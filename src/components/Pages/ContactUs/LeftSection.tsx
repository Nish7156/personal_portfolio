import { Twitter, Instagram, LinkedIn, Mail } from "iconoir-react";
import Link from "next/link";
import React from "react";
import { BiLocationPlus, BiPhoneCall, BiPhoneOutgoing } from "react-icons/bi";

function LeftSection() {
  return (
    <>
      <div className="contact-infos">
        <h3 data-aos="fade-up" className="aos-init aos-animate">
          Contact Info
        </h3>
        <ul className="contact-details">
          <li
            className="d-flex align-items-center aos-init aos-animate"
            data-aos="zoom-in"
          >
            <div className="icon-box shadow-box">
              <Link href={""} legacyBehavior>
                <a className=" hover:text-primary absolute right-[30%] top-[30%]">
                  <Mail fontSize={"22px"} />
                </a>
              </Link>
            </div>
            <div className="right">
              <span>MAIL us</span>
              <h4>shedagenishant40@gmail.com</h4>
              <h4>webtriggers11@gmail.com</h4>
            </div>
          </li>

          <li
            className="d-flex align-items-center aos-init aos-animate"
            data-aos="zoom-in"
          >
           <div className="icon-box shadow-box">
              <Link href={""} legacyBehavior>
                <a className=" hover:text-primary absolute right-[30%] top-[30%]">
                  <BiPhoneCall fontSize={"30px"} />
                </a>
              </Link>
            </div>

            <div className="right">
              <span>Contact Us</span>
              <h4>8419997925</h4>
              <h4>9930101612</h4>
            </div>
          </li>

          <li
            className="d-flex align-items-center aos-init aos-animate"
            data-aos="zoom-in"
          >
            <div className="icon-box shadow-box">
              <Link href={""} legacyBehavior>
                <a className=" hover:text-primary absolute right-[30%] top-[30%]">
                  <BiLocationPlus fontSize={"30px"} />
                </a>
              </Link>
            </div>
            <div className="right">
              <span>Location</span>
              <h4>
               Mumbai
              </h4>
            </div>
          </li>
        </ul>

        <h3 data-aos="fade-up" className="aos-init aos-animate">
          Social Info
        </h3>
        <ul
          className="social-links d-flex align-center aos-init aos-animate"
          data-aos="zoom-in"
        >
          <li>
            <Link href={""} legacyBehavior>
              <a className="shadow-box relative ">
                <div className=" absolute right-[30%] top-[30%]">
                  <LinkedIn fontSize={"22px"} />
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href={""} legacyBehavior>
              <a className="shadow-box relative ">
                <div className=" absolute right-[30%] top-[30%]">
                  <Twitter fontSize={"22px"} />
                </div>
              </a>
            </Link>
          </li>
          <li>
            <Link href={""} legacyBehavior>
              <a className="shadow-box relative ">
                <div className=" absolute right-[30%] top-[30%]">
                  <Instagram fontSize={"22px"} />
                </div>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default LeftSection;
