import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import AOS from "aos";
import bgSvg from "/images/Hero-bg2.svg";
function Home1() {
   useEffect(() => {
          AOS.init({duration:1000, once:true});
              AOS.refresh();
  
      },[]); 
  return (
    <>
   
    <div className='py-5' 
   
    style={{
        backgroundImage: `url("${bgSvg}")`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        minHeight: "520px",
        position: "relative", // ensure boxes z-index works
        zIndex: 1,}}
    >
       
   <div className='text-center text-light pt-3 '>
    <h1 className='mobiw heading1' data-aos="fade-up">"Revolutionizing Software Testing with AI-Driven Automation."</h1>
   </div>
    <div className='text-center text-light subheading'>
      <p>Astraforge.io is an advanced AI-powered automation framework that learns from your test history, domain, and behavior to generate smarter, faster, and more reliable test plans and executions. From test creation to analytics — it’s automation reimagined.</p>
    </div>
    <div className='d-flex align-items-center gapi gap-md-4 justify-content-center'>
      <Link to="/feature" ><button aria-label="Explore Features" title="Explore Features" className='text-light py-2 px-3 fw-bold bg-primaryi grad rounded-5 border-primary' >Explore Features</button></Link>
        <Link to="/architectureall" ><button aria-label="View Architecture" title="View Architecture" className='text-light py-2 px-3 fw-bold bg-primaryi grad rounded-5 border-primary' >View Architecture</button></Link>
        {/* <Link to="/gettrial" ><button className='text-light py-2 px-3 fw-bold bg-primaryi grad rounded-5 border-0' >Get a Demo</button></Link> */}
        <Link to="/gettrial" ><button aria-label="Request a Demo" title="Request a Demo" className='text-light py-2 px-3 fw-bold bg-primaryi grad rounded-5 border-primary'>Request a Demo</button></Link>

    </div>
    </div>

    </>
  )
}


export default Home1;
