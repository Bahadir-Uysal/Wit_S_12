import Header from "./Header"
import myImage from '../assets/foto.png';
import './Hero.css'
import "../App.css"
function Hero() {
 

    return (
      <>
      <div className="hero-container">
        <Header></Header>
        <h1>I am a Frontend Developer</h1>
        <h2>...who likes to craft solid and scalable frontend products with great user experiences.</h2>
        <button>Github</button>
        <button>Linkedin</button>
        <img src={myImage}  />
        </div>
    </>
    )
  }
  
  export default Hero