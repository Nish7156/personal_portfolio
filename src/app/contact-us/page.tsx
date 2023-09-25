import LeftSection from "@/components/Pages/ContactUs/LeftSection";
import RightSection from "@/components/Pages/ContactUs/RightSection";
import React from "react";

function ContactUs() {
  return (
    <>
      <div className="container">
        <div className="gx-row d-flex justify-content-between gap-24">
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </>
  );
}

export default ContactUs;
