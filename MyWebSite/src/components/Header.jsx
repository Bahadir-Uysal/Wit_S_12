import { useState } from "react";
import { useLanguageContext } from "../contexts/LanguageContext";

/* eslint-disable react/no-unescaped-entities */
function Header() {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  const { theme, toggleTheme, texts, language, changeLang } =
    useLanguageContext();
  return (
    <>
      <header className="header">
        <h1>Bahadır UYSAL</h1>
        <div className="options">
          {language === "tr" ? (
            <>
              <span>Change to </span>
              <span onClick={() => changeLang("en")}>
                {texts.introSection.currentLang}
              </span>
            </>
          ) : (
            <>
              <span onClick={() => changeLang("tr")}>
                {texts.introSection.currentLang}
              </span>
              <span>'ye geç</span>
            </>
          )}
          <div className="toggle">
            <button className="toggle-btn" onClick={handleToggle}>
              {isToggled ? "ON" : "OFF"}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
