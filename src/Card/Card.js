import '../Card/Card.scss';
import { NavLink } from 'react-router-dom';

function Card({ project }) {

  const createBullets = (words) => {
    return (
      <div className="bullet">
        <img className="point-flower" src={`${process.env.PUBLIC_URL}/point-flower.png`} />
        <p>{words}</p>
      </div>
    )
  }

  return (
    <NavLink className="card-view" >
      <div className="gif-container">
      <img className="project-gif" src={`${process.env.PUBLIC_URL}${project.gif}`} />
      </div>
      <div className="project-preview">
        <h2>{project.name}</h2>
        <p>{project["breif_summary"]}</p>
        {project.highlights.map(highlight => createBullets(highlight))}
        <p className="view-more-button" >MORE DETAILS...</p>
      </div>
    </NavLink>
  );
}

export default Card;