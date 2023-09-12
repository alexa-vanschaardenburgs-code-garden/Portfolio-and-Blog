import '../Nav/Nav.scss';
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
      <NavLink className="nav-logo" to="/"><img className="nav-logo" src={`${process.env.PUBLIC_URL}/logo_nav.png`}/></NavLink>
      <button className="menu-button"><span className="material-symbols-rounded menu-button">menu</span></button>
    </div>
  );
}

export default Nav;