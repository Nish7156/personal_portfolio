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

function HeroSection() {
  return (
    <>
      <section className="about-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6 aos-init aos-animate" data-aos="zoom-in">
              <div className="about-me-box shadow-box">
                <a className="overlay-link" href="#"></a>

                <BgImage />
                <div className="img-box">
                  <NextImage
                  
                    src={"/images/me.jpeg"}
                    alt="Image"
                    height={224}
                    width={224}
                  />
                </div>
                <div className="infos">
                  <h4>A WEB DEVELOPER</h4>
                  <h1>Nishant Shedage.</h1>
                  <p>I am a Web Designer based in mumbai.</p>
                  <a href="#" className="about-btn">
                    <HoverIcon />
                  </a>
                </div>
              </div>
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
           <LetsWork/>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
