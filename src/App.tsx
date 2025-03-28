import "./App.css"
import Navbar from "./components/Navbar/navbar"
import ParticleBackground from "./components/Particles/particles"
import FrontImg1 from "./assets/images/bg1.png"
import FrontImg2 from "./assets/images/bg2.png"
import FrontImg3 from "./assets/images/bg3.png"

const App = () => {
  return (
    <>
      <Navbar />
      <ParticleBackground />

      <div className="grid--1x2" id="home">
        <div className="home-heading-box">
          <p className="home-line-small">Lumi Card</p>
          <h1 className="home-heading-big">Create. Customize. Share. Instantly!</h1>
          <p className="home-description">Design stunning digital postcards with ease! Customize text, images, and animations to create the perfect message for any occasion. Share your creation instantly with friends and family—no hassle, just creativity!</p>
          <button className="home-get-started">Let's Get Started</button>
        </div>
        <div className="home-images">
          <img src={FrontImg3} />
          <img src={FrontImg2} />
          <img src={FrontImg1} />
        </div>
      </div>
    </>
  )
}

export default App