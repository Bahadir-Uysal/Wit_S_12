import { createContext, useContext, useEffect, useState } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../hooks/localStorage";
import { languageData } from "../datas/data";
import PropTypes from "prop-types";
import axios from "axios";

const LanguageContext = createContext();

export const LanguageContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(getFromLocalStorage("theme") || "light");
  const [language, setLanguage] = useState(
    getFromLocalStorage("language") || "tr"
  );
  const [texts, setTexts] = useState(languageData[language]);

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    saveToLocalStorage("theme", theme === "light" ? "dark" : "light");
  }
  function changeLang(lang) {
    setLanguage(lang);
    saveToLocalStorage("language", lang);

    const data =
      lang === "EN"
        ? { language: languageData.en }
        : { language: languageData.tr };
    axios
      .post("https://reqres.in/api/workintech", data)
      .then((response) => {
        console.log("Dil başarıyla gönderildi:", response.data);
      })
      .catch((error) => {
        console.error("Dil değiştirme sırasında hata oluştu:", error);
      });
  }

  useEffect(() => {
    setTexts(languageData[language]);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ theme, toggleTheme, language, changeLang, texts }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => useContext(LanguageContext);

LanguageContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
