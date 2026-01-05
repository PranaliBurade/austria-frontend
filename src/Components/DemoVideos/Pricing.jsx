// export default function Pricing() {
//   return (
//     <div className="container py-5 text-center">
//       <h2>Pricing & Plans</h2>

//       <div className="row mt-4">
//         <div className="col-md-4">
//           <div className="card p-3">
//             <h5>Free</h5>
//             <p>₹0 / month</p>
//           </div>
//         </div>

//         <div className="col-md-4">
//           <div className="card p-3">
//             <h5>Pro</h5>
//             <p>₹1999 / month</p>
//           </div>
//         </div>

//         <div className="col-md-4">
//           <div className="card p-3">
//             <h5>Enterprise</h5>
//             <p>Custom Pricing</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import "./Pricing.css";
export default function Pricing() {
  return (
    <div className="container-fluid pricing-wrapper">
      <h2 className="pricing-title">Pricing & Plans</h2>

      <div className="row mt-4 justify-content-center">
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
  );
}
