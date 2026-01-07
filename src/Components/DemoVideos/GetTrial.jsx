


import { useState } from "react";
import DemoPopup from "./DemoPopup";
import "./GetTrial.css";
export default function GetTrial() {
  const [open, setOpen] = useState(false);

  return (
     <section className="ngqa-hero"
        style={{
            backgroundImage: "url('/images/demoback1.webp')",
            backgroundSize: "cover",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            minHeight: "520px",
            position: "relative", 
            zIndex: 1,}}
        
    >
      <div className="ngqa-overlay">
        <div className="container">
          <div className="ngqa-content">
            <h1 className="ngqa-title">
              Next-Gen QA <br /> Humans + AI
            </h1>

            <p className="ngqa-desc">
              Empower your QA with a blend of global human expertise and AI-driven testing to uncover issues faster and validate fixes with confidence.
            </p>

            <p className="ngqa-desc">
              We help teams deliver reliable, high-quality digital experiences at scale.

            </p>



            <section className="ngqa-hero">
         <div className="">
      <button onClick={() => setOpen(true)} aria-label="Request a Demo" title="Request a Demo" className="ngqa-button p-2 fw-bold grad border border-primary text-light rounded-3">Request a Demo</button>
      {open && <DemoPopup onClose={() => setOpen(false)} />}
    </div>
      </section>

      {open && <DemoPopup onClose={() => setOpen(false)} />}
          </div>
        </div>
      </div>
    </section>
   
  );
}
