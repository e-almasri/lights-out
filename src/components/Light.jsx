import { useState } from "react";
import "../App.css";


function Light({value, onLightClick}) {

    return (
        <button className={`light ${value ? "light-on" : "light-off"}`} onClick={onLightClick}>{value? "ON" : "OFF"}</button>
    );
}

export default Light;
