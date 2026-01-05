import "./Pricing.css";
import "./Modal.css";

export default function PricingModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="position-relative">
        <span className="modal-close" onClick={onClose}>✕</span>

        <div className="container-fluid pricing-wrapper">
          <h2 className="pricing-title">Pricing & Plans</h2>

          <div className="row justify-content-center">
            <div className="col-md-4 mb-4">
              <div className="pricing-card">
                <h5>Free</h5>
                <p className="pricing-price">₹0 / month</p>
                <p>Basic demo access</p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="pricing-card pro">
                <h5>Pro</h5>
                <p className="pricing-price">₹1999 / month</p>
                <p>Full video access</p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="pricing-card">
                <h5>Enterprise</h5>
                <p className="pricing-price">Custom Pricing</p>
                <p>Dedicated support</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
