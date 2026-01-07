import React from 'react'
import "./Faq1.css"
const Faq1 = () => {
    return (
        <>
            <section className="austria-faq-section ">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="austria-faq-title">Frequently Asked Questions</h2>
          <p className="austria-faq-subtitle">
            Everything you need to know about our platform
          </p>
        </div>

        <div className="accordion" id="austriaFaqAccordion">
          {/* FAQ 1 */}
          <div className="accordion-item austria-faq-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqOne"
              >
                What is Austria / Astraforge platform?
              </button>
            </h2>
            <div
              id="faqOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#austriaFaqAccordion"
            >
              <div className="accordion-body">
                Austria (Astraforge) is an intelligent automation platform that
                helps teams accelerate testing, improve quality, and ensure
                security and performance seamlessly.
              </div>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="accordion-item austria-faq-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqTwo"
              >
                Does the platform support automation testing?
              </button>
            </h2>
            <div
              id="faqTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#austriaFaqAccordion"
            >
              <div className="accordion-body">
                Yes, Austria supports AI-powered automation testing that helps
                generate intelligent test cases and improves automation coverage
                up to 10x.
              </div>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="accordion-item austria-faq-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqThree"
              >
                Is security and performance testing included?
              </button>
            </h2>
            <div
              id="faqThree"
              className="accordion-collapse collapse"
              data-bs-parent="#austriaFaqAccordion"
            >
              <div className="accordion-body">
                Absolutely. Austria integrates security validation and
                performance testing seamlessly into your testing lifecycle.
              </div>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="accordion-item austria-faq-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqFour"
              >
                Is the platform suitable for enterprises?
              </button>
            </h2>
            <div
              id="faqFour"
              className="accordion-collapse collapse"
              data-bs-parent="#austriaFaqAccordion"
            >
              <div className="accordion-body">
                Yes, the platform is designed for startups as well as large
                enterprises with scalable infrastructure and advanced analytics.
              </div>
            </div>
          </div>

          {/* FAQ 5 */}
          <div className="accordion-item austria-faq-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqFive"
              >
                How can I get started?
              </button>
            </h2>
            <div
              id="faqFive"
              className="accordion-collapse collapse"
              data-bs-parent="#austriaFaqAccordion"
            >
              <div className="accordion-body">
                You can get started by requesting a demo or contacting our team
                through the Contact page.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}

export default Faq1
