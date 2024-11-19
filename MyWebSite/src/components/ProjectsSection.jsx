import React from "react";
import ProjectCardList from "./ProjectCardList";

function ProjectsSection() {
  return (
    <div className="flex justify-center bg-light-green dark:bg-dark-green py-4 md:py-20 ">
      <ProjectCardList />
    </div>
  );
}

export default ProjectsSection;