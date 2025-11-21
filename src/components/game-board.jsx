import "./../styles/game-board.css";
import getRandomArr from "./get-random-arr";
import randomizeArray from "./randomizeArr";
import { useState, useEffect } from "react";
import Card from "./card";
import HasWon from "./has-won";

export default function GameBoard({ changeWonStatus }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [selected, setSelected] = useState(new Set());

  if (score > highScore) setHighScore(score);
  if (score == 12) changeWonStatus();

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://rickandmortyapi.com/api/character/";
      const arr = getRandomArr();
      try {
        const response = await fetch(url + arr);
        if (!response.ok) throw new Error("Server Error");
        const result = await response.json();
        setData(result);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (loading) {
    return (
      <div className="loading">
        <div className="loader"></div>
      </div>
    );
  }

  function handleClick(e) {
    let currId = 0;
    if (e.target.id) currId = e.target.id;
    else currId = e.target.parentElement.id;
    if (selected.has(currId)) {
      setScore(0);
      setSelected(new Set());
    } else {
      const newSet = new Set(selected);
      newSet.add(currId);
      setScore(score + 1);
      setSelected(newSet);
      const newData = randomizeArray(data);
      setData(newData);
    }
  }
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
