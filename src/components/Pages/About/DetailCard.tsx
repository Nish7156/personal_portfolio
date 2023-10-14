import React from "react";

function DetailCard() {
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
                <img
                  decoding="async"
                  src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/bg1.png"
                  alt="BG"
                  className="bg-img"
                />

                <h3>EXPERIENCE</h3>

                <ul>
                  <li>
                    <p className="date">2022 - current</p>
                    <h2>FullStack Developer</h2>
                    <p className="type">Bluebase jj</p>
                  </li>
                  <li>
                    <p className="date">2017 - 2023</p>
                    <h2>Front-End Developer</h2>
                    <p className="type">Larsen &amp; Toubro</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailCard;
