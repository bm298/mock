import React from "react";
import redoAirbnbProps from "../redoAirbnb/redoAirbnbProps";

export default function Main (props){
        return (
        <h4 className={props.isHeld?"h4-true":"h4-false"} onClick={props.diceClick}>{props.value}</h4>
        
        )

}