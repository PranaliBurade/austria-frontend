// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`navbar navbar-expand-lg fixed-top p-1 ${
//         scrolled ? "navbar-solid" : "navbar-transparent"
//       }`}
//     >
//       <div className="container-fluid w-75 h-100 rounded-5 px-4 p-3 mt-2 navabrcol mobilenavwidth">
//         <div className="navbar-brand">
//           <h1 className="text-light">Astraforge</h1>
//         </div>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
//           <ul className="navbar-nav align-items-lg-center gap-3">
//             <li className="nav-link fw-semibold">
//               <Link className="text-light text-decoration-none" to="/">Home</Link>
//             </li>
//             <li className="nav-link fw-semibold">
//               <Link className="text-light text-decoration-none" to="/about">About</Link>
//             </li>
//             <li className="nav-link fw-semibold">
//               <Link className="text-light text-decoration-none" to="/feature">Features</Link>
//             </li>
//             <li className="nav-link fw-semibold">
//               <Link className="text-light text-decoration-none" to="/integrationall">Integration</Link>
//             </li>
//             <li className="nav-link fw-semibold">
//               <Link className="text-light text-decoration-none" to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;












import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Close navbar on route change
  useEffect(() => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse.classList.contains("show")) {
      // remove 'show' class to close
      navbarCollapse.classList.remove("show");
    }
  }, [location]); // runs on route change

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top p-1 ${
        scrolled ? "navbar-solid" : "navbar-transparent"
      }`}
    >
      <div className="container-fluid w-75 h-100 rounded-5 px-4 p-3 mt-2 navabrcol mobilenavwidth">
        <div className="navbar-brand">
          <h1 className="text-light">Astraforge</h1>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav align-items-lg-center gap-3">
            <li className="nav-link fw-semibold">
              <Link className="text-light text-decoration-none" to="/">Home</Link>
            </li>
            <li className="nav-link fw-semibold">
              <Link className="text-light text-decoration-none" to="/about">About</Link>
            </li>
            <li className="nav-link fw-semibold">
              <Link className="text-light text-decoration-none" to="/feature">Features</Link>
            </li>
            <li className="nav-link fw-semibold">
              <Link className="text-light text-decoration-none" to="/integrationall">Integration</Link>
            </li>
            <li className="nav-link fw-semibold">
              <Link className="text-light text-decoration-none" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
