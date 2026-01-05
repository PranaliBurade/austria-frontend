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
            position: "relative", // ensure boxes z-index works
            zIndex: 1,}}
    >
       
        {/* <div className="container">
    <div className="row align-items-center g-5">

     
      <div className="col-lg-6 col-md-6 col-12">
        <h1 className="integration-title">
          Seamlessly integrate{" "}
          <span className="gradient-text">Astraforge.ai</span>{" "}
          into your setup
        </h1>

        <p className="integration-desc">
          We work with the tools and frameworks you use. Test development code
          from Visual Studio and non-production apps from Firebase. Run automated
          tests on every commit from your CI/CD pipeline, and get test results
          directly in Jenkins and Slack. Report bugs directly to Jira, and
          reproduce them with a click.
        </p>
      </div>

     
      <div className="col-lg-6 col-md-6 col-12 text-center">
        <img
          src="https://ninjapromo.io/wp-content/uploads/2024/11/about-bg.svg"
          alt="Integration Illustration"
          className="inti-section__img"
        />
      </div>
      </div>
</div> */}


        <div className='topi'>
            <div className='container'>
                <h3 className='text-primary fw-bold '>Integration</h3>
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
        {/* <div className=' topi' >
            <h3 className='text-center text-light fw-bold '>Test Management</h3>
            <div className=' paddi4 ' data-aos="fade-up" data-aos-delay="0"   data-aos-once="false">
                <div className='bg-light1  px-4 py-2 rounded-4'>
                    <img src='/images/xray.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Xray</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/zephyr.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Zephyr Scale</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/testlink.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>TestLink</h5>
                </div>
               <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/zephyr_squad.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Zephyr Squad</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/webdriverio.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>qTest</h5>
                </div>
            </div>
            <div className=' paddi4' data-aos="fade-up">
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/testrail.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>TestRail</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/practitest.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>PractiTest</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/spiratest.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>SpiraTest</h5>
                </div>
               <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/qmetry.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>QMetry</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/testmo.svg' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Testmo</h5>
                </div>
            </div>
            <div className='d-flex justify-content-center '>
                <button className='p-2 fw-bold grad border border-1 border-primary text-light rounded-3'>View All Integration</button>
            </div>
        </div> */}

        {/* <div className='topi'>
            <h3 className='text-center text-light fw-bold '>CI/CD</h3>
            <div className=' paddi4 ' data-aos="fade-up">
                <div className='bg-light1  px-4 py-2 rounded-4'>
                    <img src='/images/Jenkins.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Jenkins</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/git-lab.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>GitLab CI/CD</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/github_actions.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>GitHub Actions</h5>
                </div>
               <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/circleci_logo.jpg' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>CircleCI</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/travis.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Travis CI</h5>
                </div>
            </div>
            <div className=' paddi4' data-aos="fade-up">
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/azure_pipelines.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Azure DevOps Pipelines</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/bitbucket-pipelines.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Bitbucket Pipelines</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/jetbrains.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>TeamCity (JetBrains)</h5>
                </div>
               <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/Atlassian-Bamboo01.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Bamboo (Atlassian)</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/argo.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Argo CD</h5>
                </div>
            </div>
            <div className='d-flex justify-content-center '>
                <button className='p-2 fw-bold grad border border-1 border-primary text-light rounded-3'>View All Integration</button>
            </div>
        </div> */}

        {/* <div className='topi'>
            <h3 className='text-center text-light fw-bold '>Analytics / BI</h3>
            <div className=' paddi4 ' data-aos="fade-up">
                <div className='bg-light1  px-4 py-2 rounded-4'>
                    <img src='/images/tableau.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Tableau</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/Power_BI.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Power BI</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/Grafana.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Grafana</h5>
                </div>
               <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/google_looker.webp' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Google Looker</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/Qlik.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Qlik Sense</h5>
                </div>
            </div>
            <div className=' paddi4' data-aos="fade-up">
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/sisense.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Sisense</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/domo.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Domo</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/ibm-cognos.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>IBM Cognos Analytics</h5>
                </div>
               <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/sap.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>SAP BusinessObjects</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='/images/microstrategy.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>MicroStrategy</h5>
                </div>
            </div>
            <div className='d-flex justify-content-center '>
                <button className='p-2 fw-bold grad border border-1 border-primary text-light rounded-3'>View All Integration</button>
            </div>
        </div> */}

        {/* <div className='topi'>
            <h3 className='text-center text-light fw-bold '>Monitoring / APM</h3>
            <div className=' paddi4 ' data-aos="fade-up">
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
            <div className=' paddi4' data-aos="fade-up">
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
                <button className='p-2 fw-bold grad border border-1 border-primary text-light rounded-3'>View All Integration</button>
            </div>
        </div> */}

        {/* <div className='topi'>
            <h3 className='text-center text-light fw-bold '>Security</h3>
            <div className=' paddi4 ' data-aos="fade-up">
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
            <div className=' paddi4' data-aos="fade-up">
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
                <button className='p-2 fw-bold grad border border-1 border-primary text-light rounded-3'>View All Integration</button>
            </div>
        </div> */}
       
    </div>
    </>
  )
}

export default Home6;

