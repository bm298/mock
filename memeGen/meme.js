import React from 'react';
import DataMemes from './dataMemes';

//-------------------------Beginning of Header-----------
function Header(){
    return(
    <header>
         <nav className="nav">
             <h2>Meme Generator</h2>
             <p className='pReact'>React Course- Project 3</p>
         </nav>

    </header>
    )
} 
//----------------------Beginning of Input Fields-----------

function Input(){
    return(
        <div className='inputEl'>
            <input type="text" placeholder='First Name' className='fname'></input>
            <input type="text" placeholder='Last Name' className='lname'></input>
        </div>
    )
}

//----------------------New Image-------------------

function Image(){

    const [memeImage, setMemeImage] =React.useState("")//<<<Use state!!


    function getMemeImage(){
        const dataArray=DataMemes.data.memes
        const randomArray=Math.floor(Math.random() * dataArray.length)
        setMemeImage(dataArray[randomArray].url)  
    }

    return(
        <div className='newImage'>
            <button className='imgBtn' onClick={getMemeImage}>Get a new meme image</button>
            <img src={memeImage} className='memeImg' /> 
        </div>
    )
}
//i think import of <memedata /> shud go here sumwhere, function in a
//function
//-----------------------Just exmaple of onchange with forms etc...-------
// function Create(){
//     const[title, setTitle]= React.useState("")
//     const[author, setAuthor]= React.useState("")
//However if you need to refernce more than 4-5 consts^^, use scrimba way
// Forms state object (42) Meme
//     return (
//         <div className="create">
//             <h2>Add new Blog</h2>
//             <form>
//                 <label>Blog Title</label>
//                 <input type="text"
//                         required 
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                 >
//                 </input>
//                 <br/>
//                 <label>Blog Body</label>
//                 <textarea
//                     required
//                 >
//                 </textarea>
//                 <br/>
//             <label>Blog Author</label>
//             <select value={author}
//                     onChange={(e) => setAuthor(e.target.value)}>
//                 <option value="mario">Mario</option>
//                 <option value="Luigi">Luigi</option>
//             </select>
//             <br/>
//             <button>Save Blog</button>
//             <p>{title}</p>
//             <p>{author}</p>
//             </form>
//         </div>)}
// function handleChange(event) {
//     const {name, value, type, checked} = event.target
//     setFormData(prevFormData => {
//         return {
//             ...prevFormData,
//             [name]: type === "checkbox" ? checked : value
//         }
//     })
// }
// function handleChange(event) {
//     setFormData(prevFormData => {
//         return {
//             ...prevFormData,
//             [event.target.name]: event.target.value <<remember this way also 
//         }
//     })
// }
//If they have a checked box u can use the above^^^n destrcuture event,target
// function handleSubmit(event) {
//     event.preventDefault()
//     if(formData.password === formData.passwordConfirm) {
//         console.log("Successfully signed up")
//     } else {
//         console.log("Passwords do not match")
//     }
    
//     if(formData.joinedNewsletter && formData.password === formData.passwordConfirm) {
//         console.log("Thanks for signing up for our newsletter!")
//     }
// }
// how to use if/else/boolean to gt on page rendering of texts^^-just a reminder/example
//----------------------------Beginning of Export/Render Total-----------

export default function meme() {
    return (
      <div>
        <Header />
        <Input />
        <Image />
      </div>
      
    );
  }
//----------------------------TERNARY OPERATORS---------------------
// let greeting= person => {
//     let name= person ? person.name : `stranger`
//     return `Howdy! ${name}`
// }
// console.log (greeting({name:`alice`}))

// function getFee(isMember){
//     return (
//         isMember ? `$2.00` : `$10.00`
//     )
// }
// console.log (getFee())

// let getFee= isMember=>{
//     let membersID= isMember ? `2.00` : `10.00`
//     return `howdy ${membersID}`
// }
// console.log(getFee(false))

// let age= 26
// let beverage= (age>=21) ? "Beer" : "Juice"

// function suttin(){
// const isGoingOut = false
    
// return (
//     <div className="state">
//         <h1 className="state--title">Do I feel like going out tonight?</h1>
//         <div className="state--value">
//             <h1>{isGoingOut ? "Yes" : "No"}</h1>
//         </div>
//     </div>
// )
// }

// let age= 22
// let canSmoke= (age>=21) ? "You are old enough to smoke" : "not old enough SONNY!"

// function legalAge(canSmoke){
//     return (
//         canSmoke
//     )
// }
// console.log(legalAge(canSmoke))
// const [isGoingOut,setIsGoingOut]= React.useState(true)
//-----------------------------------------
// function clickHandle(){              
//     setIsGoingOut(prevValue => prevValue===true ? false : true)     
// }
//------This^^ is the same as this below, just written shorter
// const [isGoingOut,setIsGoingOut]= React.useState(true)
// function clickHandle(){              
//     setIsGoingOut(function (prevValue){
//      return (prevValue===true ? false : true)
//  })     
// }
//function clickHandle(){              
//    setIsGoingOut(prevValue => !prevValue)     
// }
//----------------OR THIS^^^USE THE !(NOT) PREVVALUE-------

//  return (
//      <div className="state">
//          <h1 className="state--title">Do I feel like going out tonight?</h1>
//          <div className="state--value" onClick={clickHandle}>
//              <h1>{isGoingOut ? "yes": "no"}</h1>
//          </div>
//      </div>
//  )
// }
// //----------------------USING...for prev values and concating with others----
// const [thingsArray, setThingsArray]= React.useState(["Thing 1", "Thing 2"])
    
//     function addItem() {
//         setThingsArray(prevVal => [...prevVal,`Thing  ${thingsArray.length+1}`] )
//     }

