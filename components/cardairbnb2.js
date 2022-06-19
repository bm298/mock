import React from "react";
import { FaHeart} from 'react-icons/fa';


  export default function cardairbnb2(props) {

    const [darkMode, setDarkMode] = React.useState(false)
    
    function toggleHeart() {
        setDarkMode(prevMode => !prevMode)

    }
    return(
      <div className="CardComp">
          <div className="card">
            <div className="cardHeartOverlay">
              <img src={`../publicimages/${props.face1}`} className="cardimg" alt="cardimg"></img>
              <FaHeart className={darkMode ? "heartOverlayDark" : "heartOverlay"} onClick={toggleHeart}/>
            </div>
              <br/>
              <img src={`../publicimages/${props.star1}`} className="star" alt="star"></img>
              <span><b>{props.rating}, </b></span>
              <span><b>{props.country}</b></span>
              <p className="title">{props.title}</p>
              <p className="price"><b>From £{props.price}</b>/Person</p>
          </div>
          
      </div>  
      );
  }  

  // arrow functions---------
  // function sum(a,b){
  //   return a+b
  // }
  // Becomes
  // let sum2= (a,b)=>a+b

  // function randomNumber(){
  //   return Math.random
  // }
  // becomes
  // let randomNumber2= () => Math.random

  // document.addEventListener('click', function(){
  //   console.log('click')
  // })
  // becomes
  // document.addEventListener('click', () => console.log('click'))

  