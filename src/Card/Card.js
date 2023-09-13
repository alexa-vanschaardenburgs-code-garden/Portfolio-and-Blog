import '../Card/Card.scss';

function Card({ project }) {
  return (
    <div>
      <p>Card</p>
      <div className="preview-img">
      <img className="preview-img" src={`${process.env.PUBLIC_URL}${project.gif}`} />
      </div>
    </div>
  );
}

export default Card;