import '../Nav/Nav.scss';
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Nav() {

  const [navExpanded, setNavExpanded] = useState(false)

  const displayNavButtons = () => {
    console.log("click heard")
    return (
      <>
        <p>wheeeeee!</p>
      </>
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