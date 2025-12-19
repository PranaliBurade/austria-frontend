import React from "react";


const UseCases1 = () => {
  return (
    <div className="usecase-wrapper">

      {/* Background Image */}
      <div
        className="usecase-bg"
        style={{ backgroundImage: "url('useback1.jpg')" }}
      >
        <div className="container">

          <div className="row justify-content-center usecase-row">

          <h3 className="mb-3 text-primary">Use Cases</h3>
            <div className="col-auto">
              <div className="usecase-box custom-box">
                <img src="ai1.webp" className="iconn-img"></img>
                <h4 className="">AI Test Case Generation</h4>
                
                   <p className="">Generate 100+ tests for new feature modules automatically.</p>
             
               
              </div>
            </div>

            <div className="col-auto">
              <div className="usecase-box custom-box">
                <img src="ai2.webp" className="iconn-img"></img>
                <h4>Visual Regression</h4>
                <p> Compare layouts between releases and detect pixel-level drift.</p>
              </div>
            </div>

          
            <div className="col-auto">
              <div className="usecase-box custom-box">
                <img src="ai3.webp" className="iconn-img"></img>
                <h4>Performance Tracking</h4>
                <p> Set and track response time thresholds automatically.</p>
              </div>
            </div>

          
            <div className="col-auto">
              <div className="usecase-box custom-box">
                <img src="ai4.webp" className="iconn-img"></img>
                <h4>Security Pipeline</h4>
                <p>Run OWASP tests as part of nightly builds.</p>
              </div>
            </div>

           
            <div className="col-auto">
              <div className="usecase-box custom-box">
                <img src="ai5.webp" className="iconn-img"></img>
                <h4 className="">Dynamic Tests</h4>
                <p className="p-text_col"> Only re-run tests for modified modules in CI/CD.</p>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default UseCases1;