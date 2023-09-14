import '../Work/Work.scss';
import PageHeader from '../PageHeader/PageHeader.js';
import Card from '../Card/Card.js';
import projects from '../data/projects.json';

function Work() {
  return (
    <div className="work">
      <PageHeader page={"MY WORK"}/>
      {projects.map(project => <Card project={project}/>)}
    </div>
  );
}

export default Work;

