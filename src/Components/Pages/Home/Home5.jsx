import React from "react";
// import "./ArchitectureOrbit.css";

/*
  Uses the exact texts from your image.
  The small circles are arranged around the center using CSS transforms.
  Each small item receives a CSS variable --angle to place it.
*/

const modules = [
  {
    title: "Test Generation Module",
    desc: "Automatically creates optimized test cases using AI-driven logic.",
  },
  {
    title: "Deep Scanner Module",
    desc: "Scans apps deeply to detect issues, flows, and dependencies.",
  },
  {
    title: "Test Execution Layer",
    desc: "Executes all generated tests efficiently across environments.",
  },
  {
    title: "Integration Bridge",
    desc: "Connects CI/CD, APM tools, and pipelines seamlessly.",
  },
  {
    title: "Reporting & Analytics",
    desc: "Visual dashboards and insights for test results and coverage.",
  },
  {
    title: "Knowledge Feedback System",
    desc: "Continuously learns and improves based on execution results.",
  },
];

export default function ArchitectureOrbit() {
  return (
    <div className="orbit-wrapper">
      {/* subtle watermark using your uploaded image */}
      <img
        className="diagram-watermark"
        src="/images/mnt/data/Screenshot 2025-11-21 154555.png"
        alt="diagram reference"
      />

      <div className="outer-ring">
        {modules.map((m, i) => {
          const angle = i * (360 / modules.length);
          return (
            <div
              key={i}
              className="orbital"
              style={{ ["--angle"]: `${angle}deg` }}
              aria-label={m.title}
            >
              <div className="small-circle">
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            </div>
          );
        })}

        <div className="center-circle">
          <h2>Architecture</h2>
        </div>
      </div>
    </div>
  );
}
