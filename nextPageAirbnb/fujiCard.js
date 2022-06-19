import React from "react"
import { FaMapPin } from 'react-icons/fa';

export default function Fuji(props){
    return (
    <div className="compact">
        <img className="travelImg" src={`../publicimages/${props.image}`}></img>
        <div className="allInfo">
            <div className="maps">
            <span className="pin"><FaMapPin /> </span>
            <p className="country">{props.country}</p>
            </div>
            <h1>{props.experience}</h1>
            <strong><p>{props.date}</p></strong>
            <p>{props.description}</p>
        </div>
    </div>
    
    )
}
