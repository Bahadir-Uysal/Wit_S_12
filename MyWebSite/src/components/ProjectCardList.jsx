import ProjectCard from "./ProjectCard";
import Title from "./Title";
import { useLanguageTheme } from "../contexts/LanguageThemeContext";

function ProjectCardList() {
  const { texts } = useLanguageTheme();
  const cards = texts.projectsSection.projects;

  return (
    <div className="flex flex-col gap-6 p-8 md:p-0">
      <Title color="text-light-purple dark:text-light-green" text={texts.projectsSection.heading} textSize=" text-3xl md:text-5xl" className={"text-center md:text-left"}/>
      {cards.map((card) => (
        <ProjectCard
          name={card.name}
          desc={card.desc}
          skills={card.skills}
          github={card.github}
          img={card.img}
          link={card.link}
          key={card.name}
        />
      ))}
    </div>
  );
}

export default ProjectCardList;