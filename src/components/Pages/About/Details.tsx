import React from "react";

function Details() {
  return (
    <>
      <section className="mt-10">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex-1">
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
                          <p className="date">2007 - 2017</p>
                          <h2>Framer Designer &amp; Developer</h2>
                          <p className="type">Bluebase Designs</p>
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
          </div>
          <div className="flex-1">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-1f8eed7 elementor-widget elementor-widget-gridxdaeducationbox"
                data-id="1f8eed7"
                data-element_type="widget"
                data-widget_type="gridxdaeducationbox.default"
              >
                <div className="elementor-widget-container">
                  <div data-aos="zoom-in" className="aos-init aos-animate">
                    <div className="about-edc-exp about-education shadow-box">
                      <img
                        decoding="async"
                        src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/bg1.png"
                        alt="BG"
                        className="bg-img"
                      />

                      <h3>EDUCATION</h3>

                      <ul>
                        <li>
                          <p className="date">2004 - 2007</p>
                          <h2>Bachelor Degree in Psychology</h2>
                          <p className="type">University of California</p>
                        </li>
                        <li>
                          <p className="date">2007 - 2009</p>
                          <h2>Master Degree in Designing</h2>
                          <p className="type">University of Texas</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Details;
