import "./Projects.css";
import face from "../assets/project-1.png";

import { useLanguageContext } from "../contexts/LanguageContext";
function Projects() {
  const { texts } = useLanguageContext();
  const cards = texts.projectsSection.projects;
  return (
    <>
      <div className="projects-container">
        <h1>{texts.projectsSection.heading}</h1>
        {cards.map((card,index) => (
          <div key={index} className="project-content">
            <div className="project-img">
              <img src={face} alt="" />
            </div>
            <div className="project-info">
              <h2>{card.name}</h2>
              <p>
                {card.desc}
              </p>
              <div className="project-list">
                <p>{card.skill1}</p>
                <p>{card.skill2}</p>
                <p>{card.skill3}</p>
              </div>
              <div className="project-links">
                <a href={card.link}>View Site</a>
                <a href={card.github}>Github</a>
              </div>
            </div>
          </div>
        ))}

        {/* <div className="project-content">
          <div className="project-img">
            <img src={monitor} alt="" />
          </div>
          <div className="project-info">
            <h2>Journey</h2>
            <p>
              A simple, customizable, minimal setup cookie plugin that allows
              your users to select which cookies to accept or decline. This was
              created with vanilla JS, SCSS and Parcel Bundler and is available
              as a NPM package and the git repository makes any type of
              customization to code and themes possible.
            </p>
            <div className="project-list">
              <p>react</p>
              <p>redux</p>
              <p>vercel</p>
            </div>
            <div className="project-links">
              <a href="">View Site</a>
              <a href="">Github</a>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Projects;
