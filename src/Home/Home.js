import '../Home/Home.scss';
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
      <img src={`${process.env.PUBLIC_URL}/logo_home.png`}></img>
      <div className="home-buttons">
        <NavLink to="/about">LEARN MORE ABOUT ME</NavLink>
        <NavLink to="/work">SEE MORE OF MY WORK</NavLink>
      </div>
    </div>
  );
}

export default Home;