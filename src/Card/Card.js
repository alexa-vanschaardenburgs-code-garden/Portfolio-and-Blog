import '../Card/Card.scss';

function Card() {
  return (
    <div>
      <p>Card</p>
      <img className="flower-img" id="flower-3" src={`${process.env.PUBLIC_URL}/flower_3.png`} />
    </div>
  );
}

export default Card;