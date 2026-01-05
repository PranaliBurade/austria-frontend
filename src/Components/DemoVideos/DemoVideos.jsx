
// import { Link } from "react-router-dom";
// import "./DemoVideos.css";

// export default function DemoVideos() {

//   const demoVideos = [
//     {
//       title: "Demo Video 1",
//       desc: "Short AI testing walkthrough",
//       embed: "https://www.youtube.com/embed/dQw4w9WgXcQ"
//     },
//     {
//       title: "Demo Video 2",
//       desc: "Automation basics overview",
//       embed: "https://www.youtube.com/embed/9bZkp7q19f0"
//     },
//     {
//       title: "Demo Video 3",
//       desc: "AI test execution demo",
//       embed: "https://www.youtube.com/embed/l482T0yNkeo"
//     }
//   ];

//   return (
//     <div className="container-fluid demo-videos-wrapper">
//       <h2 className="demo-videos-title">Free Demo Videos</h2>

//       <div className="row g-4 justify-content-center">
//         {demoVideos.map((video, index) => (
//           <div className="col-md-4 d-flex justify-content-center" key={index}>
//             <div className="demo-video-card">

//               {/* 🎥 Embedded Video */}
//               <div className="demo-video-frame">
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
//         <Link to="/login">
//           <button className="demo-trial-btn">
//             Start Free Trial
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }










import { useState } from "react";
import LoginModal from "./LoginModal";
import "./DemoVideos.css";

export default function DemoVideos() {
  const [showLogin, setShowLogin] = useState(false);
  const demoVideos = [
    {
      title: "Demo Video 1",
      desc: "Short AI testing walkthrough",
      embed: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      title: "Demo Video 2",
      desc: "Automation basics overview",
      embed: "https://www.youtube.com/embed/9bZkp7q19f0"
    },
    {
      title: "Demo Video 3",
      desc: "AI test execution demo",
      embed: "https://www.youtube.com/embed/l482T0yNkeo"
    },
    {
      title: "Demo Video 1",
      desc: "Short AI testing walkthrough",
      embed: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      title: "Demo Video 2",
      desc: "Automation basics overview",
      embed: "https://www.youtube.com/embed/9bZkp7q19f0"
    },
    {
      title: "Demo Video 3",
      desc: "AI test execution demo",
      embed: "https://www.youtube.com/embed/l482T0yNkeo"
    }
  ];
  return (
    <div className="container-fluid demo-videos-wrapper">
      <h1 className="demo-videos-title">Free Demo Videos</h1>
      <div className="container">
      {/* videos code same */}
      <div className="row g-4 justify-content-center ">
        {demoVideos.map((video, index) => (
          <div className="col-md-4 d-flex justify-content-center" key={index}>
            <div className="demo-video-card">

              {/* 🎥 Embedded Video */}
              <div className="demo-video-frame">
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
          className="demo-trial-btn"
          onClick={() => setShowLogin(true)}
        >
          Start Free Trial
        </button>
      </div>

      {showLogin && (
        <LoginModal onClose={() => setShowLogin(false)} />
      )}
      </div>
    </div>
  );
}
