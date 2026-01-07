import { useState } from "react";
import "./TermAndPolicy.css";

export default function PrivacyPopup({ onClose }) {
  const [checked, setChecked] = useState(false);

  const handleSubmit = () => {
    if (!checked) {
      alert("Please accept Privacy Policy");
      return;
    }
    alert("Privacy policy accepted");
    onClose();
  };

  return (
    <div className="policy-overlay">
      <div className="policy-box">
        <h4>Privacy Policy</h4>

        <div className="policy-content">
          <h6>1. Introduction</h6>
          <p>
            We value your privacy and are committed to protecting your personal
            information. This Privacy Policy explains how we collect, use,
            store, and protect your data when you visit or use our website
            and services.
          </p>
          <p>
            By accessing or using our website, you agree to the practices
            described in this Privacy Policy.
          </p>

          <h6>2. Information We Collect</h6>
          <ul>
            <li>Personal details such as name, email address, phone number</li>
            <li>Information submitted through contact forms or demo requests</li>
            <li>Technical data such as IP address, browser type, device information</li>
            <li>Usage data related to website interaction</li>
          </ul>

          <h6>3. How We Use Your Information</h6>
          <ul>
            <li>To respond to inquiries or demo requests</li>
            <li>To provide and improve our services</li>
            <li>To communicate regarding updates or support</li>
            <li>To maintain website security and performance</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h6>4. Email Communication</h6>
          <p>
            When you submit a form on our website, the provided information
            may be sent to our official business email address for processing
            your request.
          </p>
          <p>
            Your email address will only be used for communication related to
            your request and will not be shared for marketing purposes.
          </p>

          <h6>5. Data Sharing</h6>
          <p>We do not sell or rent your personal data.</p>
          <ul>
            <li>Authorized internal team members</li>
            <li>Trusted service providers (hosting, email services)</li>
            <li>Legal or regulatory authorities if required by law</li>
          </ul>

          <h6>6. Data Security</h6>
          <p>
            We implement appropriate technical and organizational measures to
            protect your data. However, no online transmission is 100% secure.
          </p>

          <h6>7. Cookies & Analytics</h6>
          <p>
            We may use cookies to improve user experience, analyze traffic,
            and understand visitor behavior. You can control cookies through
            browser settings.
          </p>

          <h6>8. Your Rights</h6>
          <ul>
            <li>Access your personal data</li>
            <li>Request correction or deletion</li>
            <li>Withdraw consent</li>
            <li>Object to certain processing activities</li>
          </ul>

          <h6>9. Third-Party Links</h6>
          <p>
            Our website may contain links to third-party websites. We are not
            responsible for their privacy practices.
          </p>

          <h6>10. Data Retention</h6>
          <p>
            We retain personal data only as long as necessary or as required
            by law.
          </p>

          <h6>11. Changes to This Policy</h6>
          <p>
            We may update this Privacy Policy from time to time. Updates will
            be posted on this page.
          </p>

          <h6>12. Contact Us</h6>
          <p>
            Email: <b>info@astrofroge.io</b><br />
            Location: <b>Austria / Europe</b>
          </p>
        </div>

        <div className="policy-check">
          <input
            type="checkbox"
            id="privacy"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <label htmlFor="privacy">
            I agree to the Privacy Policy
          </label>
        </div>

        <div className="policy-actions">
          <button onClick={handleSubmit}>Submit</button>
          <button className="cancel" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
