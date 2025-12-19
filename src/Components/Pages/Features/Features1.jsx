import React from 'react'

function Features1() {
    return (
        <>
            <div className='container-fluid p-5 bg-black'>
                <div className='row '>
                    <div className='col-12 col-sm-6 col-md-5 col-lg-5 '>
                       <div className='mar_all'>
                            <img src="test2.jpg" alt="img1" className='imagexsize'></img>
                       </div>
                    </div>
                    <div className='col-12 col-sm-6 col-md-7 col-lg-7 '>
                        <div className='mar_all'>
                            <h3 className='text_color_he'>AI-Powered Test Generation</h3>
                            <p className='text_color_p'>AstroFroge.ai learns from your organization’s testing history and domain knowledge to create high-quality test assets automatically.</p>
                            <h6 className='text-light'>Capabilities:</h6>
                                <div>
                                     <ul>
                                    <li className='text_color_list'><span><strong className='text-light'>RSR/Test Plan Auto-Creation:</strong> <p> Automatically generate detailed Requirement-to-Test (RSR) or Test Plan documents aligned with your test management tool (like Xray or Jira).</p></span></li>
                                    <li className='text_color_list'><span><strong className='text-light'>Context-Aware Test Cases: </strong> <p> Creates test cases by analyzing:</p></span>
                                        <ul className='martop'>
                                            <li>Past test patterns</li>
                                            <li>Historical execution data</li>
                                            <li>Domain-specific terminology</li>
                                            <li>Similar scenario mappings</li>
                                        </ul>
                                    </li>
                                    <li className='text_color_list'><span><strong className='text-light'>Prompt-driven Expansion:</strong> <p> Uses AI prompt templates to expand tests intelligently based on risk, priority, and previous coverage.</p></span></li>
                                    <li className='text_color_list'><span><strong className='text-light'>Test Case Prioritization:</strong> <p> Automatically identifies and executes high-impact cases first.</p></span></li>
                                    <li className='text_color_list'><span><strong className='text-light'>Visual Test Scenarios:</strong> <p>Supports visual, gesture, and layout-based test cases.</p></span></li>
                                    </ul>                                        
                                </div>
                        </div>
                    </div>
                </div>

               <div className='row'>
                    <div className='col-12 col-sm-6 col-md-7 col-lg-7 '>
                        <div className='mar_all'>
                            <h3 className='text_color_he'> Deep UI Element Intelligence</h3>
                             <p className='text_color_p'>AstroFroge.ai learns from your organization’s testing history and domain knowledge to create high-quality test assets automatically.</p>
                            <h6 className='text-light'>Features:</h6>
                             <div>
                                <ul className='text_color_list'>
                                    <li className='text_color_list'><span><strong className='text-light'>AI-Powered Element Detection:</strong> <p>Finds UI components using contextual vision (DOM + visual + accessibility layers).</p></span></li>
                                    <li className='text_color_list'><span><strong className='text-light'>Robust Locator Creation: </strong> <p>Generates resilient selectors (CSS, XPath, ARIA, accessibility locators) that adapt as the UI evolves.</p></span></li>
                                    <li className='text_color_list'><span><strong className='text-light'>Self-Healing Locators:</strong> <p> Automatically repairs broken selectors during runtime by re-identifying element context.</p></span></li>
                                    <li className='text_color_list'><span><strong className='text-light'>Dynamic Element Handling: </strong> <p>  Adjusts for animation delays, hidden states, or shadow DOMs.</p></span></li>
                                    <li className='text_color_list'><span><strong className='text-light'>Visual Matching:</strong> <p>Detects visual elements even when IDs or positions change.</p></span></li>
                                </ul>
                             </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-md-5 col-lg-5 '>
                       <div className='mar_all'>
                            <img src="test3.avif" alt="img1" className='imagexsize'></img>
                       </div>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12 col-sm-6 col-md-5 col-lg-5 '>
                       <div className='mar_all'>
                            <img src="book1.jpg" alt="img1" className='imagexsize'></img>
                       </div>
                    </div>
                    <div className='col-12 col-sm-6 col-md-7 col-lg-7 '>
                        <div className='mar_all'>
                            <h3 className='text_color_he'> Modular Integrations</h3>
                            <p className='text_color_p'>AstroFroge.ai’s plug-and-play architecture allows you to choose your tools — not be locked into one ecosystem.</p>
                            <h6 className='text-light'>Interchangeable Modules:</h6>
                             <div>
                                <ul className='text_color_list'>
                                    <li className='text_color_list'><span><strong className='text-light'>Test Executors:</strong> 
                                        <ul>
                                            <li>Cypress Executor</li>
                                            <li>Selenium Executor</li>
                                            <li>Playwright Executor</li>
                                        </ul></span>
                                    </li>
                                    <li className='text_color_list'><span><strong className='text-light'>Test Management Systems:</strong> 
                                        <ul>
                                            <li>Xray</li>
                                            <li>Testlink</li>
                                            <li>Jira</li>
                                            <li>Zephyr</li>
                                        </ul></span>
                                    </li>
                                    <li className='text_color_list'><span><strong className='text-light'>Flexible Configurations:</strong> 
                                        <ul>
                                            <li>test_executor: "cypress_executor"</li>
                                            <li>test_manager: "xray"</li>
                                        </ul></span>
                                    </li>
                                    <li className='text_color_list'><span><strong className='text-light'>Other Supported Integrations:</strong>
                                        <ul>
                                            <li>APM & monitoring tools</li>
                                            <li>CI/CD (Jenkins, GitLab, GitHub Actions)</li>
                                            <li>BI tools (Power BI, Tableau, Grafana)</li>
                                        </ul>
                                        </span></li>
                                </ul>
                             </div>
                        </div>
                    </div>
                </div>



              <div className='row'>
                    <div className='col-12 col-sm-6 col-md-7 col-lg-7 '>
                        <div className='mar_all'>
                            <h3 className='text_color_he'>Reporting & Analytics</h3>
                            <p className='text_color_p'>Go beyond pass/fail metrics - AstroFroge.ai gives you intelligent visibility into test stability, performance, and trends</p>
                            <h6 className='text-light'>Features:</h6>
                             <div>
                                <ul className='text_color_list'>
                                    <li className='text_color_list'><span><strong className='text-light'>Real-Time Dashboard:</strong> <p>Track lives test execution, status, and converage.</p></span></li>
                                    <li className='text_color_list'><span><strong className='text-light'>Treand Analysis: </strong> <p>Identify recurring issues, test flakiness, and regression patterns.</p></span></li>
                                    <li className='text_color_list'><span><strong className='text-light'>Predictive Insights: </strong> <p> AI predicts likely points of failure based on history.</p></span></li>
                                    <li className='text_color_list'><span><strong className='text-light'>Flakiness Detection: </strong> <p>  Machine learning identifies unstable test behavior over time.</p></span></li>
                                    <li className='text_color_list'><span><strong className='text-light'>Coverage Visualization: </strong> <p>Interactive charts highlight tested vs untested features.</p></span></li>
                                    <li className='text_color_list'><span><strong className='text-light'>Coverage Visualization: </strong> <p>Interactive charts highlight tested vs untested features.</p></span></li>
                                    <li className='text_color_list'><span><strong className='text-light'>BI Integration: </strong> <p>Export to Tableau, Power BI, or Grafana for business-level reporting.</p></span></li>
                                </ul>
                             </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-md-5 col-lg-5 '>
                       <div className='mar_all'>
                            <img src="test5.avif" alt="img1" className='imagexsize'></img>
                       </div>
                    </div>
                </div>


                 <div className='row '>
                    <div className='col-12 col-sm-6 col-md-5 col-lg-5 '>
                       <div className='mar_all'>
                            <img src="test6.avif" alt="img1" className='imagexsize '></img>
                       </div>
                    </div>
                    <div className='col-12 col-sm-6 col-md-7 col-lg-7 '>
                        <div className='mar_all'>
                            <h3 className='text_color_he'>Performance Monitoring</h3>
                            <p className='text_color_p'>Integrate test execution with performance intelligence.</p>
                            <h6 className='text-light'>Key Highlights:</h6>
                             <ul className='text_color_list'>
                                <li>Collects page load, API response, and rendering times.</li>
                                <li>Monitors CPU, memory, and resource usage during tests.</li>
                                <li>Integrates with APM tools like New Relic or Datadog.</li>
                                <li>Establishes baseline metrics and flags deviations.</li>
                                <li>Supports performance trend visualization over time.</li>
                            </ul>
                        </div>
                    </div>
                </div>



                <div className='row'>
                    <div className='col-12 col-sm-6 col-md-7 col-lg-7 '>
                        <div className='mar_all'>
                            <h3 className='text_color_he'>Security Testing</h3>
                            <p className='text_color_p'>Empower your automation to include security validation seamlessly within your test pipeline.</p>
                            <h6 className='text-light'>Security Coverage:</h6>
                             <div>
                                <ul className='text_color_list'>
                                    <li className='text_color_list'><span><strong className='text-light'>Deep Crawling:</strong> <p>Configurable crawler for in-depth URL exploration.</p></span></li>
                                    <li className='text_color_list'><span><strong className='text-light'>OWASP Top 10 Compliance Checks</strong> <p></p></span></li>
                                    <li className='text_color_list'><span><strong className='text-light'>Vulnerability Assessment:  </strong> <p> Detects 14+ vulnerability types including XSS, SQLi, CSRF.</p></span></li>
                                    <li className='text_color_list'><span><strong className='text-light'>Dependency Scanning:  </strong> <p>Flags outdated or vulnerable packages.</p></span></li>
                                    <li className='text_color_list'><span><strong className='text-light'>Secrets Scanning: </strong> <p>Detects exposed tokens or credentials in code or configs.</p></span></li>
                                    <li className='text_color_list'><span><strong className='text-light'>SAST & API Security Tests</strong> <p></p></span></li>
                                    <li className='text_color_list'><span><strong className='text-light'>Reports:</strong> <p>Color-coded HTML & machine-readable JSON output with severity ranking.</p></span></li>
                                    <li className='text_color_list'><span><strong className='text-light'>Compliance Readiness:</strong> <p> Supports OWASP, GDPR, and PCI DSS reporting.</p></span></li>
                                </ul>
                             </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-md-5 col-lg-5 '>
                       <div className='mar_all'>
                            <img src="test7.avif" alt="img1" className='imagexsize'></img>
                       </div>
                    </div>
                </div>
                


                
                 <div className='row '>
                    <div className='col-12 col-sm-6 col-md-5 col-lg-5 '>
                       <div className='mar_all'>
                            <img src="test8.avif" alt="img1" className='imagexsize '></img>
                       </div>
                    </div>
                    <div className='col-12 col-sm-6 col-md-7 col-lg-7 '>
                        <div className='mar_all'>
                            <h3 className='text_color_he'>Continuous Integration / Continuous Deployment (CI/CD)</h3>
                            <p className='text_color_p'>Bring automation into your DevOps lifecycle with minimal setup.</p>
                            <h6 className='text-light'>Features:</h6>
                             <ul className='text_color_list'>
                                <li>Pipeline templates for popular CI/CD tools.</li>
                                <li>Risk-based test selection for faster pipelines.</li>
                                <li>Dynamic test execution based on code changes.</li>
                                <li>Parallel and distributed test runs.</li>
                                <li>Versioned pipeline configuration in YAML.</li>
                            </ul>
                        </div>
                    </div>
                </div>



                <div className='row'>
                    <div className='col-12 col-sm-6 col-md-7 col-lg-7 '>
                        <div className='mar_all'>
                            <h3 className='text_color_he'>Knowledge Management & Feedback System</h3>
                            <p className='text_color_p'>AstroFroge.ai continuously learns from your outcomes to improve over time.</p>
                            <h6 className='text-light'>Capabilities:</h6>
                             <div>
                                <ul className='text_color_list'>
                                    <li className='text_color_list'><span><strong className='text-light'>Automated Knowledge Base Updates:</strong> <p>Records results and auto-documents new patterns.</p></span></li>
                                    <li className='text_color_list'><span><strong className='text-light'>Smart Feedback Loop: </strong> <p>Suggests test improvements based on execution results.</p></span></li>
                                    <li className='text_color_list'><span><strong className='text-light'>Version Control for Test Artifacts:</strong> <p>Maintains history and evolution of each test case.</p></span></li>
                                    <li className='text_color_list'><span><strong className='text-light'>Dependency Scanning:  </strong> <p>Flags outdated or vulnerable packages.</p></span></li>
                                    <li className='text_color_list'><span><strong className='text-light'>Secrets Scanning: </strong> <p>Detects exposed tokens or credentials in code or configs.</p></span></li>
                                    <li className='text_color_list'><span><strong className='text-light'>SAST & API Security Tests</strong> <p></p></span></li>
                                    <li className='text_color_list'><span><strong className='text-light'>Reports:</strong> <p>Color-coded HTML & machine-readable JSON output with severity ranking.</p></span></li>
                                    <li className='text_color_list'><span><strong className='text-light'>Compliance Readiness:</strong> <p> Supports OWASP, GDPR, and PCI DSS reporting.</p></span></li>
                                </ul>
                             </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-6 col-md-5 col-lg-5 '>
                       <div className='mar_all'>
                            <img src="test9.jpg" alt="img1" className='imagexsize'></img>
                       </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Features1;