import React from "react";

export default function redoAirbnbProps(props){
    return(
        <div className='encapsulate'>
            <div className='imgBox'>
            <img src={`../publicimages/${props.face2}`} className="face2" alt="logo1"></img>
            </div>
            <div className='infoBox'>
                <p className='starRating'>{props.starRating}</p>
                <p className='reviewTotal'>({props.reviewTotal})</p>
                <p className='country'>{props.country}</p>
            </div>
            <p className='description'>{props.description}</p>
            <p className='price'>From £{props.price}/Person</p>
        </div>
    )
}