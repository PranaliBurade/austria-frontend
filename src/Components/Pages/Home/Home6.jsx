import React, { useEffect } from 'react'
import AOS from "aos";
import bgSvg from "/images/Hero-bg2.svg";
import { Link } from 'react-router-dom';
function Home6() {
 
       useEffect(() => {
              AOS.init({duration:1000, once:true});
                  AOS.refresh();
      
          },[]); 
          
  return (
    <>
    <div className=' container-fluid divcol1 text-light'
     style={{
            backgroundImage: `url("${bgSvg}")`,
            backgroundSize: "cover",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            minHeight: "520px",
            position: "relative", 
            zIndex: 1,}}
    >
       
         <div className='topi'>
            <div className='container'>
                <h3 className='text-primary tyyuu'>Integration</h3>
            </div>
            
            <div className=' paddi4 ' data-aos="fade-up" data-aos-delay="0"   data-aos-once="false">
                <div className='bg-light1  px-4 py-2 rounded-4'>
                    <img src='/images/cypress-1.svg' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Cypress</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/selenium.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Selenium</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/playwright.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Playwright</h5>
                </div>
               <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/postman.svg' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Postman</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/webdriverio.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>WebdriverIO</h5>
                </div>
            </div>
            
            <div className=' paddi4' data-aos="fade-up" data-aos-delay="0"   data-aos-once="false">
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/testcafe.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>TestCafe</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/Appium.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Appium</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/K6.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>K6</h5>
                </div>
               <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/jmeter.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>JMeter</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/robot_framework.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Robot Framework</h5>
                </div>
            </div>
            <div className='d-flex justify-content-center '>
                          <Link to="/integrationall"> <button className='p-2 fw-bold grad border border-1 border-primary text-light rounded-3'>View All Integration</button></Link> 
            </div>
            
        </div>
        
    </div>
    </>
  )
}

export default Home6;

