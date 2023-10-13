import { MovingHeading } from "@/lib/constant";
import { upperCase } from "lodash";
import Image from "next/image";
import React from "react";

function MovingHeadings() {
  return (
    <>
      <div data-aos="zoom-in" className="aos-init aos-animate">
        <div className="banner shadow-box">
          <div className="marquee">
            <div>
              <span>
                {MovingHeading &&
                  MovingHeading.map((data: any) => {
                    return (
                      <>
                        {upperCase(data?.text)}{" "}
                        <b>{upperCase(data?.boldText)}</b>{" "}
                        <Image width={10} height={10} src={"/svg/star1.svg"} alt="Star" />
                      </>
                    );
                  })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovingHeadings;
