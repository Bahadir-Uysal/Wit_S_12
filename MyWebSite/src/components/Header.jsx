import { useLanguageContext } from "../contexts/LanguageContext";

/* eslint-disable react/no-unescaped-entities */
function Header() {
  const { theme, toggleTheme, texts, language, changeLang } =
    useLanguageContext();
  return (
    <>
      <header className="header">
        <h1>Bahadır UYSAL</h1>
        <div className="lang-options">
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
          <div className="theme-optios">
            <img
              onClick={toggleTheme}
              src={theme === "dark" ? "dark-switch.png" : "light-switch.png"}
              alt={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              className="h-6 cursor-pointer"
            />
            <div className="uppercase  text-dark-pblila dark:text-dark-silver font-bold">
              {theme === "dark"
                ? texts.introSection.lightMode
                : texts.introSection.darkMode}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
