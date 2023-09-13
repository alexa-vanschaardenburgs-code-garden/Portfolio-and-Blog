import '../Details/Details.scss';
import PageHeader from '../PageHeader/PageHeader.js';
import projects from '../data/projects.json';
import { useParams } from 'react-router-dom'

function Details() {

  let id = useParams()
  let project = projects.find(project => project.id === id.id)

  return (
    <div className="details">
      <PageHeader page={project.name}/>
      <img className="project-gif" id="details-gif" src={`${process.env.PUBLIC_URL}${project.gif}`} />
      <div className="links-container">
        <button className="button detail-button" to="/about-me">LEARN MORE ABOUT ME</button>
        <button className="button detail-button" to="/work">SEE MORE OF MY WORK</button>
      </div>
      <div className="detail-section-header">
        <img className="point-flower" src={`${process.env.PUBLIC_URL}/point-flower.png`} />
        <h2>CONTEXT</h2>
        <img className="point-flower" src={`${process.env.PUBLIC_URL}/point-flower.png`} />
      </div>
      <p>{project.context}</p>
      <div className="detail-section-header">
        <img className="point-flower" src={`${process.env.PUBLIC_URL}/point-flower.png`} />
        <h2>TECH STACK</h2>
        <img className="point-flower" src={`${process.env.PUBLIC_URL}/point-flower.png`} />
      </div>
      <p>{project.techs.join(" | ")}</p>
      <div className="detail-section-header">
        <img className="point-flower" src={`${process.env.PUBLIC_URL}/point-flower.png`} />
        <h2>SUMMARY</h2>
        <img className="point-flower" src={`${process.env.PUBLIC_URL}/point-flower.png`} />
      </div>
      <p>{project.summary}</p>
      <div className="detail-section-header">
        <img className="point-flower" src={`${process.env.PUBLIC_URL}/point-flower.png`} />
        <h2>PREVIEW</h2>
        <img className="point-flower" src={`${process.env.PUBLIC_URL}/point-flower.png`} />
      </div>
      <div className="detail-img-container">
        {project.imgs.map(img => <img className="detail-img" src={`${process.env.PUBLIC_URL}${img}`} />)}
      </div>
    </div>
  );
}

export default Details;