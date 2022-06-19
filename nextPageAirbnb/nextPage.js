import React from "react";
import { FaGlobeAmericas } from 'react-icons/fa';
import Fuji from "./fujiCard";
import CardsEl from "./arrayCards";
import './nextPageCss.css';



function TopBar(props){
return (
    <div className={props.darkMode?"topBarDark":"topBar"}>
            <div className="totalTopBar">
            <p className="globe1"><FaGlobeAmericas /></p>
            <h4>My Travel Journal</h4>   
            </div>

            <div className={props.darkMode ? "nextPageSwitchDark" : 'nextPageSwitch'}>Select Mode</div>
              <div className={props.darkMode ? "nextPageToggleSliderCircleDark" : "nextPageToggleSliderCircle"} onClick={props.toggleDarkMode}>
                  <div className={props.darkMode ? "nextPageToggleSliderCircle2Dark" : "nextPageToggleSliderCircle2"}></div>
              </div>
    </div>  
        )
    }

//----------------MainComp-----/////////////////
function Cards(){

    let arrayCardsEl= CardsEl.map((card)=>{
        return (
            <Fuji
            image= {card.image}
            country={card.country}
            experience= {card.experience}
            date={card.date}
            description={card.description}   
            />
    )
    })
    return(
        <div>{arrayCardsEl}</div>
    )
}

export default function NextPage(props) {

     

    return (
      <div className={props.darkMode?"nextPageBodyDark" : "nextPageBody"}>
          <TopBar
            toggleDarkMode={props.toggleDarkMode}
            darkMode={props.darkMode}
          />
          <Cards
            darkMode={props.darkMode}
          />
      </div>
      
    );
  }