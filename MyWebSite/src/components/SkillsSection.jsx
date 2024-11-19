
import Title from "./Title";
import { skillsLeft } from "../content/data";
import { skillsRight } from "../content/data";
import { useLanguageTheme } from "../contexts/LanguageThemeContext";

function SkillList() {
  const { texts } = useLanguageTheme();

  return (
    <div className="flex flex-col md:flex-row gap-8 lg:gap-36 py-8 md:pt-[84px] md:pb-[96px] justify-center w-full text-l md:text-2xl">
      <Title text={texts.skillsSection.heading} textSize={"text-3xl md:text-5xl"} color={"text-light-green md:text-light-purple  dark:text-light-green"} className={"text-center md:text-left"} />
      <div className="flex justify-center gap-5 lg:gap-36 ">
        <div className="flex gap-9 flex-col">
          {skillsLeft.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 md:gap-6  text-light-gray font-semibold"
            >
              <img
                className={`w-16 h-16 lg:w-32 lg:h-32 rounded-md ${
                  skill.backgroundColor ? skill.backgroundColor : ""
                }`}
                src={skill.icon}
                alt={skill.title}
              />
              <div className="dark:text-white">{skill.title}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-9 flex-col">
          {skillsRight.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 md:gap-6  text-light-gray font-semibold"
            >
              <img
                className=" w-16 h-16 lg:w-32 lg:h-32 rounded-md "
                src={skill.icon}
                alt={skill.title}
              />
              <div className="dark:text-white">{skill.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillList;
