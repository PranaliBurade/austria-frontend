import React from "react";
// import "./CircleArchitecture.css";

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

function CircleArchitecture1() {
  return (
    <div className="architecture-container">
      <div className="outer-circle">
        {modules.map((item, index) => (
          <div key={index} className={`small-circle circle-${index + 1}`}>
            <h3 className="fontsi">{item.title}</h3>
            <p className="fontsi1">{item.desc}</p>
          </div>
        ))}

        <div className="center-circle">
          <h2 className="fsm">Architecture</h2>
        </div>
      </div>
    </div>
  );
}

export default CircleArchitecture1;
