import React from "react";
import BgImage from "../Utility/BgImage";

function CardOutline({ children }: any) {
  return (
    <>
      <div className="elementor-widget-wrap elementor-element-populated">
        <div
          className="elementor-element elementor-element-7ceb529 elementor-widget elementor-widget-gridxdaexperiencebox"
          data-id="7ceb529"
          data-element_type="widget"
          data-widget_type="gridxdaexperiencebox.default"
        >
          <div className="elementor-widget-container">
            <div data-aos="zoom-in" className="aos-init aos-animate">
              <div className="about-edc-exp about-experience shadow-box">
                <BgImage />
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardOutline;
