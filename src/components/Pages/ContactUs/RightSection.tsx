import NextImage from "@/components/NextImage";
import BgImage from "@/components/Utility/BgImage";
import React from "react";

function RightSection() {
  return (
    <>
      <div
        data-aos="zoom-in"
        className="contact-form aos-init aos-animate relative"
      >
        <div className="shadow-box relative">
          <BgImage />
          <div className=" about-btn -top-10">
            <NextImage
              src={"/images/icon3.png"}
              alt="Icon"
              width={37}
              height={97}
              className=""
            />
          </div>
          <h1>
            Let’s work <span>together.</span>
          </h1>
          <form method="POST" action="mailer.php">
            {/* <div className="alert alert-success messenger-box-contact__msg" style="display: none;" role="alert">
                            Your message was sent successfully.
                        </div> */}
            <div className="input-group">
              <input
                type="text"
                name="full-name"
                id="full-name"
                placeholder="Name *"
              />
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email *"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Your Subject *"
              />
            </div>
            <div className="input-group">
              <textarea
                name="message"
                id="message"
                placeholder="Your Message *"
              ></textarea>
            </div>
            <div className="input-group">
              <button
                className="theme-btn submit-btn"
                name="submit"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RightSection;
