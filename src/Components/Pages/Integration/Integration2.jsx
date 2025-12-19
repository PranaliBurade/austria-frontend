import React, { useEffect } from 'react'
import AOS from "aos";
function Integration2() {
 
       useEffect(() => {
              AOS.init({duration:1000, once:true});
                  AOS.refresh();
      
          },[]); 
          
  return (
    <>
    <div className=' container-fluid divcol1 text-light p-5'>
        <h1 className='text-center pt-4'>Seamlessly integrate <span className='gradient-text '>AstroFroge.ai</span> into your setup</h1>
        <p className='paddi3'>We work with the tools and frameworks you use. Test development code from Visual Studio and non-production apps from Firebase. Run automated tests on every commit from your CI/CD pipeline, and get test results directly in Jenkins and Slack. Report bugs directly to Jira, and reproduce them with a click.</p>

        <div className='topi'>
            <h3 className='text-center text-light fw-bold '>Test Execution</h3>
            <div className=' paddi4 ' data-aos="fade-up">
                <div className='bg-light1  px-4 py-2 rounded-4'>
                    <img src='cypress-1.svg' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Cypress</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='selenium.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Selenium</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='playwright.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Playwright</h5>
                </div>
               <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='postman.svg' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Postman</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='webdriverio.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>WebdriverIO</h5>
                </div>
            </div>
            
            <div className=' paddi4' data-aos="fade-up">
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='testcafe.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>TestCafe</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='Appium.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Appium</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='K6.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>K6</h5>
                </div>
               <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='jmeter.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>JMeter</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='robot_framework.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Robot Framework</h5>
                </div>
            </div>
            <div className='d-flex justify-content-center '>
                <button className='p-2 fw-bold grad border border-1 border-primary text-light rounded-3'>View All Integration</button>
            </div>
            
        </div>
        <div className=' topi' >
            <h3 className='text-center text-light fw-bold '>Test Management</h3>
            <div className=' paddi4 ' data-aos="fade-up">
                <div className='bg-light1  px-4 py-2 rounded-4'>
                    <img src='xray.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Xray</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='zephyr.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Zephyr Scale</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='testlink.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>TestLink</h5>
                </div>
               <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='zephyr_squad.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Zephyr Squad</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='webdriverio.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>qTest</h5>
                </div>
            </div>
            <div className=' paddi4' data-aos="fade-up">
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='testrail.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>TestRail</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='practitest.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>PractiTest</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='spiratest.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>SpiraTest</h5>
                </div>
               <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='qmetry.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>QMetry</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='testmo.svg' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Testmo</h5>
                </div>
            </div>
            <div className='d-flex justify-content-center '>
                <button className='p-2 fw-bold grad border border-1 border-primary text-light rounded-3'>View All Integration</button>
            </div>
        </div>
        <div className='topi'>
            <h3 className='text-center text-light fw-bold '>CI/CD</h3>
            <div className=' paddi4 ' data-aos="fade-up">
                <div className='bg-light1  px-4 py-2 rounded-4'>
                    <img src='Jenkins.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Jenkins</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='git-lab.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>GitLab CI/CD</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='github_actions.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>GitHub Actions</h5>
                </div>
               <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='circleci_logo.jpg' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>CircleCI</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='travis.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Travis CI</h5>
                </div>
            </div>
            <div className=' paddi4' data-aos="fade-up">
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='azure_pipelines.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Azure DevOps Pipelines</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='bitbucket_pipelines.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Bitbucket Pipelines</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='jetbrains.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>TeamCity (JetBrains)</h5>
                </div>
               <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='Atlassian-Bamboo01.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Bamboo (Atlassian)</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='argo.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Argo CD</h5>
                </div>
            </div>
            <div className='d-flex justify-content-center '>
                <button className='p-2 fw-bold grad border border-1 border-primary text-light rounded-3'>View All Integration</button>
            </div>
        </div>
        <div className='topi'>
            <h3 className='text-center text-light fw-bold '>Analytics / BI</h3>
            <div className=' paddi4 ' data-aos="fade-up">
                <div className='bg-light1  px-4 py-2 rounded-4'>
                    <img src='tableau.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Tableau</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='Power_BI.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Power BI</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='Grafana.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Grafana</h5>
                </div>
               <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='google_looker.webp' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Google Looker</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='Qlik.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Qlik Sense</h5>
                </div>
            </div>
            <div className=' paddi4' data-aos="fade-up">
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='sisense.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Sisense</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='domo.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Domo</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='ibm-cognos.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>IBM Cognos Analytics</h5>
                </div>
               <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='sap.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>SAP BusinessObjects</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='microstrategy.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>MicroStrategy</h5>
                </div>
            </div>
            <div className='d-flex justify-content-center '>
                <button className='p-2 fw-bold grad border border-1 border-primary text-light rounded-3'>View All Integration</button>
            </div>
        </div>
        <div className='topi'>
            <h3 className='text-center text-light fw-bold '>Monitoring / APM</h3>
            <div className=' paddi4 ' data-aos="fade-up">
                <div className='bg-light1  px-4 py-2 rounded-4'>
                    <img src='cypress-1.svg' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Cypress</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='selenium.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Selenium</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='playwright.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Playwright</h5>
                </div>
               <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='postman.svg' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Postman</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='webdriverio.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>WebdriverIO</h5>
                </div>
            </div>
            <div className=' paddi4' data-aos="fade-up">
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='testcafe.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>TestCafe</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='Appium.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Appium</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='K6.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>K6</h5>
                </div>
               <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='jmeter.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>JMeter</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='robot_framework.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Robot Framework</h5>
                </div>
            </div>
            <div className='d-flex justify-content-center '>
                <button className='p-2 fw-bold grad border border-1 border-primary text-light rounded-3'>View All Integration</button>
            </div>
        </div>

        <div className='topi'>
            <h3 className='text-center text-light fw-bold '>Security</h3>
            <div className=' paddi4 ' data-aos="fade-up">
                <div className='bg-light1  px-4 py-2 rounded-4'>
                    <img src='cypress-1.svg' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Cypress</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='selenium.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Selenium</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='playwright.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Playwright</h5>
                </div>
               <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='postman.svg' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Postman</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='webdriverio.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>WebdriverIO</h5>
                </div>
            </div>
            <div className=' paddi4' data-aos="fade-up">
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='testcafe.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>TestCafe</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='Appium.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Appium</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='K6.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>K6</h5>
                </div>
               <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='jmeter.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>JMeter</h5>
                </div>
                <div className='bg-light1 px-4 py-2 rounded-4'>
                    <img src='robot_framework.png' alt='cypress' className='imgsi1'/>
                    <h5 className='text-light pt-2'>Robot Framework</h5>
                </div>
            </div>
            <div className='d-flex justify-content-center '>
                <button className='p-2 fw-bold grad border border-1 border-primary text-light rounded-3'>View All Integration</button>
            </div>
        </div>
       
    </div>
    </>
  )
}

export default Integration2;

