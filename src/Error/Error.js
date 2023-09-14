import '../Error/Error.scss';
import { NavLink } from 'react-router-dom'

function Error() {
  return (
    <div className='error'>
      <h1>Oops! The page you are looking for does not exist.</h1>
      <NavLink to="/" className="button">CLICK TO GO HOME</NavLink>
    </div>
  );
}

export default Error;