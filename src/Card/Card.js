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
    <div className="card-view">
      <div className="preview-img">
      <img className="project-gif" src={`${process.env.PUBLIC_URL}${project.gif}`} />
      </div>
      <div className="project-preview">
        <h2>{project.name}</h2>
        <p>{project["breif_summary"]}</p>
        {project.highlights.map(highlight => createBullets(highlight))}
        <NavLink to={'/'+project.id}>MORE DETAILS</NavLink>
      </div>
    </div>
  );
}

export default Card;