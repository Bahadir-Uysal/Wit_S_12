import "./Projects.css";


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
              <img src={card.img} alt="" />
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

      </div>
    </>
  );
}

export default Projects;
