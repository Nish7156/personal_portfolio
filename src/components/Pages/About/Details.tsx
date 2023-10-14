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
                          <p className="date">2022 - current</p>
                          <h2>Full-Stack Web Developer</h2>
                          <p className="type">All types of web apolications</p>
                        </li>
                        <li>
                          <p className="date">2019 - 2022</p>
                          <h2>Front-End Developer</h2>
                          <p className="type">One page websites</p>
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
                          <p className="date">2018 - 2022</p>
                          <h2>Computer Science Engineering</h2>
                          <p className="type">University of Mumbai</p>
                        </li>
                        <li>
                          <p className="date">2018 - 2019</p>
                          <h2>Web Development Traning</h2>
                          <p className="type">Udemy</p>
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
