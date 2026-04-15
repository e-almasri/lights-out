import { useState } from "react";
import Grid from "./Grid";

function Game() {
  const [game, setGame] = useState([initLights(Array(25).fill(false))]);
  const [count, setCount] = useState(0);
  const lights = game[game.length - 1];

  function undo() {
    if (game.length === 1) {
      return;
    }
    const newGame = game.slice();
    newGame.pop();
    setGame(newGame);
    setCount(count - 1);
  }

  function reset() {
    const newGame = [game[0]];
    setGame(newGame);
    setCount(0);
  }

  function newGame() {
    const newGame = [initLights(Array(25).fill(false))];
    setGame(newGame);
    setCount(0);
  }

  function handleClick(index) {
    if (checkWin(lights)) {
      return;
    }
    let newLights = toggleAdjacent(lights, index);
    setGame((prev) => [...prev, newLights]);
    setCount(count + 1);
  }

  function toggleAdjacent(lights, index) {
    let newLights = lights.slice();
    newLights[index] = !newLights[index];
    const adjacentIndices = [];
    if (index % 5 > 0) {
      adjacentIndices.push(index - 1);
    }
    if (index % 5 < 4) {
      adjacentIndices.push(index + 1);
    }
    if (index > 4) {
      adjacentIndices.push(index - 5);
    }
    if (index < 20) {
      adjacentIndices.push(index + 5);
    }
    adjacentIndices.forEach((element) => {
      newLights[element] = !newLights[element];
    });
    return newLights;
  }

  function initLights(lights) {
    let newLights = lights.slice();
    for (let i = 0; i < lights.length; i++) {
      if (Math.random() < 0.5) {
        newLights = toggleAdjacent(newLights, i);
      }
    }
    return newLights;
  }

  function checkWin(lights) {
    return lights.every((value) => value === false);
  }

  return (
    <>
      <div className="header">
        <h1>Lights Out</h1>
        <p>
          Click a light to toggle it and the adjacent lights. Turn off all the
          lights to win!
        </p>
      </div>

      <Grid lights={lights} handleClick={handleClick}></Grid>

      <p className="moves">
        {checkWin(lights) ? "You win!" : "Moves: " + count}
      </p>
      <div className="controls">
        <button className="btn" onClick={undo}>
          Move back
        </button>
        <button className="btn" onClick={newGame}>
          New Game
        </button>
        <button className="btn" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
}

export default Game;
