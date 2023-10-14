import React from "react";
import NextImage from "@/components/NextImage";
import MovingHeadings from "./SmallCards/MovingHeadings";
import Credentials from "./SmallCards/Credentials";
import Projects from "./SmallCards/Projects";
import BgImage from "@/components/Utility/BgImage";
import HoverIcon from "@/components/Utility/HoverIcon";
import GFonts from "./SmallCards/GFonts";
import Service from "./SmallCards/Service";
import Profile from "./SmallCards/Profile";
import NofProjects from "./SmallCards/NofProjects";
import LetsWork from "./SmallCards/LetsWork";
import Link from "next/link";
import ProfileCard from "./SmallCards/ProfileCard";

function HeroSection() {
  return (
    <>
      <section className="about-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6 aos-init aos-animate" data-aos="zoom-in">
              <ProfileCard
                title={"A WEB DEVELOPER."}
                name={"NISHANT SHEDAGE"}
                desc={"I am web developer based on Mumbai."}
                link="/about"
              />
            </div>
            <div className="col-md-6">
              <div className="about-credentials-wrap">
                <MovingHeadings />

                <div className="gx-row d-flex gap-6">
                  <Credentials />

                  <Projects />
                </div>
              </div>
            </div>
          </div>

          {/* SeconRow */}
          <div className="row !mt-8">
            <div className="col-md-12">
              <div className="blog-service-profile-wrap d-flex gap-6">
                <GFonts />

                <Service />

                <Profile />
              </div>
            </div>
          </div>
          {/* ThirdRow */}
          <div className="row !mt-8">
            <NofProjects />
            <LetsWork />
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
