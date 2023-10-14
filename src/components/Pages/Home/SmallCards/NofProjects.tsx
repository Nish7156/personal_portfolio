import BgImage from "@/components/Utility/BgImage";
import { ClientData } from "@/lib/constant";
import React from "react";

function NofProjects() {
  return (
    <>
      <div className="col-md-6 aos-init aos-animate" data-aos="zoom-in">
        <div className="about-client-box info-box shadow-box">
          <BgImage />
          <div className="clients d-flex align-items-start justify-content-center gap-6 overflow-x-auto">
            {ClientData &&
              ClientData.map((data: any) => {
                return (
                  <div key={data.id} className="client-item">
                    <h1>{data?.value}</h1>
                    <p>
                     {data.title}
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default NofProjects;
