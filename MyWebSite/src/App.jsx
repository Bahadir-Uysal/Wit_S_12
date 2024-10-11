import "./App.css";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import { useEffect } from "react";
import { useLanguageContext } from "./contexts/LanguageContext";
import Footer from "./components/Footer";

function App() {
  const { theme } = useLanguageContext();
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
        <Hero></Hero>
        <Skills></Skills>
        <Profile></Profile>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
