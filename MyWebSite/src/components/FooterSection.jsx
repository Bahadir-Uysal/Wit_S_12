import { useLanguageTheme } from "../contexts/LanguageThemeContext";

const FooterSection = () => {
  const { texts } = useLanguageTheme();
  const username = "aysen904";
  const domain = "gmail.com";
  const handleClick = () => {
    window.location.href = `mailto:${username}@${domain}`;
  };

  return (
    <footer className="h-[454px] flex flex-col justify-center items-center gap-4">
      <h2 className="text-light-purple dark:text-dark-dblila text-2xl md:text-5xl  mb-4 font-bold">
        {" "}
        {texts.footerSection.heading}
      </h2>
      <p className="text-2xl leading-9 text-center dark:text-white">
        {texts.footerSection.line1}
      </p>
      <p className="text-2xl leading-9 text-center dark:text-white">
        {texts.footerSection.line2}
      </p>

      <button
        className="text-light-purple dark:text-dark-dblila text-xl font-medium hover:underline"
        onClick={handleClick}
      >
        <span>
          {username}[at]{domain.split(".")[0]}[dot]{domain.split(".")[1]}
        </span>
      </button>

      <div className=" flex gap-6 text-3xl">
        <a
          href="https://twitter.com/"
          className=" text-light-purple dark:text-dark-dblila "
        >
          <i className="fa fa-twitter"></i>
        </a>
        <a
          href="https://codepen.io/"
          className=" text-light-purple dark:text-dark-dblila "
        >
          <i className="fa fa-codepen"></i>
        </a>
        <button
          onClick={handleClick}
          className=" text-light-purple dark:text-dark-dblila"
        >
          <i className="fa fa-at"></i>
        </button>
        <a
          href="https://instagram.com/"
          className=" text-light-purple dark:text-dark-dblila"
        >
          <i className="fa fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default FooterSection;