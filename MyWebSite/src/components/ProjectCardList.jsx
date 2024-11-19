import ProjectCard from "./ProjectCard";
import Title from "./Title";
import { useLanguageTheme } from "../contexts/LanguageThemeContext";

function ProjectCardList() {
  const { texts } = useLanguageTheme();
  
  // Check if texts and projects are defined
  const cards = texts?.projectsSection?.projects || []; // Fallback to an empty array

  return (
    <div className="flex flex-col gap-6 p-8 md:p-0">
      <Title 
        color="text-light-purple dark:text-light-green" 
        text={texts?.projectsSection?.heading} 
        textSize="text-3xl md:text-5xl" 
        className={"text-center md:text-left"}
      />
      {cards.length > 0 ? (
        cards.map((card) => (
          <ProjectCard
            name={card.name}
            desc={card.desc}
            skills={card.skills || []}
            github={card.github}
            img={card.img}
            link={card.link}
            key={card.name}
          />
        ))
      ) : (
        <div>No projects available.</div> // Handle the case where there are no projects
      )}
    </div>
  );
}

export default ProjectCardList;