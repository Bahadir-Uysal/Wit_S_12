import Header from "./Header";
import myImage from "../assets/foto.png";
import "./Hero.css";
import { useLanguageContext } from "../contexts/LanguageContext";
function Hero() {
  const { texts } = useLanguageContext();
  return (
    <>
      <div className="hero-container">
        <Header></Header>

        <div className="hero-content">
          <div className="text-content">
            <h1>{texts.introSection.heading}</h1>
            <p>{texts.introSection.subHeading}</p>
            <div className="hero-buttons">
              <button>Github</button>
              <button>Linkedin</button>
            </div>
          </div>
          <img src={myImage} className="hero-img" />
        </div>
      </div>
    </>
  );
}

export default Hero;
