import '../About/About.scss';
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <div className='about'>
      <div className='header'>
        <img className="flower-img" id="flower-1" src={`${process.env.PUBLIC_URL}/flower_1.png`} />
        <h1>HI, I'M ALEXA VANSCHAARDENBURG</h1>
        <h2>FRONT END WEB DEVELOPER</h2>
        <img className="flower-img" id="flower-2" src={`${process.env.PUBLIC_URL}/flower_2.png`} />
        </div>
      <div className="about-info">
        <img className="headshot" src={`${process.env.PUBLIC_URL}/headshot.jpeg`} />
        <div className="bio-and-buttons">
          <p className='bio'>Hi, I'm Alexa, a front-end web developer driven by my passion for design and accessibility. My goal is to craft products that make a positive impact on our world. I firmly believe that innovation thrives in inclusive environments, where diverse voices are empowered to contribute. My work is rooted in community-driven problem-solving and collaborative efforts.</p>
          <div className='about-buttons'>
            <NavLink className='button about-button' to="/contact">CONTACT ME</NavLink>
            <a className='button about-button' href={`${process.env.PUBLIC_URL}/A_VanSchaardenburg_Resume.pdf`}>RESUME</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;