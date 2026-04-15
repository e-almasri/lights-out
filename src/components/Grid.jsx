import { useState } from "react";
import Light from "./Light";

function Grid() {
  const [lights, setLights] = useState(Array(25).fill(false));
  function handleClick(index) {
    let newLights = lights.slice();
    newLights[index] = !newLights[index];
    toggleAdjacent(index).forEach((element) => {
      newLights[element] = !newLights[element];
    });
    setLights(newLights);
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

  return (
    <div className="grid">
      {lights.map((value, index) => (
        <Light
          key={index}
          value={value}
          onLightClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}

export default Grid;
