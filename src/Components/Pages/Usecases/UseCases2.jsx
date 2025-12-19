// import React from "react";


// const UseCases2 = () => {
//   return (
//     <div className="usecase-wrapper">

//       {/* Background Image */}
//       <div
//         className="usecase-bg"
//         style={{ backgroundImage: "url('useback1.jpg')" }}
      
//       >
        
//         <div className="container">

//           <div className="row justify-content-center usecase-row">

//           <h3 className="mb-3 text-primary">Use Cases</h3>
//             <div className="col-auto">
//               <div className="usecase-box custom-box">
//                 {/* <img src="ai1.webp" className="iconn-img"></img> */}
//                 <span><i class="bi bi-cpu-fill iconn-img circle_sizee1"></i></span>
//                 <h4>AI Test Case Generation</h4>
                
//                    <p className="">Generate 100+ tests for new feature modules automatically.</p>
             
               
//               </div>
//             </div>

//             <div className="col-auto">
//               <div className="usecase-box custom-box">
//                 {/* <img src="ai2.webp" className="iconn-img"></img> */}
//                 <span><i class="bi bi-eye-fill iconn-img circle_sizee1"></i></span>
//                 <h4>Visual Regression</h4>
//                 <p> Compare layouts between releases and detect pixel-level drift.</p>
//               </div>
//             </div>

          
//             <div className="col-auto">
//               <div className="usecase-box custom-box">
//                 {/* <img src="ai3.webp" className="iconn-img"></img> */}
//                 <span><i class="bi bi-graph-up-arrow iconn-img circle_sizee1"></i></span>
//                 <h4>Performance Tracking</h4>
//                 <p> Set and track response time thresholds automatically.</p>
//               </div>
//             </div>

          
//             <div className="col-auto">
//               <div className="usecase-box custom-box">
//                 {/* <img src="ai4.webp" className="iconn-img"></img> */}
//                 <span><i class="bi bi-shield-lock-fill iconn-img circle_sizee1"></i></span>
//                 <h4>Security Pipeline</h4>
//                 <p>Run OWASP tests as part of nightly builds.</p>
//               </div>
//             </div>

           
//             <div className="col-auto">
//               <div className="usecase-box custom-box">
//                 {/* <img src="ai5.webp" className="iconn-img"></img> */}
//                 <span><i class="bi bi-arrow-repeat iconn-img circle_sizee1"></i></span>
//                 <h4 className="">Dynamic Tests</h4>
//                 <p className="p-text_col"> Only re-run tests for modified modules in CI/CD.</p>
//               </div>
//             </div>

//           </div>

//         </div>
//       </div>

//     </div>
//   );
// };

// export default UseCases2;







import React, { useEffect } from "react";
import AOS from "aos";
const UseCases2 = () => {
     useEffect(() => {
                AOS.init({duration:1000, once:true});
                    AOS.refresh();
        
            },[]);    
  return (
    <div className="usecase-wrapper">
      <div
        className="usecase-bg"
        style={{ backgroundImage: "url('useback1.jpg')" }}
      >
        <div className="container">
          <div className="row justify-content-center usecase-row">
            <h3 className="mb-3 text-primary">Use Cases</h3>

            <div className="col-auto">
              <div className="usecase-box custom-box"  data-aos="fade-up" data-aos-delay="0"   data-aos-once="false">
                <span className="circle_sizee1">
                  <i className="bi bi-cpu-fill iconn-img"></i>
                </span>
                <h4>AI Test Case Generation</h4>
                <p>Generate 100+ tests for new feature modules automatically.</p>
              </div>
            </div>

            <div className="col-auto">
              <div className="usecase-box custom-box"  data-aos="fade-up" data-aos-delay="0"   data-aos-once="false">
                <span className="circle_sizee1">
                  <i className="bi bi-eye-fill iconn-img"></i>
                </span>
                <h4>Visual Regression</h4>
                <p>Compare layouts between releases and detect pixel-level drift.</p>
              </div>
            </div>

            <div className="col-auto">
              <div className="usecase-box custom-box"  data-aos="fade-up" data-aos-delay="0"   data-aos-once="false">
                <span className="circle_sizee1">
                  <i className="bi bi-graph-up-arrow iconn-img"></i>
                </span>
                <h4>Performance Tracking</h4>
                <p>Set and track response time thresholds automatically.</p>
              </div>
            </div>

            <div className="col-auto">
              <div className="usecase-box custom-box"  data-aos="fade-up" data-aos-delay="0"   data-aos-once="false">
                <span className="circle_sizee1">
                  <i className="bi bi-shield-lock-fill iconn-img"></i>
                </span>
                <h4>Security Pipeline</h4>
                <p>Run OWASP tests as part of nightly builds.</p>
              </div>
            </div>

            <div className="col-auto">
              <div className="usecase-box custom-box"  data-aos="fade-up" data-aos-delay="0"   data-aos-once="false">
                <span className="circle_sizee1">
                  <i className="bi bi-arrow-repeat iconn-img"></i>
                </span>
                <h4>Dynamic Tests</h4>
                <p>Only re-run tests for modified modules in CI/CD.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases2;
