// import { useState } from "react";
// import "./TermAndPolicy.css";

// export default function TermsPopup({ onClose }) {
//   const [checked, setChecked] = useState(false);

//   const handleSubmit = () => {
//     if (!checked) {
//       alert("Please accept Terms & Conditions");
//       return;
//     }
//     alert("Terms accepted");
//     onClose();
//   };

//   return (
//     <div className="policy-overlay">
//       <div className="policy-box">
//         <h4>Terms & Conditions</h4>

//         <div className="policy-content">
//           <p>
//             By accessing and using Astraforge.io, you agree to comply with our
//             terms. Our services are provided for business and professional use
//             only.
//           </p>
//           <p>
//             Unauthorized use, redistribution, or modification of content is
//             prohibited.
//           </p>
//         </div>

//         <div className="policy-check">
//           <input
//             type="checkbox"
//             id="terms"
//             checked={checked}
//             onChange={(e) => setChecked(e.target.checked)}
//           />
//           <label htmlFor="terms">
//             I agree to the Terms & Conditions
//           </label>
//         </div>

//         <div className="policy-actions">
//           <button onClick={handleSubmit}>Submit</button>
//           <button className="cancel" onClick={onClose}>Close</button>
//         </div>
//       </div>
//     </div>
//   );
// }







import { useState } from "react";
import "./TermsPopup.css";

export default function TermsPopup({ onClose }) {
  const [checked, setChecked] = useState(false);

  const handleSubmit = () => {
    if (!checked) {
      alert("Please accept Terms & Conditions");
      return;
    }
    alert("Terms accepted");
    onClose();
  };

  return (
    <div className="terms-overlay">
      <div className="terms-box">
        <h4>Astraforge.io – Terms & Conditions</h4>
        <p className="terms-date">Effective Date: October 2025</p>

        <div className="terms-content">
          <p>
            These Terms & Conditions supersede all prior versions. By accessing
            or using Astraforge.io and its services (“Platform”, “Service”), you
            agree to be bound by these Terms & Conditions (“Terms”). If you do
            not agree, please do not use the Platform.
          </p>

          <h5>1. Definitions</h5>
          <p>
            <b>Astraforge.io / AstroFroge.ai</b> refers to the AI-powered software
            testing automation platform operated by Astraforge.
          </p>
          <p>
            <b>User / You / Your</b> means any individual or organization
            accessing the Platform.
          </p>
          <p>
            <b>Services</b> means AI-driven test generation, execution,
            analytics, integrations, and related features.
          </p>
          <p>
            <b>Content</b> includes all text, data, configurations, test
            artifacts, reports, and materials generated or uploaded by users.
          </p>

          <h5>2. Eligibility & Acceptance</h5>
          <p>You must be at least 18 years old and legally capable of entering agreements.</p>
          <p>You represent that all provided information is accurate and lawful.</p>
          <p>Illegal, harmful, or unauthorized use of the Platform is prohibited.</p>

          <h5>3. Scope of Services</h5>
          <ul>
            <li>AI-driven test generation and automation</li>
            <li>Self-healing test execution</li>
            <li>Visual regression testing</li>
            <li>Security and OWASP testing</li>
            <li>CI/CD integrations</li>
            <li>Analytics, reporting, and insights</li>
          </ul>
          <p>Services may evolve or change without prior notice.</p>

          <h5>4. User Responsibilities</h5>
          <ul>
            <li>Use the Platform only for lawful business purposes</li>
            <li>Maintain confidentiality of access credentials</li>
            <li>Ensure uploaded data does not violate laws or IP rights</li>
            <li>Comply with applicable regulations (GDPR, security policies)</li>
          </ul>

          <h5>5. Intellectual Property</h5>
          <p>
            All platform software, branding, logos, and AI models are owned by
            Astraforge.io.
          </p>
          <p>Users retain ownership of their own test data and artifacts.</p>

          <h5>6. AI & Automation Disclaimer</h5>
          <p>
            AI-generated outputs are assistive only and not a replacement for
            human review.
          </p>
          <p>Astraforge.io does not guarantee defect-free software.</p>

          <h5>7. Security & Data Handling</h5>
          <p>Reasonable safeguards are applied, but no system is 100% secure.</p>
          <p>Refer to the Privacy Policy for detailed data handling practices.</p>

          <h5>8. Service Availability</h5>
          <p>Services are provided on a best-effort basis.</p>
          <p>Astraforge.io is not liable for downtime beyond reasonable control.</p>

          <h5>9. Limitation of Liability</h5>
          <p>
            Astraforge.io shall not be liable for indirect or consequential
            damages. Liability is limited to the amount paid in the last 12
            months (if any).
          </p>

          <h5>10. Termination</h5>
          <p>
            Access may be suspended or terminated if terms are violated, misuse
            is detected, or required by law.
          </p>

          <h5>11. Modifications</h5>
          <p>
            Continued use of the Platform after updates constitutes acceptance
            of revised Terms.
          </p>

          <h5>12. Governing Law</h5>
          <p>
            These Terms are governed by the laws applicable in the jurisdiction
            of Astraforge.io’s operations.
          </p>

          <h5>13. Contact Information</h5>
          <p>Email: <b> info@astrofroge.io</b></p>
          <p>Website: <b>https://www.astraforge.io</b></p>
        </div>

        <div className="terms-check">
          <input
            type="checkbox"
            id="terms"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <label htmlFor="terms" className="text-dark">I agree to the Terms & Conditions</label>
        </div>

        <div className="terms-actions">
          <button onClick={handleSubmit}>Accept</button>
          <button className="cancel" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
