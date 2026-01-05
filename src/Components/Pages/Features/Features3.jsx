import React, { useEffect } from "react";
import AOS from "aos";
const Features3 = () => {
   useEffect(() => {
            AOS.init({duration:1000, once:true});
                AOS.refresh();
    
        },[]);       
  return (
    <div className="services-wrapper ">
      <div className="container">y

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
                Intelligent test creation driven by history, context, and domain knowledge.
              </p>
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
                AI-driven understanding of UI using vision, DOM, and context.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-2">
                  <i class="bi bi-eye me-2"></i>
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
                Plug-and-play integrations with full freedom no vendor lock-in.
              </p>
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
                Smart insights beyond pass/fail to track test health, performance, and trends.
              </p>
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

                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-exclamation-triangle me-2"></i>
                 Flakiness Detection – Find unstable tests early.
                </li>

                <li className="d-flex align-items-start">
                  <i className="bi bi-pie-chart-fill me-2"></i>
                 Coverage View – Tested vs untested clarity
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
              <h4>CI/CD CI/CD</h4>
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
               Continuous learning that improves test quality over time.
              </p>
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