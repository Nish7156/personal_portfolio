import React from 'react'

function LeftSection() {
  return (
    <>
        <div className="contact-infos">
              <h3 data-aos="fade-up" className="aos-init aos-animate">
                Contact Info
              </h3>
              <ul className="contact-details">
                <li
                  className="d-flex align-items-center aos-init aos-animate"
                  data-aos="zoom-in"
                >
                  <div className="icon-box shadow-box">
                    <i className="iconoir-mail"></i>
                  </div>
                  <div className="right">
                    <span>MAIL us</span>
                    <h4>info@bluebase.com</h4>
                    <h4>info@bluebase2.com</h4>
                  </div>
                </li>

                <li
                  className="d-flex align-items-center aos-init aos-animate"
                  data-aos="zoom-in"
                >
                  <div className="icon-box shadow-box">
                    <i className="iconoir-phone"></i>
                  </div>
                  <div className="right">
                    <span>Contact Us</span>
                    <h4>+1 504-899-8221</h4>
                    <h4>+1 504-749-5456</h4>
                  </div>
                </li>

                <li
                  className="d-flex align-items-center aos-init aos-animate"
                  data-aos="zoom-in"
                >
                  <div className="icon-box shadow-box">
                    <i className="iconoir-pin-alt"></i>
                  </div>
                  <div className="right">
                    <span>Location</span>
                    <h4>
                      22 Baker Street, Texas <br />
                      United States <br />
                      W1U 3BW
                    </h4>
                  </div>
                </li>
              </ul>

              <h3 data-aos="fade-up" className="aos-init aos-animate">
                Social Info
              </h3>
              <ul
                className="social-links d-flex align-center aos-init aos-animate"
                data-aos="zoom-in"
              >
                <li>
                  <a className="shadow-box" href="">
                    <i className="iconoir-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a className="shadow-box" href="">
                    <i className="iconoir-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="shadow-box" href="">
                    <i className="iconoir-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
    </>
  )
}

export default LeftSection