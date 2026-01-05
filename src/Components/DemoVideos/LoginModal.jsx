import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import "./Modal.css";

export default function LoginModal({ onClose }) {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = () => {
    onClose();
    navigate("/full-videos");
  };

  return (
    <div className="modal-overlay">
      <div className="login-box position-relative">
        <span className="modal-close" onClick={onClose}>✕</span>

        <h2 className="login-title">
          {isSignup ? "Create Account" : "Login to Continue"}
        </h2>

        {isSignup && (
          <input
            className="form-control mb-3 login-input"
            placeholder="Full Name"
          />
        )}

        <input
          className="form-control mb-3 login-input"
          placeholder="Email"
        />

        <input
          className="form-control mb-3 login-input"
          type="password"
          placeholder="Password"
        />

        <button className="login-btn" onClick={handleSubmit}>
          {isSignup ? "Sign Up" : "Login"}
        </button>

        <p className="text-center mt-3 text-light" style={{ fontSize: "14px" }}>
          {isSignup ? "Already have an account?" : "New here?"}
          <span
            style={{ color: "#6ea8ff", cursor: "pointer", marginLeft: "6px" }}
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
}
