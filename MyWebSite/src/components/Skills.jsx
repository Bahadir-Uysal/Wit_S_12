import figma from "../assets/figma.jpeg";
import js from "../assets/js.jpeg";
import react from "../assets/react.svg";
import redux from "../assets/redux.png";
import node from "../assets/node.jpeg";
import vscode from "../assets/vscode.png";
import "./Skill.css";

function Skills() {
  return (
    <>
      <div className="skill-container">
        <div className="skill-content">
          <div className="skill-heading">
            <h1>Skills</h1>
          </div>
          <div className="skill-cards">
            <div className="skill-card">
              <img src={js} alt="javascript" />
              <p>JAVASCRIPT</p>
            </div>
            <div className="skill-card">
              <img src={react} alt="react" />
              <p>REACT</p>
            </div>
            <div className="skill-card">
              <img src={redux} alt="redux" />
              <p>REDUX</p>
            </div>
            <div className="skill-card">
              <img src={node} alt="node" />
              <p>NODE</p>
            </div>
            <div className="skill-card">
              <img src={vscode} alt="vscode" />
              <p>VS CODE</p>
            </div>
            <div className="skill-card">
              <img src={figma} alt="figma" />
              <p>FİGMA</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
