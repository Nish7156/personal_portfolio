import AboutTop from "@/components/Pages/About/AboutTop";
import Details from "@/components/Pages/About/Details";
import MoreServiceIcon from "@/components/Pages/CommonComponent/MoreServiceIcon";
import Credentials from "@/components/Pages/Home/SmallCards/Credentials";
import LetsWork from "@/components/Pages/Home/SmallCards/LetsWork";
import Profile from "@/components/Pages/Home/SmallCards/Profile";
import Service from "@/components/Pages/Home/SmallCards/Service";
import React from "react";

function AboutUs() {
  return (
    <div className="container">
      <AboutTop />
      <Details />
      <div className=" my-10 flex items-center justify-center">
        <MoreServiceIcon />
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <Profile />
        <div className="hidden lg:flex">
          <Credentials />
        </div>

        <LetsWork />
      </div>
    </div>
  );
}

export default AboutUs;
