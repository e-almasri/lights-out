// represents a single light tile in the board
function Light({value, onLightClick}) {

    return (
        <button className={`light ${value ? "light-on" : "light-off"}`} onClick={onLightClick}>{value? "ON" : "OFF"}</button>
    );
}

export default Light;
