import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from "react";
import TermsPopup from './TermAndPrivacyAllPages/TermsPopup';
import PrivacyPopup from './TermAndPrivacyAllPages/PrivacyPopup';


function Footer1() {
  const [showTerms, setShowTerms] = useState(false);
const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <>
      <div className='container-fluid bggc'>
        <div className='container-fluid bg_footer p-4 footer7'>
          <div className='row justify-content-center d-flex text-light'>

            {/* Company Overview */}
            <div className='col-lg-3 col-12 col-md-3 col-sm-6 col-xl-3'>
              <h5 className='ft_head'><b>Company Overview</b></h5>
              <div className='justify-content-start text_footer'>
                <p>Astraforge.io</p>
                <p>Building scalable web solutions</p>
                <p>Focused on modern product engineering</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className='col-lg-2 col-12 col-md-2 col-sm-6 col-xl-2'>
              <h5 className='ft_head'><b>Quick Links</b></h5>
              <div className='justify-content-start text_footer'>
                <p><Link to="/" className='text-decoration-none text-light'>Home</Link></p>
                <p><Link to="/about" className='text-decoration-none text-light'>Features</Link></p>
                <p><Link to="/pricing" className='text-decoration-none text-light'>Pricing</Link></p>
                <p><Link to="/contact" className='text-decoration-none text-light'>Contact</Link></p>
                <p><Link to="/" className='text-decoration-none text-light'>Documentation</Link></p>
              </div>
            </div>

            {/* Product Features */}
            <div className='col-lg-2 col-12 col-md-2 col-sm-6 col-xl-2'>
              <h5 className='ft_head'><b>Product Features</b></h5>
              <div className='justify-content-start text_footer'>
                <p>API Integration</p>
                <p>Role Management</p>
                <p>Analytics Dashboard</p>
                <p>Secure Authentication</p>
                <p>Cloud Ready</p>
              </div>
            </div>

            {/* Professional Contact */}
            <div className='col-lg-3 col-12 col-md-3 col-sm-6 col-xl-3'>
              <h5 className='ft_head'><b>Contact</b></h5>
              <div className='justify-content-start text_footer'>
                <p>
                  <span><i className="bi bi-geo-alt-fill me-2"></i></span>
                  {/* Nagpur, Maharashtra, India */}
                  {/* Austria */}
                   Austria, country in Central Europe.
                </p>
                <p>
                  <span><i className="bi bi-envelope-fill me-2"></i></span>
                  {/* gainewarsachin@gmail.com */}
                  info@astrofroge.io
                </p>
                <p>
                  <span><i className="bi bi-telephone-fill me-2"></i></span>
                  +91 93999 85410 , +43 6705540609
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className='col-lg-2 col-12 col-md-2 col-sm-6 col-xl-2 '>
              <h5 className='ft_head'><b>Social Links</b></h5>
              <div className='justify-content-start d-inline-flex gap-4 text_footer'>
                <a><i className="bi bi-linkedin p-1 circle_size"></i></a>
                <a><i className="bi bi-github p-1 circle_size"></i></a>
                <a><i className="bi bi-file-earmark-text-fill p-1 circle_size"></i></a>
              </div>
            </div>

          </div>

          <hr className='text_footer' />

          {/* Footer Bottom */}
          <div className='justify-content-between text_footer d-flex'>
            <div>
              <p>© 2025 Astraforge.io</p>
            </div>
            {/* <div className='d-inline-flex'>
              <p className='me-4'>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div> */}
            <div className='d-inline-flex'>
  <p className='me-4' style={{cursor:"pointer"}} onClick={() => setShowTerms(true)}>
    Terms & Conditions
  </p>
  <p style={{cursor:"pointer"}} onClick={() => setShowPrivacy(true)}>
    Privacy Policy
  </p>
</div>

{showTerms && <TermsPopup onClose={() => setShowTerms(false)} />}
{showPrivacy && <PrivacyPopup onClose={() => setShowPrivacy(false)} />}

          </div>

          

        </div>
      </div>
    </>
  )
}

export default Footer1;
