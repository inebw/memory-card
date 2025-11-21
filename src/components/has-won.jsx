import "./../styles/has-won.css"

export default function HasWon({ changeWonStatus }) {
  return (
    <div className="won">
      <h2>Yipee You Won</h2>
      <button onClick={() => changeWonStatus()}>Play Again</button>
    </div>
  );
}
