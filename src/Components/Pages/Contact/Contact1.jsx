import React, { useEffect } from "react";
import AOS from "aos";
function Contact1() {

     useEffect(() => {
                  AOS.init({duration:1000, once:true});
                      AOS.refresh();
          
              },[]); 
  return (
    <div className="container-fluid p-0 pt-5 outer-wrapper">
      <div className="image-area">
        <div
          className="bg-image"
          style={{
            backgroundImage: "url('/images/con4.avif')",
          }}
        ></div>
      </div>

     
      <div className="form-area" data-aos="fade-left">
        <div className="form-box">
          <h2 className="mb-3 text-light text-center contactText">Contact</h2>

          <form>
            <div className="tablet-row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
            </div>

            <textarea placeholder="Your Message"></textarea>
            <button type="submit" className="border border-1 border-primary">Send Message</button>
          </form>

          <div className="d-flex align-items-center justify-content-between mt-3 ">
            <p className="m-0 text-light">
              <strong className="fw-light">Email:</strong><span> info@astrofroge.io </span>
            </p>

            <div className="social-links d-flex align-items-center">
              {/* <i className="bi bi-github fs-5 mx-2"></i>
              <i className="bi bi-linkedin fs-5 mx-2"></i>
              <i className="bi bi-file-earmark-text-fill fs-5 mx-2"></i> */}


               {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/company/astraforge-io/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Astraforge LinkedIn"
      title="LinkedIn"
      className="text-decoration-none"
    >
      <i className="bi bi-linkedin  fs-5 mx-2"></i>
    </a>

    {/* X (Twitter) */}
    <a
      href="https://x.com/astraforgeio"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Astraforge X"
      title="Twitter / X"
      className="text-decoration-none"
    >
      <i className="bi bi-twitter-x  fs-5 mx-2"></i>
    </a>

    {/* Hashnode Blog */}
    <a
      href="https://hashnode.com/@astraforgeio"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Astraforge Blog"
      title="Blog"
      className="text-decoration-none"
    >
      <i className="bi bi-file-earmark-text-fill  fs-5 mx-2"></i>
    </a>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Contact1;