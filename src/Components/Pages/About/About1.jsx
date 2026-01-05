import React, { useEffect, useState } from 'react';
// import bgSvg from "/Hero-bg2.svg";
import bgSvg from "/images/Hero-bg2.svg"

const About1 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector('.about-content');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    // Call it once on mount to check initial visibility
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container-fluid  about-us"
    style={{
            backgroundImage: `url("${bgSvg}")`,
            backgroundSize: "cover",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            minHeight: "520px",
            position: "relative", // ensure boxes z-index works
            zIndex: 1,}}
        >
    
      {/* <div className="background-image" 
      style={{ backgroundImage: "url('/images/backgroundimg.jpg')" }}
      ></div> */}
      <div className="overlay"></div>
      <div className={`about-content ${isVisible ? 'fade-in' : ''}`}>
        <h1 className="title">About Us</h1>
        <div className="glass-card">
          <p className="description">
            AstroFroge.io is built by engineers passionate about automation, intelligence, and quality.
            Our mission is to make testing smarter, faster, and self-evolving — reducing manual effort while increasing software reliability.
          </p>
        </div>
        <div className="features">
          <div className="glass-card feature">
            <h3 className='text-primary'>Automation</h3>
            <p>Streamlining tests for efficiency and speed.</p>
          </div>
          <div className="glass-card feature">
            <h3 className='text-primary'>Coverage</h3>
            <p>Ensuring comprehensive quality assurance across all scenarios.</p>
          </div>
          <div className="glass-card feature disf">
            <h3 className='text-primary'>Integration</h3>
            <p>Seamless testing across platforms and environments.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About1;