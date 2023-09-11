import '../Nav/Nav.scss';

function Nav() {
  return (
    <div className='nav'>
      <img className="nav-logo" src={`${process.env.PUBLIC_URL}/logo_nav.png`}/>
      <button className="menu-button"><span className="material-symbols-rounded menu-button">menu</span></button>
    </div>
  );
}

export default Nav;