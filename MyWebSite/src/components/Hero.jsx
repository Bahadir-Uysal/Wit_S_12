import Header from "./Header";
import myImage from "../assets/foto.png";
import "./Hero.css";
import { useState } from "react";
function Hero() {
  const [isToggled, setIsToggled] = useState(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <div className="hero-container">
        <Header></Header>
        <div className="toggle">
          <button className="toggle-btn" onClick={handleToggle}>{isToggled ? "ON" : "OFF"}</button>
        </div>
        <div className="hero-content">
          <div className="text-content">
            <h1>I am a Frontend Developer...</h1>
            <p>
              ...who likes to craft solid and scalable frontend products with
              great user experiences.
            </p>
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