// const [contact, setContact] = React.useState({
//     firstName: "John",
//     lastName: "Doe",
//     phone: "+1 (719) 555-1212",
//     email: "itsmyrealname@example.com",
//     isFavorite: false
// })

// let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
// function toggleFavorite() {
//     setContact(prevContact => ({...prevContact ,isFavorite:!prevContact.isFavorite}) )
// }

   
// let styles= {
//     backgroundColor: props.id % 2==0 ? "red" : "blue"
// } 
//---------------------PASSING PROPS IN TO REACT.USESTATE-------
// export default function Box(props) {
    
    
//     const [boxState, setBoxState] = React.useState(props.on)
    
//     function boxClicked(){
//         setBoxState(prevBoxState => prevBoxState===true ? false : true)
//     }or u cud do !prevBoxState
//     const styles = {
//         backgroundColor: boxState ? "#222222" : "transparent"
//     }
    
//     return (
//         <div style={styles} className="box" onClick={boxClicked}></div>
//     )
// }

//-----------------Conditional Rendering-----------
// return (
//     <div>
//         {props.setup && <h3>{props.setup}</h3>}
//         {isShown && <p>{props.punchline}</p>}
// Code works ^^ as if is shown ===true then itll print {props.punchline}
// if isShown===false it wont even bother looking right so thatll be false as well
// thats why we can use this expression IN REACT to render the html portion 
//         <button onClick={toggleShown}>Show Punchline</button>
//         <hr />
//     </div>
//---------------------Just a note to myself on how to do this fully^^^--
// export default function Joke(props) {
//     const [isShown, setIsShown] = React.useState(false)
//     function toggleShown(){
//         setIsShown(prevShown => !prevShown)
//     }
//     return (
//         <div>
//             {props.setup && <h3>{props.setup}</h3>}
//             <p>{isShown===true ? props.punchline : null} </p>
//             <button onClick={toggleShown}>Show Punchline</button>
//             <hr />
//         </div>
//     )
// }
//--------Another example of using the conditional Rendering-----
// export default function App() {
//     const [messages, setMessages] = React.useState([])
//     return (
//         <div>
//             {messages.length > 0 && <h1>You have {messages.length} unread messages!</h1>}
//         </div>
//     )
// }
// //------Can also put a ternary operator inside a button etc------
// <button onClick={toggleShown}>{isShown===true ? "Hide" : "Show"} Punchline</button>
//{messages.length > 0 && <p> You have {messages.length} unread {messages.length===1 ? "message" : "messages"}</p>}
// Another example ^^^
//IF YOU NEED TO USE MORE THAN 2 CONDITIONS USE IF ELSE, EXAMPLE BELOW
// function App() {
//     let someVar
//     if () {
//         someVar = <SomeJSX />
//     } else if() {
//         ...
//     } else {
//         ...
//     } If Else needs to be outside the return not inside like you 
//      can do with the ternary and && symbols 
//     return (
//         <div>{someVar}</div>
//     )
// }
// //----------HOW TO USE THE "THIS" attribute-----
// <select id="mySelect" onchange="myFunction(this.value)">
//   <option value="Audi">Audi
//   <option value="BMW">BMW
//   <option value="Mercedes">Mercedes
//   <option value="Volvo">Volvo
// </select>

// <p>When you select a new car, a function is triggered which outputs the value of the selected car below</p>

// <p id="demo"></p>

// <script>
// function myFunction(x) <<this x is linked to the topthis.value as refernce {
//   x= document.getElementById("demo").innerHTML = "You selected: " + x;
// }
// </script>

// let person= {height: 200, weight: 85,eyeColor: "brown"}
// let {height,weight,eyeColor}=person
// function personAttr({height, weight, eyeColor}){
//     console.log(`my height is ${height} and weight is ${weight}`)
// }
// personAttr(person)
//----------------------Promises----------------------------
// 1)promise /the vechicle/go between of the promise
// 2)promise value - can you get tacos or not?
// 3)promise resolved? got the tacos
// 4)promise rejected? didnt get the tacos
// 5)success callback function -passed in to promise.then(<<SCF)
//      -because he got tacos- Set the table
// 6)failure callback function -passed in to promise.catch(<<F CF)
//      -because he didnt get the tacos- have to cook pasta 

// const items= [
//     {id:1, name: "bike", price: 120}
//     //{id:2,name: "football", price: 100},
//    // {id:3,name: "book", price: 90}
// ]

// const itemData= new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         if (items[0].id<=3){
//             resolve("premium items")
//         }
//         else {
//             reject("nuttin here")
//         }
//     }, 500);
// })

// itemData.then(()=>{
// console.log("working then baybee")
// // })
// React.useEffect(()=>{
//     localStorage.setItem('books', JSON.stringify(books))
// })


//-----------------await n async -------------
// The await function needs to be used inside an async function
// await basically waits for a promise to be fulfilled then runs whatever is needed after toHaveTextContent.
    /**
    useEffect takes a function as its parameter. If that function
    returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it
    automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect,
    you need to define the function separately inside of the callback
    function, as seen below:
    */
    // React.useEffect(() => {
    //     async function getMemes() {
    //         const res = await fetch("https://api.imgflip.com/get_memes")
    //         const data = await res.json()
    //         setAllMemes(data.data.memes)
    //     }
    //     getMemes()
    // }, [])
////-----------------------------------------------USING LOCAL STORAGE IN STATE-----////////////////////// 
//     //first time its rendered     
//     React.useEffect(()=> {
//         let info= localStorage.getItem('Notes_Change');
//         if (info) {
//             setNotes(JSON.parse(info))
//         }
//     }, [])
// //everytime its rendered after that 
//     React.useEffect(()=> {
//         localStorage.setItem('Notes_Change', JSON.stringify(notes))
//     }, [notes])