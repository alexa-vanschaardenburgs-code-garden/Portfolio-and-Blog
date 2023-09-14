import '../Home/Home.scss';
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
      <img className="home-logo" src={`${process.env.PUBLIC_URL}/logo_home.png`}/>
      <div className="home-buttons">
        <NavLink className="button home-button" to="/about-me">LEARN MORE ABOUT ME</NavLink>
        <NavLink className="button home-button" to="/work">SEE MORE OF MY WORK</NavLink>
      </div>
    </div>
  );
}

export default Home;