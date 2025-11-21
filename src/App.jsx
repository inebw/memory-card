import { useState } from "react";
import "./App.css";
import GameBoard from "./components/game-board";
import HasWon from "./components/has-won";

function App() {
  const [hasWon, setHasWon] = useState(false);
  const changeWonStatus = () => {
    setHasWon(!hasWon);
  };
  return (
    <div className="app">
      <h1 className="logo">Rick and Morty Memory Game</h1>
      {hasWon ? (
        <HasWon changeWonStatus={changeWonStatus} />
      ) : (
        <GameBoard changeWonStatus={changeWonStatus} />
      )}
    </div>
  );
}

export default App;
