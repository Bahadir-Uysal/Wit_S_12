/* eslint-disable react-hooks/rules-of-hooks */
import { useLanguageContext } from "../contexts/LanguageContext";

function footer() {
  const { texts } = useLanguageContext();
  return (
    <>
      <div>
        <div>
          <h1>{texts.footerSection.heading}</h1>
        </div>
        <div>
          <div>
            <p>{texts.footerSection.line1}</p>
          </div>
          <div>
            <p>{texts.footerSection.line2}</p>
          </div>
        </div>
        <div>
          <a href="mailto=uysalbahadir@icloud.com">{texts.footerSection.mail}</a>
        </div>
        <div className=" flex gap-6 text-3xl">
        <a href="https://twitter.com/" className=" text-light-purple dark:text-dark-dblila ">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://codepen.io/" className=" text-light-purple dark:text-dark-dblila ">
          <i className="fa fa-codepen"></i>
        </a>
        <a href="mailto:aysen904@gmail.com" className=" text-light-purple dark:text-dark-dblila">
          <i className="fa fa-at"></i>
        </a>
        <a href="https://instagram.com/" className=" text-light-purple dark:text-dark-dblila">
          <i className="fa fa-instagram"></i>
        </a>
        </div>
      </div>
    </>
  );
}

export default footer;
