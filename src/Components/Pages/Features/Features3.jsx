import React, { useEffect } from "react";
import AOS from "aos";
const Features3 = () => {
   useEffect(() => {
            AOS.init({duration:1000, once:true});
                AOS.refresh();
    
        },[]);       
  return (
    <div className="services-wrapper py-5">
      <div className="container">
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="service-card" data-aos="fade-up" data-aos-delay="0"   data-aos-once="false">
              <div className="card-top">
                <span className="icon">
                  <i class="bi bi-cpu "></i>
                </span>
                  <span className="arrow">
  <i className="bi bi-arrow-up-right arrow-default"></i>
  <i className="bi bi-arrow-right arrow-hover"></i>
</span>
              </div>
              <h4>AI-Powered Test Generation</h4>
              <p>
                AstroForge.ai intelligently generates high-quality test assets
                by learning from your testing history and domain knowledge.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-file-earmark-text me-2"></i>
                  Auto RSR / Test Plans – Generates requirement-aligned test
                  plans for Jira, Xray, etc.
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-brain me-2"></i>
                  Context-Aware Test Cases – Uses past tests, execution data &
                  domain logic
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-sliders me-2"></i>
                  Prompt-Driven Expansion – Expands coverage based on risk &
                  priority
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-lightning-charge me-2"></i>
                  Smart Prioritization – Executes high-impact tests first
                </li>

                <li className="d-flex align-items-start">
                  <i className="bi bi-layout-text-window-reverse me-2"></i>
                  Visual Test Scenarios – Supports UI, gesture & layout-based
                  testing
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="service-card" data-aos="fade-up" data-aos-delay="0"   data-aos-once="false">
              <div className="card-top">
                <span className="icon">
                  <i class="bi bi-bounding-box-circles"></i>
                </span>
                <span className="arrow">
  <i className="bi bi-arrow-up-right arrow-default"></i>
  <i className="bi bi-arrow-right arrow-hover"></i>
</span>

              </div>
              <h4>Deep UI Element Intelligence</h4>
              <p>
                AstroForge.ai understands UI elements deeply using vision, DOM,
                and context awareness.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-eye me-2"></i>
                  AI Element Detection – Contextual vision (DOM, visual &
                  accessibility)
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-crosshair me-2"></i>
                  Robust Locators – Adaptive CSS, XPath & ARIA selectors
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-arrow-repeat me-2"></i>
                  Self-Healing – Auto-repairs broken selectors at runtime
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-lightning me-2"></i>
                  Dynamic Handling – Manages animations, hidden & shadow DOM
                  elements
                </li>

                <li className="d-flex align-items-start">
                  <i class="bi bi-image me-2"></i>
                  Visual Matching – Finds elements even when layout or IDs
                  change
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="service-card" data-aos="fade-up" data-aos-delay="0"   data-aos-once="false">
              <div className="card-top">
                <span className="icon">
                 <i class="bi bi-diagram-3"></i>
                </span>
                 <span className="arrow">
  <i className="bi bi-arrow-up-right arrow-default"></i>
  <i className="bi bi-arrow-right arrow-hover"></i>
</span>
              </div>
              <h4>Modular Integrations</h4>
              <p>
                AstroForge.ai’s plug-and-play architecture lets you choose your
                tools without vendor lock-in.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-layers me-2"></i>
                  Interchangeable Test Executors – Cypress, Selenium, Playwright
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-kanban me-2"></i>
                  Test Management Systems – Xray, Jira, Zephyr, TestLink
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-sliders me-2"></i>
                  Flexible Configuration – Switch tools via simple config
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-infinity me-2"></i>
                  CI/CD Integration – Jenkins, GitLab, GitHub Actions
                </li>

                <li className="d-flex align-items-start">
                  <i className="bi bi-graph-up me-2"></i>
                  Monitoring & BI – APM, Grafana, Power BI, Tableau
                </li>
              </ul>
            </div>
          </div>
        </div>






        <div className="row g-4 mt-5">
          {/* Card 1 */}
            <div className="col-md-4">
            <div className="service-card" data-aos="fade-up" data-aos-delay="0"   data-aos-once="false">
              <div className="card-top">
                <span className="icon">
                  <i class="bi bi-bar-chart-line"></i>
                </span>
                 <span className="arrow">
  <i className="bi bi-arrow-up-right arrow-default"></i>
  <i className="bi bi-arrow-right arrow-hover"></i>
</span>
              </div>
              <h4>Reporting & Analytics</h4>
              <p>
                Go beyond pass/fail metrics with intelligent insights into test stability, performance, and trends.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-speedometer2 me-2"></i>
                 Real-Time Dashboards – Live execution status & coverage
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-graph-up-arrow me-2"></i>
                  Trend Analysis – Detect flakiness & recurring failures
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-cpu me-2"></i>
                Predictive Insights – AI forecasts potential failure points
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                 Flakiness Detection – Identifies unstable tests over time
                </li>

                <li className="d-flex align-items-start">
                  <i className="bi bi-pie-chart-fill me-2"></i>
                 Coverage Visualization – Tested vs untested insights
                </li>

                <li className="d-flex align-items-start">
                  <i className="bi bi-diagram-3 me-2"></i>
                 BI Integration – Export to Power BI, Tableau & Grafana
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
           <div className="col-md-4">
            <div className="service-card" data-aos="fade-up" data-aos-delay="0"   data-aos-once="false">
              <div className="card-top">
                <span className="icon">
                  <i class="bi bi-infinity"></i>
                </span>
                 <span className="arrow">
  <i className="bi bi-arrow-up-right arrow-default"></i>
  <i className="bi bi-arrow-right arrow-hover"></i>
</span>
              </div>
              <h4>CI/CD Automation</h4>
              <p>
                Bring automation into your DevOps lifecycle with minimal setup.
              </p>
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
            </div>
          </div>

          {/* Card 3 */}
            <div className="col-md-4">
            <div className="service-card" data-aos="fade-up" data-aos-delay="0"   data-aos-once="false">
              <div className="card-top">
                <span className="icon">
                  <i class="bi bi-speedometer"></i>
                </span>
                 <span className="arrow">
  <i className="bi bi-arrow-up-right arrow-default"></i>
  <i className="bi bi-arrow-right arrow-hover"></i>
</span>
              </div>
              <h4>Performance Monitoring</h4>
              <p>
                Integrate test execution with performance intelligence.
              </p>
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

                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-graph-up-arrow me-2"></i>
                  Establishes baseline metrics and flags deviations.
                </li>

                <li className="d-flex align-items-start">
                  <i className="bi bi-bar-chart me-2"></i>
                 Supports performance trend visualization over time.
                </li>
              </ul>
            </div>
          </div>
        </div>







         <div className="row g-4 mt-5">
          {/* Card 1 */}
            <div className="col-md-4">
            <div className="service-card" data-aos="fade-up" data-aos-delay="0"   data-aos-once="false">
              <div className="card-top">
                <span className="icon">
                  <i class="bi bi-shield-lock"></i>
                </span>
                 <span className="arrow">
  <i className="bi bi-arrow-up-right arrow-default"></i>
  <i className="bi bi-arrow-right arrow-hover"></i>
</span>
              </div>
              <h4>Security Testing</h4>
              <p>
               Embed security validation directly into your automated test pipelines.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-diagram-3 me-2"></i>
                Deep Crawling – Configurable URL exploration
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-list-check me-2"></i>
                OWASP Top 10 Checks – Industry-standard compliance
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-bug me-2"></i>
                Vulnerability Detection – XSS, SQLi, CSRF & more
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-key me-2"></i>
                 Dependency & Secrets Scanning – Detects risky packages & exposed credentials
                </li>

                <li className="d-flex align-items-start">
                  <i class="bi bi-code-slash me-2"></i>
                 SAST & API Security – Secure code & APIs
                </li>

                <li className="d-flex align-items-start">
                  <i class="bi bi-file-earmark-check me-2"></i>
                 Compliance Reports – OWASP, GDPR & PCI-DSS ready
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
           <div className="col-md-4">
            <div className="service-card" data-aos="fade-up" data-aos-delay="0"   data-aos-once="false">
              <div className="card-top">
                <span className="icon">
                  <i class="bi bi-journal-text"></i>
                </span>
                 <span className="arrow">
  <i className="bi bi-arrow-up-right arrow-default"></i>
  <i className="bi bi-arrow-right arrow-hover"></i>
</span>
              </div>
              <h4>Knowledge Loop</h4>
              <p>
               AstroForge.ai continuously learns from outcomes to improve test quality over time.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-arrow-repeat me-2"></i>
                 Automated Knowledge Updates – Auto-documents results & patterns.
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-chat-dots me-2"></i>
                 Smart Feedback Loop – Suggests test improvements from executions.
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-clock-history me-2"></i>
                  Versioned Test Artifacts – Tracks test history & evolution.
                </li>

                <li className="d-flex align-items-start">
                  <i class="bi bi-shield-exclamation me-2"></i>
                  Quality & Security Signals – Detects risky dependencies & secrets.
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-file-earmark-bar-graph me-2"></i>
                 Insightful Reports – HTML & JSON reports with severity ranking.
                </li>

                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-patch-check me-2"></i>
                 Compliance Ready – OWASP, GDPR & PCI-DSS support.
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
            {/* <div className="col-md-4">
            <div className="service-card">
              <div className="card-top">
                <span className="icon">
                  <i class="bi bi-speedometer"></i>
                </span>
                 <span className="arrow">
  <i className="bi bi-arrow-up-right arrow-default"></i>
  <i className="bi bi-arrow-right arrow-hover"></i>
</span>
              </div>
              <h4>Performance Monitoring</h4>
              <p>
                Integrate test execution with performance intelligence.
              </p>
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

                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-graph-up-arrow me-2"></i>
                  Establishes baseline metrics and flags deviations.
                </li>

                <li className="d-flex align-items-start">
                  <i className="bi bi-bar-chart me-2"></i>
                 Supports performance trend visualization over time.
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Features3;