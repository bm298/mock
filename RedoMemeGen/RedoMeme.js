import React from "react";
import Main from "./SideTenzies";
// import dataMemesRedo from "./dataMemesRedo";
//---------------Beg of Tenzies--------------------
export default function Redo() {
  
  const [dice, setDice]= React.useState(setPage())

  const [tenzies, setTenzies]= React.useState(false)
  
  React.useEffect(()=> {
    const allHeld= dice.every((die) => die.isHeld )
    //.every only returns boolean (true or false) doesnt work for actual 
    //numbers/values
    const allSameVal= dice.every(die =>{
    return(die.value === dice[1].value? dice[1].value : "")
    } )
    if (allHeld && allSameVal){
      setTenzies(true)
    }
  }, [dice])

  function setPage(){
    let sumArray=[]
    for (let i=0; i<10; i++){
    sumArray.push({
      value:Math.floor((Math.random())*7),
      isHeld: false,
      id: i
    })
    } 
    return sumArray
}

// const numbers= [1,2,3,4,5]
// const res= numbers.every((item) => {
//   return item <0
// })
// function isPositive(item){
//   return item < 0
// }
// console.log(res)

function Roll(){
 setDice(prevDice => prevDice.map ((eachDie) => {
   //console.log(eachDie)
   return eachDie.isHeld?
   {...eachDie,value: eachDie.value} : 
   {...eachDie, value:Math.floor((Math.random())*7)}
 } ))
}

function diceClick(id){
  setDice(prevDice => prevDice.map ((eachDice) => {
      return eachDice.id === id ? 
      {...eachDice, isHeld: !eachDice.isHeld} :
       eachDice
    }) )
  }

const diceElements = dice.map(die => {
  //console.log(die, die.id)
  return (
  <Main   
  id= {die.id}
  value={die.value} 
  isHeld={die.isHeld} 
  diceClick = {tenzies? "": () => diceClick(die.id)}
  />)
} )

    return (
      <div>
        <main>
        <h1>Play Tenzies!</h1>
      <div className="container">
         {diceElements}
      </div>
     {tenzies? <p>You Won!</p> : <button onClick={Roll} className={tenzies?"button-true":
      "button-false"}>Roll Again</button> } 
  </main>
      </div>
    );
  }

//---------------End of Tenzies--------------------


//---------------Beg of actual REDOmeme--------------------

// function Header (){
//     return (
//       <div className="nav">
//         <h2>Meme Gen</h2>
//         <h4>React Course Project</h4>
//       </div>
//     )
// }

// function Forms(){

//    function handleClick(){
//      let apiCall= dataMemesRedo.data.memes
//      let Random= Math.floor(Math.random()*apiCall.length)
//      console.log(apiCall[Random].url)    
//      }

     
//   return (
//     <div className="formContainer">
//       <div className="formFields">
//         <input type="text"></input>
//         <input type="text"></input>
//       </div>
//       <button onClick={handleClick}>Get a new meme image</button>
//     </div>
//   )
// }

// function Img (){
//   return <h3>Hey djsal!</h3>
// }

// export default function Redo() {
//     return (
//       <div>
//           <Header />
//           <Forms />
//       </div>
//     );
//   }
//-------------------End of actual redoMeme------------------------------------------

//////////////////Example of form wid changing state inside of it --------------------------------------
//   export default function Form() {
    
//     const[formData, setFormData]= React.useState(
//         {firstName:"", lastName: ""}
//     )
    
//     console.log(formData)
    
//     // function handleChange(){
//     //     setFormData(prevFormData => { 
//     //         return {
//     //             ...formData,
//     //             [event.target.name] : event.target.value
//     //         }
//     //      })
//     // }
    
//     return (
//         <form>
//             <input
//             type="text"
//             placeholder="First Name"
//             name="firstName"
//             onChange= {(e) => setFormData({...formData,[e.target.name] : e.target.value}) }
//             />
            
//             <input
//             type="text"
//             placeholder="Last Name"
//             name="lastName"
//             onChange= {(e) => setFormData({...formData,[e.target.name] : e.target.value}) }
//             />
        
//         </form>
//     )
// }
// Form example i done from scratch^^...u can either put the function inside wid da onchange or on the outside like a normal function