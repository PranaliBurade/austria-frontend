// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     navigate("/full-videos");
//   };

//   return (
//     <div className="container py-5 text-center">
//       <h2>Login to Continue</h2>

//       <input className="form-control mb-3" placeholder="Email" />
//       <input
//         className="form-control mb-3"
//         type="password"
//         placeholder="Password"
//       />

//       <button className="btn btn-success" onClick={handleLogin}>
//         Login
//       </button>
//     </div>
//   );
// }




import { useNavigate } from "react-router-dom";
import './Login.css';
export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/full-videos");
  };

  return (
    <div className="login-wrapper">
      <div className="login-box text-center">

        <h2 className="login-title">Login to Continue</h2>

        <input
          className="form-control mb-3 login-input"
          placeholder="Email"
        />

        <input
          className="form-control mb-3 login-input"
          type="password"
          placeholder="Password"
        />

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>

      </div>
    </div>
  );
}
