import React, { useEffect, useRef, useState } from 'react'
import bgSvg from "/images/Hero-bg2.svg";

function Home2() {
  const scrollBoxRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(()=>{
    const box = scrollBoxRef.current;
    const speed = 0.8;
    let animationId;

    const scroll = () => {
      if (!paused){
        setOffset((prev) => {
          if(prev >= box.scrollHeight / 2) {
            return 0;
          }
          return prev + speed;
        })
      }
      animationId = requestAnimationFrame(scroll);
    };
    scroll();
    return () => cancelAnimationFrame(animationId);
  },[paused]);

  return (
    <>
    <div className='container-fluid bg-dark12 p-5'
     style={{
                backgroundImage: `url("${bgSvg}")`,
                backgroundSize: "cover",
                backgroundRepeat: "repeat",
                backgroundPosition: "center",
                minHeight: "520px",
                position: "relative", // ensure boxes z-index works
                zIndex: 1,}}
    >
        <h3 className='text-start ms-md-5 mb-5 text-primary astmobil'>Why Astraforge.ai ?</h3>
    <div className='row align-items-center justify-content-center g-5 px-md-5'>
    <div className='col-12 col-sm-6 col-md-12 col-lg-5 col-xl-5 col-xxl-6 '>
      
        <div className='d-flex align-items-center justify-content-center rounded-5 pt-1 pe-md-3 pe-sm-0 ps-md-1 ps-sm-0 pb-5 divcol11 bg-dark12 '>
       <ul className='list-unstyled padend pt-4'>
        <li className='text-justify text-light mb-3'><i className="bi bi-gear-wide-connected fs-6 me-2 text-primary"></i>Traditional automation frameworks require manual test design, locator maintenance, and time-consuming configuration.</li>
        <li className='text-justify text-light'><i className="bi bi-gear-wide-connected fs-6 me-2 text-primary"></i>AstroFroge.ai brings intelligence, adaptability, and automation together — making your testing lifecycle self-aware, self-healing, and continuously improving.</li>
       </ul>
        </div>
    </div>
    <div className='col-12 col-sm-6 col-md-12 col-lg-7 col-xl-7 col-xxl-6  '>
        <div className='d-flex align-items-center justify-content-center rounded-5 divcol11 bg-dark1'>
          <div 
          className='scroll-box'
          onMouseEnter={()=> setPaused(true)}
          onMouseLeave={()=>setPaused(false)}
          >
            <div className='scroll-content'
             ref={scrollBoxRef}
             style={{ transform: `translateY(-${offset}px)` }}
            >
                {/* Original List */}
                <div className='items  my-4 mx-4 rounded-4 d-flex align-items-center justify-content-center px-4 py-4'>
                <div className='bg-light text-dark rounded-circle  p-3 me-2 d-flex justify-content-center align-items-center' style={{ width: "60px", height: "60px" }}>
                  <i class="bi bi-gear fs-3"></i>
                </div>
                <div><p className='text-light'>Accelerate automation coverage 10x</p>
                </div>
                </div>
                 <div className='items  my-4 mx-4 rounded-4 d-flex align-items-center justify-content-center px-4 py-4'>
                <div className='bg-light text-dark rounded-circle  p-3 me-2 d-flex justify-content-center align-items-center' style={{ width: "60px", height: "60px" }}>
                  <i class="bi bi-bullseye fs-3"></i>
                </div>
                <div><p className='text-light'>Generate intelligent test cases automatically</p>
                </div>
                </div>
                 <div className='items  my-4 mx-4 rounded-4 d-flex align-items-center justify-content-center px-4 py-4'>
                <div className='bg-light text-dark rounded-circle  p-3 me-2 d-flex justify-content-center align-items-center' style={{ width: "60px", height: "60px" }}>
                  <i class="bi bi-ui-radios-grid fs-3"></i>
                </div>
                <div><p className='text-light'>Adapt tests dynamically with self-healing locators</p>
                </div>
                </div>
              
                 <div className='items  my-4 mx-4 rounded-4 d-flex align-items-center justify-content-center px-4 py-4'>
                <div className='bg-light text-dark rounded-circle  p-3 me-2 d-flex justify-content-center align-items-center' style={{ width: "60px", height: "60px" }}>
                  <i class="bi bi-bullseye fs-3"></i>
                </div>
                <div><p className='text-light'>Gain actionable insights through AI-driven analytics</p>
                </div>
                </div>
                 <div className='items  my-4 mx-4 rounded-4 d-flex align-items-center justify-content-center px-4 py-4'>
                <div className='bg-light text-dark rounded-circle  p-3 me-2 d-flex justify-content-center align-items-center' style={{ width: "60px", height: "60px" }}>
                  <i class="bi bi-bullseye fs-3"></i>
                </div>
                <div><p className='text-light'>Integrate security and performance validation seamlessly</p>
                </div>
                </div>

                {/* Duplicate List for infinite loop */}
               <div className='items  my-4 mx-4 rounded-4 d-flex align-items-center justify-content-center px-4 py-4'>
                <div className='bg-light text-dark rounded-circle  p-3 me-2 d-flex justify-content-center align-items-center' style={{ width: "60px", height: "60px" }}>
                  <i class="bi bi-gear fs-3"></i>
                </div>
                <div><p className='text-light'>Accelerate automation coverage 10x</p>
                </div>
                </div>
                 <div className='items  my-4 mx-4 rounded-4 d-flex align-items-center justify-content-center px-4 py-4'>
                <div className='bg-light text-dark rounded-circle  p-3 me-2 d-flex justify-content-center align-items-center' style={{ width: "60px", height: "60px" }}>
                  <i class="bi bi-bullseye fs-3"></i>
                </div>
                <div><p className='text-light'>Generate intelligent test cases automatically</p>
                </div>
                </div>
                 <div className='items  my-4 mx-4 rounded-4 d-flex align-items-center justify-content-center px-4 py-4'>
                <div className='bg-light text-dark rounded-circle  p-3 me-2 d-flex justify-content-center align-items-center' style={{ width: "60px", height: "60px" }}>
                  <i class="bi bi-ui-radios-grid fs-3"></i>
                </div>
                <div><p className='text-light'>Adapt tests dynamically with self-healing locators</p>
                </div>
                </div>
              
                 <div className='items  my-4 mx-4 rounded-4 d-flex align-items-center justify-content-center px-4 py-4'>
                <div className='bg-light text-dark rounded-circle  p-3 me-2 d-flex justify-content-center align-items-center' style={{ width: "60px", height: "60px" }}>
                  <i class="bi bi-bullseye fs-3"></i>
                </div>
                <div><p className='text-light'>Gain actionable insights through AI-driven analytics</p>
                </div>
                </div>
                 <div className='items  my-4 mx-4 rounded-4 d-flex align-items-center justify-content-center px-4 py-4'>
                <div className='bg-light text-dark rounded-circle  p-3 me-2 d-flex justify-content-center align-items-center' style={{ width: "60px", height: "60px" }}>
                  <i class="bi bi-bullseye fs-3"></i>
                </div>
                <div><p className='text-light'>Integrate security and performance validation seamlessly</p>
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

export default Home2
