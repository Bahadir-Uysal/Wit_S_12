import "./Skill.css";
import { skillsLeft, skillsRight } from "../datas/icons";
import { useLanguageContext } from "../contexts/LanguageContext";

function Skills() {
  const { texts } = useLanguageContext();
  return (
    <>
      <div className="skill-container">
        <div className="skill-content">
          <div className="skill-heading">
            <h1>{texts.skillsSection.heading}</h1>
          </div>
          <div className="skill-cards">
            <div>
              {skillsLeft.map((skill, index) => (
                <div key={index} className="skill-card">
                  <img src={skill.icon} alt={skill.title} />
                  <p>{skill.title}</p>
                </div>
              ))}
            </div>
            <div>
              {skillsRight.map((skill, index) => (
                <div key={index} className="skill-card">
                  <img src={skill.icon} alt={skill.title} />
                  <p>{skill.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
