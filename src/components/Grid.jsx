import { useState } from "react";
import Light from "./Light";

function Grid() {
  const [lights, setLights] = useState(Array(25).fill(false));
  const [count, setCount] = useState(0);

  function handleClick(index) {
    // if (checkWin(lights)) {
    //   return;
    // }
    let newLights = lights.slice();
    newLights[index] = !newLights[index];
    toggleAdjacent(index).forEach((element) => {
      newLights[element] = !newLights[element];
    });
    setLights(newLights);
    setCount(count + 1);
  }

  function toggleAdjacent(index) {
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
    return adjacentIndices;
  }

  function checkWin(lights) {
    return lights.every((value) => value === false);
  }

  return (
    <>
      <div className="grid">
        {lights.map((value, index) => (
          <Light
            key={index}
            value={value}
            onLightClick={() => handleClick(index)}
          />
        ))}
      </div>
      <p>
        {checkWin(lights) ? "You win!" : "Moves: " + count}
      </p>
    </>
  );
}

export default Grid;
