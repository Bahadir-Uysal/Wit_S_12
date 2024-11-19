/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { languageData } from "../content/langmockdata.js";
import {
  saveToLocalStorage,
  getFromLocalStorage,
} from "../hooks/localstoragehelper.js";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LanguageThemeContext = createContext();

export const LanguageThemeProvider = ({ children }) => {
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
    toast.success(texts.alertSection.themeSuccess);
  }

  function changeLang(lang) {
    setLanguage(() => {
      saveToLocalStorage("language", lang);
      return lang;
    });
  
    const data = lang === "en" ? { language: languageData.en } : { language: languageData.tr };
  
    axios
      .post("https://reqres.in/api/workintech", data)
      .then((response) => {
        console.log("Dil başarıyla gönderildi:", response.data);
        toast.success(languageData[lang].alertSection.success);
      })
      .catch((error) => {
        console.error("Dil değiştirme sırasında hata oluştu:", error);
        toast.error(languageData[lang].alertSection.error);
      });
  }
  

  useEffect(() => {
    setTexts(languageData[language]);
  }, [language]);

  return (
    <LanguageThemeContext.Provider
      value={{ theme, toggleTheme, language, changeLang, texts }}
    >
      {children}
    </LanguageThemeContext.Provider>
  );
};

//context hooku
export const useLanguageTheme = () => useContext(LanguageThemeContext);