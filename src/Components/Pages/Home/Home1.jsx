import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import AOS from "aos";
// import Navbar from '../../Layout/Navbar'
function Home1() {
   useEffect(() => {
          AOS.init({duration:1000, once:true});
              AOS.refresh();
  
      },[]); 
  return (
    <>
   
    <div className='heightbg' style={{backgroundImage:"url('bg-img2.jpg')",
      backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "600px"
          
    }}>
       
   <div className='text-center text-light pt-3 '>
    <h1 className='mobiw heading1' data-aos="fade-up">"Revolutionizing Software Testing with AI-Driven Automation."</h1>
   </div>
    <div className='text-center text-light subheading'>
      <p>AstroFroge.ai is an advanced AI-powered automation framework that learns from your test history, domain, and behavior to generate smarter, faster, and more reliable test plans and executions. From test creation to analytics — it’s automation reimagined.</p>
    </div>
    <div className='d-flex align-items-center gapi gap-md-4 justify-content-center'>
      <Link to="/feature" ><button className='text-light py-2 px-3 fw-bold bg-primaryi grad rounded-5 border-0' >Explore Features</button></Link>
        <Link to="/architecture" ><button className='text-light py-2 px-3 fw-bold bg-primaryi grad rounded-5 border-0' >View Architecture</button></Link>
                <Link to="" ><button className='text-light py-2 px-3 fw-bold bg-primaryi grad rounded-5 border-0' > Request Demo</button></Link>

    </div>
    </div>

    </>
  )
}


export default Home1;
