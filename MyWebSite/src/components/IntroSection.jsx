
import SocialButton from "./SocialButton";
import Title from "./Title";
import { useLanguageTheme } from "../contexts/LanguageThemeContext";

function IntroSection() {
  const { theme, toggleTheme, texts, language, changeLang } =
    useLanguageTheme();

  return (
    <div className=" h-auto bg-dark-pclil md:h-[671px] md:bg-light-purple-to-green  dark:bg-dark-purple-to-dark-green flex justify-center  ">
      <div className=" md:max-w-[955px] md:pt-10 ">
        <div className="flex md:justify-between  md:h-20  md:flex-row justify-center flex-col-reverse">
          <h2 className="text-light-green font-bold text-3xl pt-16 md:pt-0 md:text-3xl self-center">
            Ayşen
          </h2>
          <div className="flex md:gap-9 gap-4 justify-center md:justify-start md:pt-16 pt-8 text-sm md:text-base">
            <div className="uppercase text-light-green dark:text-light-gray font-bold ">
              {language === "tr" ? (
                <>
                  <span className="text-light-silver ">Switch to </span>
                  <span
                    className="dark:text-dark-lilly cursor-pointer"
                    onClick={() => changeLang("en")}
                  >
                    {texts.introSection.currentLang}
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="dark:text-dark-lilly cursor-pointer"
                    onClick={() => changeLang("tr")}
                  >
                    {texts.introSection.currentLang}
                  </span>
                  <span className="text-light-silver">'ye geç</span>
                </>
              )}
            </div>
            <div className="flex gap-2">
              <img
                onClick={toggleTheme}
                src={theme === "dark" ? "dark-switch.png" : "light-switch.png"}
                alt="theme mode"
                className="h-6 cursor-pointer"
              />
              <div className="uppercase pr-4 md:pr-0 text-dark-pblila dark:text-dark-silver font-bold">
                {theme === "dark"
                  ? texts.introSection.lightMode
                  : texts.introSection.darkMode}
              </div>
            </div>
          </div>
        </div>
        <div className="flex pt-14 justify-center items-center gap-5 flex-col md:flex-row md:gap-20 ">
          <div className="flex flex-col gap-9">
            <Title
              textSize={" text-3xl md:text-5.5xl"}
              text={texts.introSection.heading}
              color={"text-light-green"}
              className={"text-center md:text-left leading-normal "}
            />
            <div className=" text-light-purple md:text-white text-xl md:text-2xl text-center md:text-left">
              {texts.introSection.subHeading}
            </div>
            <div className="flex gap-3 justify-center md:justify-normal pb-8 md:pb-0">
              <SocialButton
                icon={
                  <i className="fa fa-github text-2xl" aria-hidden="true"></i>
                }
                text={"Github"}
                link={"https://github.com/aysenayydin"}
              />
              <SocialButton
                icon={
                  <i className="fa fa-linkedin text-2xl" aria-hidden="true"></i>
                }
                text={"Linkedin"}
                link={"https://www.linkedin.com/in/aysenaydin/"}
              />
            </div>
          </div>
          <div className="shrink-0 pb-8 md:pb-0">
            <img
              className="md:w-[350px] md:h-[375px]  w-[200px] h-[200px] rounded-xl shadow-avatar-shadow "
              src="profile1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroSection;
