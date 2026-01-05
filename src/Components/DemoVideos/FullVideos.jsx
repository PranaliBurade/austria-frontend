
// import { Link } from "react-router-dom";
// import "./FullVideos.css";

// export default function FullVideos() {

//   const fullVideos = [
//     {
//       title: "Advanced Video 1",
//       desc: "Deep automation flow",
//       embed: "https://www.youtube.com/embed/dQw4w9WgXcQ"
//     },
//     {
//       title: "Advanced Video 2",
//       desc: "Framework architecture",
//       embed: "https://www.youtube.com/embed/9bZkp7q19f0"
//     },
//     {
//       title: "Advanced Video 3",
//       desc: "AI test execution",
//       embed: "https://www.youtube.com/embed/l482T0yNkeo"
//     },
//     {
//       title: "Advanced Video 4",
//       desc: "CI/CD integration",
//       embed: "https://www.youtube.com/embed/3tmd-ClpJxA"
//     }
//   ];

//   return (
//     <div className="container-fluid full-videos-wrapper px-5">
//       <h2 className="full-videos-title">Full Trial Videos</h2>

//       <div className="row g-4 mt-4 justify-content-center">
//         {fullVideos.map((video, index) => (
//           <div className="col-lg-6 col-md-6 col-sm-12" key={index}>
//             <div className="full-video-card">

//               {/* 🎥 Embedded Video */}
//               <div className="full-video-frame">
//                 <iframe
//                   src={video.embed}
//                   title={video.title}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               </div>

//               <h6 className="mt-3">{video.title}</h6>
//               <p>{video.desc}</p>

//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="text-center mt-5">
//         <Link to="/pricing">
//           <button className="full-pricing-btn">
//             View Pricing & Plans
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }







import { useState } from "react";
import PricingModal from "./PricingModal";
import "./FullVideos.css";

export default function FullVideos() {
   const fullVideos = [
    {
      title: "Advanced Video 1",
      desc: "Deep automation flow",
      embed: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      title: "Advanced Video 2",
      desc: "Framework architecture",
      embed: "https://www.youtube.com/embed/9bZkp7q19f0"
    },
    {
      title: "Advanced Video 3",
      desc: "AI test execution",
      embed: "https://www.youtube.com/embed/l482T0yNkeo"
    },
    {
      title: "Advanced Video 4",
      desc: "CI/CD integration",
      embed: "https://www.youtube.com/embed/3tmd-ClpJxA"
    }
  ];
  const [showPricing, setShowPricing] = useState(false);
  
  return (
    <div className="container-fluid full-videos-wrapper px-5">
      <h1 className="full-videos-title">Full Trial Videos</h1>

      {/* videos code same */}
       <div className="row g-4 mt-4 justify-content-center">
        {fullVideos.map((video, index) => (
          <div className="col-lg-6 col-md-6 col-sm-12" key={index}>
            <div className="full-video-card">

              {/* 🎥 Embedded Video */}
              <div className="full-video-frame">
                <iframe
                  src={video.embed}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <h6 className="mt-3">{video.title}</h6>
              <p>{video.desc}</p>

            </div>
          </div>
        ))}
      </div>


      <div className="text-center mt-5">
        <button
          className="full-pricing-btn"
          onClick={() => setShowPricing(true)}
        >
          View Pricing & Plans
        </button>
      </div>

      {showPricing && (
        <PricingModal onClose={() => setShowPricing(false)} />
      )}
    </div>
  );
}
