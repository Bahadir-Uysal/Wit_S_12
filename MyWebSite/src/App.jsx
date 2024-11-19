import IntroSection from "./components/IntroSection";
import SkillsSection from "./components/SkillsSection";
import ProfileSection from "./components/ProfileSection";
import ProjectsSection from "./components/ProjectsSection";
import FooterSection from "./components/FooterSection";
import { useLanguageTheme } from "./contexts/LanguageThemeContext";
import { useEffect } from "react";

function App() {
  const { theme } = useLanguageTheme();
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <>
      <div className="App bg-light-white dark:bg-dark-gray">
        <IntroSection />
         <SkillsSection /> 
        <ProfileSection />
         <ProjectsSection />
        <FooterSection />  
      </div>
    </>
  );
}

export default App;