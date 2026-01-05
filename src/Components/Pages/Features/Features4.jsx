import React, { useEffect } from 'react'
import AOS from "aos";
import Features3 from './Features3'
const Features4= () => {
    useEffect(() => {
                AOS.init({duration:1000, once:true});
                    AOS.refresh();
        
            },[]); 
    return (
        <>
             <section className="ps-wrapper ">
      <div className="container">
        <h1 className='ps-main-heading'>Features</h1>
        <div className="row g-4 mb-5">

          {/* Card 01 */}
          <div className="col-lg-4">
            <div className="ps-card" data-aos="fade-up" data-aos-delay="0"   data-aos-once="false">
              <h3 className="ps-title">
                Deep UI Element <span>Intelligence</span>
              </h3>

              <h6 className="ps-subtitle">
                AI-driven understanding of UI using vision, DOM, and context.
              </h6>

              <p className="ps-text">
                <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-eye me-2 "></i>
                 AI Element Detection – DOM, visual & accessibility aware.
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-crosshair me-2"></i>
                  Robust Locators – Adaptive CSS, XPath & ARIA,.
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-arrow-repeat me-2"></i>
                  Self-Healing – Auto-fixes broken selectors.
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-lightning me-2"></i>
                  Dynamic Handling – Animations, hidden & Shadow DOM.
                </li>

                <li className="d-flex align-items-start">
                  <i class="bi bi-image me-2"></i>
                  Visual Matching – Works despite layout or ID changes.
                </li>
              </ul>
              </p>

              <div className="ps-footer">
                <div className="ps-step">
                  {/* <span>STEP</span> */}
                  <h2>01</h2>
                </div>

                <div className="ps-icon green">
                  <span className="ps-icon-bg"></span>

                  <div className="dot-grid ps-icon-content">
                    <span></span><span></span>
                    <span></span><span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 02 */}
          <div className="col-lg-4">
            <div className="ps-card" data-aos="fade-up" data-aos-delay="0"   data-aos-once="false">
              <h3 className="ps-title">
                Modular <span>Integrations</span>
              </h3>

              <h6 className="ps-subtitle">
                Plug-and-play integrations with full freedom no vendor lock-in.
              </h6>

              <p className="ps-text">
               <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-layers me-2"></i>
                  Test Executors – Cypress, Selenium, Playwright.
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-kanban me-2"></i>
                  Test Management – Jira, Xray, Zephyr, TestLink.
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-sliders me-2"></i>
                  Easy Switching – Change tools via config.
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-infinity me-2"></i>
                  CI/CD Ready – Jenkins, GitLab, GitHub Actions.
                </li>

                <li className="d-flex align-items-start">
                  <i className="bi bi-graph-up me-2"></i>
                  Monitoring & BI – APM, Grafana, Power BI, Tableau
                </li>
              </ul>
              </p>

              <div className="ps-footer">
                <div className="ps-step">
                  {/* <span>STEP</span> */}
                  <h2>02</h2>
                </div>

                <div className="ps-icon green">
                  <span className="ps-icon-bg"></span>
                  <div className="stack-icon ps-icon-content"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 03 */}
          <div className="col-lg-4">
            <div className="ps-card" data-aos="fade-up" data-aos-delay="0"   data-aos-once="false">
              <h3 className="ps-title">
                Reporting &  <span>Analytics</span>
              </h3>

              <h6 className="ps-subtitle">
                Smart insights beyond pass/fail to track test health, performance, and trends.
              </h6>

              <p className="ps-text">
                <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-speedometer2 me-2"></i>
                 Real-Time Dashboards – Live status & coverage.
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-graph-up-arrow me-2"></i>
                  Trend Analysis – Spot flaky & repeat failures.
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-cpu me-2"></i>
                Predictive Insights – AI-based failure forecasts.
                </li>

                {/* <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                 Flakiness Detection – Find unstable tests early.
                </li> */}

                <li className="d-flex align-items-start">
                  <i className="bi bi-pie-chart-fill me-2"></i>
                 Coverage View – Tested vs untested clarity
                </li>

                <li className="d-flex align-items-start">
                  <i className="bi bi-diagram-3 me-2"></i>
                 BI Integration – Export to Power BI, Tableau & Grafana
                </li>
              </ul>
              </p>

              <div className="ps-footer">
                <div className="ps-step">
                  {/* <span>STEP</span> */}
                  <h2>03</h2>
                </div>

                <div className="ps-icon green">
                  <span className="ps-icon-bg"></span>
                  <div className="db-icon ps-icon-content"></div>
                </div>
              </div>
            </div>
          </div>

        </div>



        <div className="row g-4 mb-5">

          {/* Card 01 */}
          <div className="col-lg-4">
            <div className="ps-card" data-aos="fade-up" data-aos-delay="0"   data-aos-once="false">
              <h3 className="ps-title">
                CI/CD <span>CI/CD</span>
              </h3>

              <h6 className="ps-subtitle">
                Bring automation into your DevOps lifecycle with minimal setup.
              </h6>

              <p className="ps-text">
                 <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-files me-2"></i>
                 Pipeline templates for popular CI/CD tools.
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-shield-check me-2"></i>
                  Risk-based test selection for faster pipelines.
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-lightning-charge me-2"></i>
                  Dynamic test execution based on code changes.
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-diagram-3 me-2"></i>
                  Parallel and distributed test runs.
                </li>

                <li className="d-flex align-items-start">
                  <i className="bi bi-file-code me-2"></i>
                  Versioned pipeline configuration in YAML.
                </li>
              </ul>
              </p>

              <div className="ps-footer">
                <div className="ps-step">
                  {/* <span>STEP</span> */}
                  <h2>04</h2>
                </div>

                <div className="ps-icon green">
                  <span className="ps-icon-bg"></span>

                  <div className="dot-grid ps-icon-content">
                    <span></span><span></span>
                    <span></span><span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 02 */}
          <div className="col-lg-4">
            <div className="ps-card" data-aos="fade-up" data-aos-delay="0"   data-aos-once="false">
              <h3 className="ps-title">
                Performance <span>Monitoring</span>
              </h3>

              <h6 className="ps-subtitle">
                Integrate test execution with performance intelligence.
              </h6>

              <p className="ps-text">
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-stopwatch me-2"></i>
                  Collects page load, API response, and rendering times.
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-cpu-fill me-2"></i>
                 Monitors CPU, memory, and resource usage during tests.
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-plug me-2"></i>
                 Integrates with APM tools like New Relic or Datadog.
                </li>

                {/* <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-graph-up-arrow me-2"></i>
                  Establishes baseline metrics and flags deviations.
                </li> */}

                <li className="d-flex align-items-start">
                  <i className="bi bi-bar-chart me-2"></i>
                 Supports performance trend visualization over time.
                </li>
              </ul>
              </p>

              <div className="ps-footer">
                <div className="ps-step">
                  {/* <span>STEP</span> */}
                  <h2>05</h2>
                </div>

                <div className="ps-icon green">
                  <span className="ps-icon-bg"></span>
                  <div className="stack-icon ps-icon-content"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 03 */}
          <div className="col-lg-4">
            <div className="ps-card" data-aos="fade-up" data-aos-delay="0"   data-aos-once="false">
              <h3 className="ps-title">
                Security  <span>Testing</span>
              </h3>

              <h6 className="ps-subtitle">
               Embed security validation directly into your automated test pipelines.
              </h6>

              <p className="ps-text">
                <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-diagram-3 me-2"></i>
                Deep Crawling – Configurable URL exploration.
                </li>

                {/* <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-list-check me-2"></i>
                OWASP Top 10 – Industry-standard checks
                </li> */}

                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-bug me-2"></i>
                Vulnerability Detection – XSS, SQLi, CSRF & more.
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-key me-2"></i>
                 Dependency & Secrets Scan – Risky packages & exposed keys.
                </li>

                <li className="d-flex align-items-start">
                  <i class="bi bi-code-slash me-2"></i>
                 SAST & API Security – Secure code and APIs
                </li>

                <li className="d-flex align-items-start">
                  <i class="bi bi-file-earmark-check me-2"></i>
                 Compliance Reports – OWASP, GDPR, PCI-DSS ready
                </li>
              </ul>
              </p>

              <div className="ps-footer">
                <div className="ps-step">
                  {/* <span>STEP</span> */}
                  <h2>06</h2>
                </div>

                <div className="ps-icon green">
                  <span className="ps-icon-bg"></span>
                  <div className="db-icon ps-icon-content"></div>
                </div>
              </div>
            </div>
          </div>

        </div>



         <div className="row g-4">

          {/* Card 01 */}
          <div className="col-lg-4">
            <div className="ps-card" data-aos="fade-up" data-aos-delay="0"   data-aos-once="false">
              <h3 className="ps-title">
                Knowledge <span>Loop</span>
              </h3>

              <h6 className="ps-subtitle">
               Continuous learning that improves test quality over time.
              </h6>

              <p className="ps-text">
                 <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-arrow-repeat me-2"></i>
                Auto Knowledge Updates – Documents results & patterns.
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-chat-dots me-2"></i>
                 Smart Feedback Loop – Suggests test improvements.
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-clock-history me-2"></i>
                 Versioned Artifacts – Tracks test evolution
                </li>

                <li className="d-flex align-items-start">
                  <i class="bi bi-shield-exclamation me-2"></i>
                  Quality & Security Signals – Flags risky deps & secrets.
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-file-earmark-bar-graph me-2"></i>
                 Insightful Reports – HTML & JSON with severity.
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-patch-check me-2"></i>
                 Compliance Ready – OWASP, GDPR, PCI-DSS.
                </li>
              </ul>
              </p>

              <div className="ps-footer">
                <div className="ps-step">
                  {/* <span>STEP</span> */}
                  <h2>07</h2>
                </div>

                <div className="ps-icon green">
                  <span className="ps-icon-bg"></span>

                  <div className="dot-grid ps-icon-content">
                    <span></span><span></span>
                    <span></span><span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 02 */}
          <div className="col-lg-4">
            <div className="ps-card" data-aos="fade-up" data-aos-delay="0"   data-aos-once="false">
              <h3 className="ps-title">
                AI-Powered  <span>Test Generation</span>
              </h3>

              <h6 className="ps-subtitle">
                Intelligent test creation driven by history, context, and domain knowledge.
              </h6>

              <p className="ps-text">
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-file-earmark-text me-2"></i>
                  Auto Test Plans – Requirement-aligned plans (Jira, Xray)
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-brain me-2"></i>
                  Context-Aware Tests – Learns from past executions & logic
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-sliders me-2"></i>
                  Prompt-Driven Coverage – Expands tests by risk & priority
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-lightning-charge me-2"></i>
                  Smart Prioritization – Runs high-impact tests first
                </li>

                <li className="d-flex align-items-start">
                  <i className="bi bi-layout-text-window-reverse me-2"></i>
                  Visual Scenarios – UI, gesture & layout testing
                </li>
              </ul>
              </p>

              <div className="ps-footer">
                <div className="ps-step">
                  {/* <span>STEP</span> */}
                  <h2>08</h2>
                </div>

                <div className="ps-icon green">
                  <span className="ps-icon-bg"></span>
                  <div className="stack-icon ps-icon-content"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 03 */}
          {/* <div className="col-lg-4">
            <div className="ps-card">
              <h3 className="ps-title">
                Security  <span>Testing</span>
              </h3>

              <h6 className="ps-subtitle">
               Embed security validation directly into your automated test pipelines.
              </h6>

              <p className="ps-text">
                <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-diagram-3 me-2"></i>
                Deep Crawling – Configurable URL exploration.
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-list-check me-2"></i>
                OWASP Top 10 – Industry-standard checks
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-bug me-2"></i>
                Vulnerability Detection – XSS, SQLi, CSRF & more.
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-key me-2"></i>
                 Dependency & Secrets Scan – Risky packages & exposed keys.
                </li>

                <li className="d-flex align-items-start">
                  <i class="bi bi-code-slash me-2"></i>
                 SAST & API Security – Secure code and APIs
                </li>

                <li className="d-flex align-items-start">
                  <i class="bi bi-file-earmark-check me-2"></i>
                 Compliance Reports – OWASP, GDPR, PCI-DSS ready
                </li>
              </ul>
              </p>

              <div className="ps-footer">
                <div className="ps-step">
                //   <span>STEP</span>
                  <h2>06</h2>
                </div>

                <div className="ps-icon green">
                  <span className="ps-icon-bg"></span>
                  <div className="db-icon ps-icon-content"></div>
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </section>
        </>
    )
}

export default Features4

