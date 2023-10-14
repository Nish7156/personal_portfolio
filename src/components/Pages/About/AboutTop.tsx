import Image from "next/image";
import React from "react";

function AboutTop() {
  return (
    <>
      <div className=" mt-0 md:!mt-10">
        <div className="flex flex-col gap-4 md:flex-row">
          <div
            className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-8c8f0ed"
            data-id="8c8f0ed"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-bcceb75 elementor-widget elementor-widget-gridxdaaboutimg"
                data-id="bcceb75"
                data-element_type="widget"
                data-widget_type="gridxdaaboutimg.default"
              >
                <div className="elementor-widget-container">
                  <div
                    data-aos="zoom-in"
                    className="about-image-box-wrap aos-init aos-animate"
                  >
                    <div className="about-image-box shadow-box">
                      <img
                        decoding="async"
                        src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/bg1.png"
                        alt="BG"
                        className="bg-img"
                      />

                      <div className="image-inner">
                        <Image
                          src={"/images/me.jpeg"}
                          alt="Image"
                          width={305}
                          height={296}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-fcda44d"
            data-id="fcda44d"
            data-element_type="column"
          >
            <div className="elementor-widget-wrap elementor-element-populated">
              <div
                className="elementor-element elementor-element-1c9e78e elementor-widget elementor-widget-gridxdaaboutdetail"
                data-id="1c9e78e"
                data-element_type="widget"
                data-widget_type="gridxdaaboutdetail.default"
              >
                <div className="elementor-widget-container">
                  <div
                    className="about-details aos-init aos-animate"
                    data-aos="zoom-in"
                  >
                    <h1 className="section-heading mb-12" data-aos="">
                      <img
                        decoding="async"
                        src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
                        alt="Star"
                      />
                      Self-summary
                      <img
                        decoding="async"
                        src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/star-2.png"
                        alt="Star"
                      />
                    </h1>

                    <div className="about-details-inner shadow-box">
                      <img
                        decoding="async"
                        src="https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon2.png"
                        alt="Icon"
                        className="star-icon"
                      />

                      <h1 className="text-primary">Nishant Shedage</h1>
                      <p className="pt-2">
                        I'm a full-stack developer with skills in both front-end
                        and back-end development, using languages like HTML,
                        CSS, JavaScript, and technologies such as PHP or Python.
                        I specialize in creating user-friendly and
                        high-performance web applications, offering end-to-end
                        solutions for diverse online experiences. My commitment
                        is to deliver seamless and responsive projects that
                        contribute to a positive user journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutTop;
