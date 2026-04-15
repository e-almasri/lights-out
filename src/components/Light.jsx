import { useState } from "react";
import "../App.css";


function Light(){
    const [value, setValue] = useState(false);
    
    function handleClick(){
        setValue(prev => !prev);
    }

    return (
        <button className={`light ${value ? "light-on" : "light-off"}`} onClick={handleClick}>{value? "ON" : "OFF"}</button>
    );
}

export default Light;
