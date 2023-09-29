import React from 'react'

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
                        <img
                          decoding="async"
                          src="https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/me2.png"
                          alt="About Me"
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

                      <h1>David Henderson</h1>
                      <p>
                        I am a San francisco-based product designer with a focus
                        on web design, illustration, a visual development. I
                        have a diverse range of experience having worked across
                        various fields and industries.
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
  )
}

export default AboutTop