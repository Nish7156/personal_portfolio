import PrimaryButton from "@/components/elements/PrimaryButton";
import StarHeading from "@/components/elements/StarHeading";
import React from "react";

function GFontsPage() {
  return (
    <>
      <div className="container">
        <div className="  sm:my-4 md:my-28">
          <StarHeading heading={"Comming Soon"} />
        </div>
        <div className=" flex justify-center items-center">
            <PrimaryButton link={"/"} btnText={"Go Back"}/>
        </div>
      </div>
    </>
  );
}

export default GFontsPage;
