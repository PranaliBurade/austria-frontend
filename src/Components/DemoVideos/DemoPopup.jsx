// import { useState } from "react";
// import "./DemoPopup.css";

// export default function DemoPopup({ onClose }) {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   // ✅ FRONTEND ENV SE API URL
//   const API_URL = import.meta.env.VITE_API_URL;

//   // ✅ YE FUNCTION YAHI AAYEGA
//   const sendRequest = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch(`${API_URL}/api/request-demo`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, message }),
//       });

//       const data = await res.json();

//       if (data.success) {
//         alert("Demo request sent successfully!");
//         onClose();
//       } else {
//         alert("Failed to send request: " + data.error);
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Backend not reachable");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="popup-overlay">
//       <div className="popup-box">
//         <h4>Request a Demo</h4>

//         <form onSubmit={sendRequest}>
//           <input
//             type="email"
//             placeholder="Your Email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <textarea
//             placeholder="Enter your message"
//             required
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />

//           <button type="submit" disabled={loading}>
//             {loading ? "Sending..." : "Send"}
//           </button>
//         </form>

//         <span className="close-btn" onClick={onClose}>×</span>
//       </div>
//     </div>
//   );
// }








import { useState } from "react";
import "./DemoPopup.css";

export default function DemoPopup({ onClose }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Correct API URL automatically pick hoga
  const API_URL = import.meta.env.VITE_API_URL;

  const sendRequest = async (e) => {
    e.preventDefault();
    setLoading(true);
     console.log("🔥 sendRequest called");

    try {
      const res = await fetch(`${API_URL}/api/request-demo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Server error");
      }

      const data = await res.json();

      if (data.success) {
        alert("Demo request sent successfully!");
        setEmail("");
        setMessage("");
        onClose();
      } else {
        alert("Failed: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      console.error("Frontend Error:", err);

      // ❗ Local + live friendly message
      if (API_URL.includes("localhost")) {
        alert("Backend not reachable. Make sure your local server is running on port 5000.");
      } else {
        alert("Server is waking up or unavailable. Try again in 10s.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h4>Request a Demo</h4>
        <form onSubmit={sendRequest}>
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Enter your message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
        <span className="close-btn" onClick={onClose}>×</span>
      </div>
    </div>
  );
}
