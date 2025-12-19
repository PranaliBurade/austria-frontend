import React from 'react'

function Footer() {
  return (
    <>
    <div className='container-fluid  bggc'>
    <div className='container-fluid bg_footer p-4 footer7'>
      <div className='row justify-content-center d-flex text-light'>
        <div className='col-lg-3 col-12 col-md-3 col-sm-6 col-xl-3'>
        <h5 className='ft_head'><b>Contact</b></h5>
        <div className='justify-content-start text_footer '>
            <p><span><i class="bi bi-geo-alt-fill me-2"></i></span>Nagpur,Maharashtra,IN</p>
            <p><span><i class="bi bi-telephone-fill me-2"></i></span>+88017010767000</p>
            <p><span><i class="bi bi-envelope-fill me-2"></i></span>anugrahajayrao@gmail.com</p>
        </div>
     
        </div>
        <div className='col-lg-2 col-12 col-md-2 col-sm-6 col-xl-2' >
           <h5 className='ft_head'><b>Quick Links</b></h5>
           <div className='justify-content-start text_footer'>
           <p><a>Home</a></p>
           <p><a>About</a></p>
           <p><a>Product</a></p>
           <p><a>Contact</a></p>
        </div>
        </div>
        <div className='col-lg-2 col-12 col-md-2 col-sm-6 col-xl-2'>
           <h5 className='ft_head'><b>Specialties</b></h5>
           <div className='justify-content-start text_footer'>
           <p>Anesthesiology</p>
           <p>Psychiatry</p>
           <p>General surgery</p>
           <p>Family medicine</p>
           <p>Pediatrics</p>
        </div>
        </div>
        <div className='col-lg-2 col-12 col-md-2 col-sm-6 col-xl-2'>
          <h5 className='ft_head'><b>Services</b></h5>
          <div className='justify-content-start text_footer'>
          <p>Medical</p>
          <p>Operation</p>
          <p>Laboratory</p>
          <p>ICU</p>
          <p>Patient Ward</p>
        </div>
        </div>
        <div className='col-lg-3 col-12 col-md-3 col-sm-6 col-xl-3'>
           <h5 className='ft_head'><b>Social Media</b></h5>
           <div className='justify-content-start d-inline-flex gap-4 text_footer'>
              <a><i class="bi bi-linkedin p-1 circle_size"></i></a>
              <a><i class="bi bi-github"></i></a>
              <a><i class="bi bi-file-earmark-pdf-fill"></i></a>
           </div>
        </div>
      </div>
      <hr className='text_footer '></hr>
      <div className='justify-content-between text_footer d-flex'>
          <div><p>© 2025 Astraforge.io</p></div>
          <div className='d-inline-flex'><p className='me-4'>Terms and Conditions</p>
          <p>Privacy Policy</p></div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Footer;
