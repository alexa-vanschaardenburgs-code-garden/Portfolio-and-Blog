import '../Details/Details.scss';
import PageHeader from '../PageHeader/PageHeader.js';
import projects from '../data/projects.json';
import { useParams } from 'react-router-dom'

function Details() {

  let id = useParams()
  let project = projects.find(project => project.id === id.id)

  const displaySectionHeader = (title) => {
    return (
      <div className="detail-section-header">
      <img className="point-flower" src={`${process.env.PUBLIC_URL}/point-flower.png`} />
      <h2>{title}</h2>
      <img className="point-flower" src={`${process.env.PUBLIC_URL}/point-flower.png`} />
    </div>
    )
  }

  return (
    <div className="details-container">
      <PageHeader page={project.name}/>
      <div className="details">
        <img className="project-gif" id="details-gif" src={`${process.env.PUBLIC_URL}${project.gif}`} />
        <div className="links-container">
          <a className="button detail-button" href={project["repo_link"]}>VIST REPO</a>
          <a className="button detail-button" href={project["deployed_link"]}>VISIT SITE</a>
        </div>
        {displaySectionHeader('CONTEXT')}
        <p>{project.context}</p>
        {displaySectionHeader('TECH STACK')}
        <p>{project.techs.join(" | ")}</p>
        {displaySectionHeader('SUMMARY')}
        <p>{project.summary}</p>
        {displaySectionHeader('STILL SHOTS')}
        <div className="detail-img-container">
          {project.imgs.map(img => <img className="detail-img" src={`${process.env.PUBLIC_URL}${img}`} />)}
        </div>
      </div>
    </div>
  );
}

export default Details;