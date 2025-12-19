import React from 'react'

function Footer1() {
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
                <p><a>Home</a></p>
                <p><a>Features</a></p>
                <p><a>Pricing</a></p>
                <p><a>Contact</a></p>
                <p><a>Documentation</a></p>
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
                  Nagpur, Maharashtra, India
                </p>
                <p>
                  <span><i className="bi bi-envelope-fill me-2"></i></span>
                  contact@astraforge.io
                </p>
                <p>
                  <span><i className="bi bi-telephone-fill me-2"></i></span>
                  +91 90000 00000
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
            <div className='d-inline-flex'>
              <p className='me-4'>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Footer1;
