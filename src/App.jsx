import { useEffect, useState } from "react";
import "./App.css";
import getRandomArr from "./components/get-random-arr";
import randomizeArray from "./components/randomizeArr";
import GameBoard from "./components/game-board";
import HasWon from "./components/has-won";

function App() {
  const [hasWon, setHasWon] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [score, setScore] = useState(0);
  const [dataVersion, setDataVersion] = useState(0);
  const [selected, setSelected] = useState(new Set());

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
  }, [hasWon]);

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
    setDataVersion(prevData => prevData + 1)
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
  const changeWonStatus = () => {
    setHasWon(!hasWon);
    setScore(0);
  };
  return (
    <div className="app">
      <h1 className="logo">Rick and Morty Memory Game</h1>
      {hasWon ? (
        <HasWon
          changeWonStatus={changeWonStatus}

        />
      ) : (
        data && (
          <GameBoard
            key={dataVersion}
            changeWonStatus={changeWonStatus}
            handleClick={handleClick}
            score={score}
            data={data}
          />
        )
      )}
    </div>
  );
}

export default App;


