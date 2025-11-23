import "./../styles/game-board.css";

import { useState, useEffect } from "react";
import Card from "./card";

export default function GameBoard({
  changeWonStatus,
  handleClick,
  score,
  data,
}) {
  const [highScore, setHighScore] = useState(0);

  if (score > highScore) setHighScore(score);
  if (score == 12) changeWonStatus();

  return (
    <div className="game-board">
      <div className="score-card">
        <h2>Score: {score}</h2>
        <h2>Remaining: {12 - score}</h2>
        <h2>High Score: {highScore}</h2>
      </div>
      <div className="cards">
        {data &&
          data.map((character) => (
            <Card
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              handleClick={handleClick}
            />
          ))}
      </div>
    </div>
  );
}
