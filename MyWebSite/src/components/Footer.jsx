/* eslint-disable react-hooks/rules-of-hooks */
import { useLanguageContext } from "../contexts/LanguageContext";
import "./Footer.css";

function footer() {
  const { texts } = useLanguageContext();
  return (
    <>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-heading">
            <h1>{texts.footerSection.heading}</h1>
          </div>
          <div className="footer-info">
            <div className="line1">
              <p>{texts.footerSection.line1}</p>
            </div>
            <div className="line2">
              <p>{texts.footerSection.line2}</p>
            </div>
          </div>
          <div className="mail">
            <a href="mailto=uysalbahadir@icloud.com">
              {texts.footerSection.mail}
            </a>
          </div>
          <div className=" social-icons">
            <a href="https://twitter.com/">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://codepen.io/">
              <i className="fa fa-codepen"></i>
            </a>
            <a href="mailto:uysalbahadir@icloud.com">
              <i className="fa fa-at"></i>
            </a>
            <a href="https://instagram.com/">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default footer;
