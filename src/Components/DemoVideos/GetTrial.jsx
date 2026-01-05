// import { Link } from "react-router-dom";
// import "./getTrial.css";

// export default function GetTrial() {
//   return (
//     <section className="gt-hero-wrapper"
//      style={{
//             backgroundImage: "url('demoback1.webp')",
//             // backgroundImage: "url('demoback2.jpg')",
//             backgroundSize: "cover",
//             backgroundRepeat: "repeat",
//             backgroundPosition: "center",
//             minHeight: "520px",
//             position: "relative", // ensure boxes z-index works
//             zIndex: 1,}}
        
//     >
//       <div className="gt-overlay">
//         <div className="container text-center gt-content">
//           <h1 className="gt-heading">Experience AI-Powered Testing</h1>

//           <p className="gt-desc">
//             Explore real-time test automation with self-healing tests,
//             intelligent insights, and faster releases.
//           </p>

//           <p className="gt-desc">
//             Start with free demo videos or unlock full access with a free trial.
//           </p>

//           <div className="gt-btn-group">
//             <Link to="/demo-videos">
//               <button className="btn gt-btn-primary">
//                 🚀 Start Free Trial
//               </button>
//             </Link>

//             <Link to="/pricing">
//               <button className="btn gt-btn-outline">
//                 💰 Pricing & Plans
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }









// import { Link } from "react-router-dom";
// import { useState } from "react";
// import DemoPopup from "./DemoPopup";
// import "./GetTrial.css";
// export default function GetTrial() {
//   const [open, setOpen] = useState(false);

//   return (
//     <section className="ngqa-hero"
//         style={{
//             backgroundImage: "url('demoback1.webp')",
            
//             backgroundSize: "cover",
//             backgroundRepeat: "repeat",
//             backgroundPosition: "center",
//             minHeight: "520px",
//             position: "relative", 
//             zIndex: 1,}}
        
//     >
//       <div className="ngqa-overlay">
//         <div className="container">
//           <div className="ngqa-content">
//             <h1 className="ngqa-title">
//               Next-Gen QA <br /> Humans + AI
//             </h1>

//             <p className="ngqa-desc">
//               Augment your QA with real human testers from all over the world
//               and utilize AI solutions to run tests, identify issues and ensure
//               fixes are effective.
//             </p>

//             <p className="ngqa-desc">
//               We ensure our clients ship flawless product experiences at scale.
//             </p>



//             <section className="ngqa-hero">
//         <div className="container">
//           <button
//             className="p-2 fw-bold grad border border-primary text-light rounded-3"
//             onClick={() => setOpen(true)}
//           >
//             Request a Demo
//           </button>
//         </div>
//       </section>

//       {open && <DemoPopup onClose={() => setOpen(false)} />}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }












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
      <button onClick={() => setOpen(true)} className=" ngqa-button p-2 fw-bold grad border border-primary text-light rounded-3">Request a Demo</button>
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
