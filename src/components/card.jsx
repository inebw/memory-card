import "./../styles/card.css";

export default function Card({ name, image, id, handleClick }) {
  return (
    <div className="card" id={id} onClick={handleClick}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}
