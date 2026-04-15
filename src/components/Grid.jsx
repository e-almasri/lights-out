import Light from "./Light";

// renders grid layout and passes click events to lights
function Grid({ lights, handleClick }) {
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
