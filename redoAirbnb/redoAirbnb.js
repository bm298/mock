import React from 'react';
import RedoAirbnbProps from './redoAirbnbProps';
import Details from './diffCards';


function CardComponents(){

    let DetailsEl=Details.map((Detail) =>{    
    return(
        <RedoAirbnbProps             
            face2= {Detail.face2}
            starRating= {Detail.starRating}
            reviewTotal= {Detail.reviewTotal}
            country= {Detail.country}
            description= {Detail.description}
            price={Detail.price}
        />
    )})
    //{props.setup && <h3>{props.setup}</h3>}
    //basically means is if props.setups===true
    //then render >>everything on the right

    //As example  
    // function toggle(id) {
    //     setSquares(prevSquare => {
    //         return prevSquare.map((eachPrevSquares)=>{
    //             return eachPrevSquares.id===id ? {...eachPrevSquares, on: !eachPrevSquares.on} : {...eachPrevSquares}
    //         })
    //     })
    //  }

    // //when you use the ( bracket 
    // it basically means return without typing return
    return (
        <div className='joint'>
            {DetailsEl}
        </div>
    )
}


export default function redoAirbnb() {
    return (
      <div>
        <CardComponents />
      </div>
      
    );
  }

//Example Code below for if u cant use ternaries
//just go back to using normal if/else, but as ternaries
//can be nested in the return of the element the if else cant 
//and will need to be above the return then called in
//in thie example {somevar}
  //function App() {
//     let someVar
//     if () {
//         someVar = <SomeJSX />
//     } else if() {
//         ...
//     } else {
//         ...
//     }
//     return (
//         <div>{someVar}</div>
//     )
// }
    // function updateNote(text) {
    //     setNotes(oldNotes => {
    //        const newArray= []
    //         for (let i=0; i<oldNotes.length; i++){
    //         (currentNoteId===oldNotes[i].id ? newArray.unshift({...oldNotes[i], body:text}) : newArray.push(oldNotes[i]) )
    //         } return newArray 
    //     })
    //     }
    
    // function updateNote(text) {
    //     setNotes(prevNotes => {
    //         const newArray= []
    //         prevNotes.map((prevNote) => {
    //             return (currentNoteId===prevNote.id ? newArray.unshift({...prevNote, body:text}) : newArray.push(prevNote)
    //             ) 
    //         })
    //    return newArray })
    //     } 

            // setNotes(oldNotes => {
        //     let deletedArray= []
        //     for (let i=0; i<oldNotes.length; i++){
        //        // console.log(noteId)
        //         if (noteId === oldNotes[i].id){
        //         }
        //         else {
        //             deletedArray.push(oldNotes[i])
        //         }
        //     }
        //     return deletedArray
        // })
        
    //     setNotes(oldNotes => {
    //         let deletedArray= []
    //         oldNotes.map(note => {
    //             return (noteId===note.id ? "" : deletedArray.push(note)
    //             )
    //      })
    //    return deletedArray})  
    //    }
// CAN ALSO USE .FILTER TO FILTER ITEMS BASED ON SOMETHING...
    // function deleteNote(event, noteId) {
    //     event.stopPropagation()
    //     setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
    // }
    /////---------------------------------Tenzies game 
    // function rollDice() {
    //   setDice(prevDice => prevDice.map (die => {
    //       return die.isHeld ? 
    //       {isHeld: !die.isHeld,...die}: {...die, value: Math.ceil(Math.random() * 6)}
    //   }))