import PrimaryButton from "@/components/elements/PrimaryButton";
import StarHeading from "@/components/elements/StarHeading";
import React from "react";

function GFontsPage() {
  return (
    <>
      <div className="container">
        <div className="md:my-28">
          <StarHeading heading={"Comming Soon"} />
        </div>
        <div className=" mt-20 flex items-center justify-center md:mt-0">
          <PrimaryButton link={"/"} btnText={"Go Back"} />
        </div>
      </div>
    </>
  );
}

export default GFontsPage;
