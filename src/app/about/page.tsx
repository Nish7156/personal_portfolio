import AboutTop from "@/components/Pages/About/AboutTop";
import Details from "@/components/Pages/About/Details";
import Credentials from "@/components/Pages/Home/SmallCards/Credentials";
import LetsWork from "@/components/Pages/Home/SmallCards/LetsWork";
import Profile from "@/components/Pages/Home/SmallCards/Profile";
import React from "react";

function AboutUs() {
  return (
    <div className="container">
      <AboutTop />
      <Details />
      <div className="mt-10 flex flex-col md:flex-row gap-4">
        <Profile />
       <div className="hidden lg:flex">
       <Credentials />
       </div>

        <LetsWork  />
      </div>
    </div>
  );
}

export default AboutUs;