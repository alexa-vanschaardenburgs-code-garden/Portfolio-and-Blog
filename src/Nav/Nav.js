import '../Nav/Nav.scss';
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Nav() {

  const [navExpanded, setNavExpanded] = useState(false)

  const displayNavButtons = () => {
    console.log("click heard")
    return (
      <div className='dropdown'>
        <button className="menu-button toggle-off" onClick={() => {setNavExpanded(!navExpanded)}}><span className="material-symbols-rounded menu-button">menu</span></button>
        <NavLink to="/" onClick={() => {setNavExpanded(!navExpanded)}} className="nav-location">HOME<img className="point-flower" src={`${process.env.PUBLIC_URL}/point-flower.png`} /></NavLink>
        <NavLink to="/about-me" onClick={() => {setNavExpanded(!navExpanded)}} className="nav-location">ABOUT ME<img className="point-flower" src={`${process.env.PUBLIC_URL}/point-flower.png`} /></NavLink>
        <NavLink to="work" onClick={() => {setNavExpanded(!navExpanded)}} className="nav-location">MY WORK<img className="point-flower" src={`${process.env.PUBLIC_URL}/point-flower.png`} /></NavLink>
        <NavLink to="/contact" onClick={() => {setNavExpanded(!navExpanded)}} className="nav-location">CONTACT<img className="point-flower" src={`${process.env.PUBLIC_URL}/point-flower.png`} /></NavLink>
      </div>
    )
  }

  return (
    <>
      <div className='nav'>
        <NavLink className="nav-logo" to="/"><img className="nav-logo" src={`${process.env.PUBLIC_URL}/logo_nav.png`}/></NavLink>
        <button className="menu-button" onClick={() => {setNavExpanded(!navExpanded)}}><span className="material-symbols-rounded menu-button">menu</span></button>
      </div>
      {navExpanded && displayNavButtons()}
    </>
  );
}

export default Nav;