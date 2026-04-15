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
      <Grid lights={lights} handleClick={handleClick}></Grid>
      <button onClick={undo}>undo</button>
      <p>{checkWin(lights) ? "You win!" : "Moves: " + count}</p>
      <button onClick={newGame}>new Game</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

export default Game;
