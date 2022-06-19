//At the end of the css you've got to copy and paste it in to an "airbnb2.css" file so u can reuse app.css
import React from 'react';
import logo1 from './airbnblogo.png';
import backgroundimg from './background.jpg';
import maldives from './maldives.jpg';
import Cardairbnb2 from './cardairbnb2';
// import face1 from '../public/publicimages/face1.jfif';
// import star1 from './publicimages/star-removebg.png';
import data from './data';
import NextPage from '../nextPageAirbnb/nextPage';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { FaSearch} from 'react-icons/fa';
import { HiMenu} from 'react-icons/hi';

//----------------------------Beginning of Header-----------
function Header(props){

      return(
      <header>
           <nav className="nav">
              <img src= {logo1} className="logo1" alt="logo1"></img>
              <div className='searchBar'>
                    <FaSearch className='fafafa'/>
                    <input type="text" placeholder="Search..." className={props.darkMode ? "searchDark" : "search"}/>
              </div>
              <div className={props.darkMode ? "switchDark" : 'switch'}>Select Mode</div>
              <div className={props.darkMode ? "toggleSliderCircleDark" : "toggleSliderCircle"} onClick={props.toggleDarkMode}>
                  <div className={props.darkMode ? "toggleSliderCircle2Dark" : "toggleSliderCircle2"}></div>
              </div>
           </nav>
      </header>
      )
  } 
  //---------------------------Background-----------------
  function Background(){
      return(
      <div className="background">
            <img src= {maldives} className="backgroundimg" alt="logo1"></img>
            <h1 className='txtOverlay'>Your Dream Vacation Awaits...</h1>
      </div>
      )
  } 
  
  //----------------------------Online Experiences----------------
  function OnlineEx(){
      return(
      <div className="OnlineEx">
          <h3>Online Experiences</h3>
          <p>Join unique experiences with a one-of-a-kind host, all without leaving home.</p>
      </div>
      )
  } 
  //----------------------------Cardcomp-----------------
function CardEl(){

      let dataEl = data.map(datas => {
            return (
                  <div>
                <Cardairbnb2
                    face1={datas.face1}
                    star1={datas.star1}
                    rating={datas.rating}
                    country={datas.country}
                    title={datas.title}
                    price={datas.price}
                />
                </div>
            )
        })

//   const [squares, setSquares] = React.useState(boxes)
//   const squareElements = squares.map(square => (//so map over the array squares (then for each square named "square" i want to render a div named box etc...)
//     <div className="box" key={square.id}></div>
//   ))

        return (
            <div className='joint'>
                {dataEl}
            </div>
        )
    } 
  //----------------------------Where Ive travelled?-----------------
  function Home(props){
    return(
    <div className="homeAirbnb2">
       <Link to="/travel"> 
       <button className= {props.darkMode ? "darkTravelBtn" : "travelBtn"}>Want to see where I've travelled?</button>
       </Link>
    </div>
    )
} 

 
  //----------------------------Footer-----------------
function Footer(props){
    return (
    <div>
        <ul>
        <HiMenu />
        <li className={props.darkMode ? "liDark" : "liLight"}>© 2022 Bilal Musa, Inc.</li>
        <a href='/' className={props.darkMode ? "liDark" : "liLight"}><li>Privacy</li></a>
        <a href='/' className={props.darkMode ? "liDark" : "liLight"}><li>Sitemap</li></a>
        <a href='/' className={props.darkMode ? "liDark" : "liLight"}><li>Terms</li></a>
        <a href='/' className={props.darkMode ? "liDark" : "liLight"}><li>Contact Us</li></a>
        </ul>
    </div>
    )
} 


  //----------------------------Render Total-----------------

  
  export default function airbnb2(props) {

    return (
    <div className={props.darkMode ? "bodyDark" : "body"}>
        <div>
            <Header
                toggleDarkMode={props.toggleDarkMode}
                darkMode={props.darkMode}
            />
        </div>
        <div className='container2'>
            <Background />
            <OnlineEx />
            <CardEl />
            <Home
            darkMode={props.darkMode}
            />
        </div>
        <div className={props.darkMode ? "footerDark" : "footer"}>
            <Footer
            darkMode={props.darkMode}
            />
        </div>
    </div>
    );
  }
