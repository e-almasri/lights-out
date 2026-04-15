import Light from "./Light";

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
