import "./App.css"

import Navbar from "./components/Navbar/navbar"
import ParticleBackground from "./components/Particles/particles"

import FrontImg1 from "./assets/images/bg1.png"
import FrontImg2 from "./assets/images/bg2.png"
import FrontImg3 from "./assets/images/bg3.png"
import Card1 from "./assets/images/card1.png"
import Card2 from "./assets/images/card2.png"
import Card3 from "./assets/images/card3.png"
import Feature1 from "./assets/images/feature1.png"
import Feature2 from "./assets/images/feature2.png"
import Feature3 from "./assets/images/feature3.png"

const App = () => {
  return (
    <>
      <Navbar />
      <ParticleBackground />

      <div className="grid--1x2" >
        <div className="home-heading-box">
          <p className="home-line-small">Lumi Card</p>
          <h1 className="heading-h1 home-heading-big">Create. Customize. Share. Instantly!</h1>
          <p className="home-description">Design stunning digital postcards with ease! Customize text, images, and animations to create the perfect message for any occasion. Share your creation instantly with friends and family—no hassle, just creativity!</p>
          <button className="home-get-started"><a href="">Let's Get Started</a></button>
        </div>
        <div className="home-images">
          <img src={FrontImg3} />
          <img src={FrontImg2} />
          <img src={FrontImg1} />
        </div>
      </div>

      <div id="about" className="grid--1x2">
        <div className="about-images">
          <img src={Card1} />
          <img src={Card2} />
          <img src={Card3} />
        </div>
        <div className="about-box">
          <h1 className="heading-h1">About Us</h1>
          <p className="about-para">
            <span className="bold">LumiCard</span> is a platform that allows users to create&nbsp;
            <span className="bold">personalized and exciting</span> digital greetings for various occasions like&nbsp;
            <span className="bold">birthdays, holidays,</span> or special moments. Users can design&nbsp;
            <span className="bold">animated postcards</span> using beautiful templates, customize them with&nbsp;
            <span className="bold">text, images, and effects,</span> and share them instantly with friends and family.&nbsp;
            <span className="bold">LumiCard eliminates the need for static images</span> and allows users to&nbsp;
            <span className="bold">bring their greetings to life,</span> making them more&nbsp;
            <span className="bold">engaging and memorable.</span>
          </p>
          <a href="https://github.com/TRAVELLER00012" target="_blank" className="link-direction"><span>Contribute</span><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 512 512" id="rightarrow"><path d="m322.7 128.4 100.3 105c6 5.8 9 13.7 9 22.4s-3 16.5-9 22.4L322.7 383.6c-11.9 12.5-31.3 12.5-43.2 0-11.9-12.5-11.9-32.7 0-45.2l48.2-50.4h-217c-17 0-30.7-14.3-30.7-32s13.7-32 30.6-32h217l-48.2-50.4c-11.9-12.5-11.9-32.7 0-45.2 12-12.5 31.3-12.5 43.3 0z" fill="#a3fe79" className="color000000 svgShape"></path></svg> </a>
        </div>
      </div>

      <div id="features">
        <h1 className="heading-h1">Features</h1>
        <div className="features-box">
          <div className="feature">
            <div>
              <h2>Easy Customization</h2>
              <p>LumiCard lets you create truly unique greeting cards by offering complete customization options. Choose from a variety of beautifully designed templates and personalize them with your own text, images, colors, and animations. Whether you want a minimal aesthetic or a vibrant and lively design, LumiCard gives you full creative control to craft the perfect digital greeting for any occasion.</p>
            </div>            
            <img src={Feature1}/>
          </div>

          <div className="feature">
            <img src={Feature2}/>
            <div>
              <h2>Instant Sharing</h2>
              <p>No need to print or wait! With LumiCard, you can share your personalized animated greeting cards instantly. Send them directly via email, share them on social media platforms, or generate a unique link to distribute to friends and family. Whether it’s a birthday surprise or a last-minute holiday wish, LumiCard ensures your greetings reach your loved ones in just a click.</p>
            </div>
          </div>
          
          <div className="feature">
            <div>
              <h2>No App Required</h2>
              <p>Static images are a thing of the past—LumiCard adds movement, animations, and effects to make your greetings stand out. Add smooth transitions, playful animations, or interactive elements that make your digital postcards more immersive and engaging. Instead of a simple image, send a vibrant, living message that captures emotions in a way traditional cards never could.</p>
            </div>
            <img src={Feature3}/>
          </div>
        </div>

        <a href="" className="link-direction"><span>Start Designing!</span><svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 512 512" id="rightarrow"><path d="m322.7 128.4 100.3 105c6 5.8 9 13.7 9 22.4s-3 16.5-9 22.4L322.7 383.6c-11.9 12.5-31.3 12.5-43.2 0-11.9-12.5-11.9-32.7 0-45.2l48.2-50.4h-217c-17 0-30.7-14.3-30.7-32s13.7-32 30.6-32h217l-48.2-50.4c-11.9-12.5-11.9-32.7 0-45.2 12-12.5 31.3-12.5 43.3 0z" fill="#a3fe79" className="color000000 svgShape"></path></svg> </a>
      </div>

    <footer>
      <p><a href="https://github.com/TRAVELLER00012" target="_blank">Daksh Kumar</a></p>
      <p><a href="#home">Lumi Card</a></p>
    </footer>
    </>
  )
}

export default App