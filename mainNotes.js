import React from "react";
import './mainNotesCss.css';
import { FaTrashAlt} from 'react-icons/fa';
import {AiFillEdit} from 'react-icons/ai';
import SideTasksCompleted from "./SideTasksCompleted";
import SidebarNotesEl from "./sidebarNotes";
import SideDeleteNotes from "./SideDeleteNotes";


export default function AddNote(){

    const [notes, setNotes] = React.useState([{
    id: 1,
    addTitle: "Generic" ,
    addText: "lorem ipsum",
    status: "completed"
}, {
    id: 2,
    addTitle: "Generic Generic" ,
    addText: "lorem ipsum",
    status: "not completed"
},{
    id: 3,
    addTitle: "Generic Title" ,
    addText: "lorem ipsum text",
    status: "not completed"
    }
]
)

    const [formData, setFormData] = React.useState(
        {addTitle: "", addText: ""}
    )

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function submitForm(event){
        event.preventDefault()
        const newFormData= {
            id: notes.length+1,
            addTitle: formData.addTitle,
            addText: formData.addText,
            status: "new"
        }

        const newFormDatas= [...notes, newFormData]
        setNotes(newFormDatas)
        toggleShown()
        setFormData("")
    }

    const [isShown, setIsShown] = React.useState(false)
    const [deleteBtn, setDeleteBtn]= React.useState(false)

    function toggleShown(){
        setIsShown(prevShown => !prevShown)
    }

    function editNotes(currentNoteId){
        setIsShown(true)
        // setFormData(oldNotes=>{
        //     for (let i=0; i<oldNotes.length; i++){
        //         if (currentNoteId===oldNotes[i].id){
        //             return ({...oldNotes[i], addTitle:"nearly there..."})
        //         }
        //         else {console.log("hello")}
        //     }
        // })
    }
    

    function closeSideBarNotes(){
        setIsShown(false)
    }

    function handleChangeDeleteBtn(){
        setDeleteBtn(true)
    }

    function handleChangeDeleteBtnNo(){
        setDeleteBtn(false)
    }

    function handleChangeDeleteBtnYes(textId){
        console.log(textId)
        const newNotes= [...notes]
        const position= notes.findIndex((text) => text.id === textId)
        newNotes.splice(position, 1)
        setNotes(newNotes)
        setDeleteBtn(false)
    }

    console.log(notes)  

    return(
    <div className="container">
        <SideTasksCompleted notes={notes} />
        <div className="tableContainer">
            <table cellPadding="5rem">
                <thead>
                    <tr>
                        <th> <input type="checkbox"/> ID </th>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody> 
                    {notes.map((eachNote) => {
                        return(
                    <tr>
                        <td><input type="checkbox" onClick={handleChangeDeleteBtn}/> {eachNote.id} </td>
                        <td>{eachNote.addTitle}</td>
                        <td>{eachNote.addText}</td>
                        <td>{eachNote.status}</td>
                        <td><button onClick={editNotes}><AiFillEdit /></button> <button onClick={handleChangeDeleteBtn}><FaTrashAlt /></button></td>
                    </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="addBtn">
                <button className="activeAddBtn" onClick={toggleShown}>{isShown?"Hide Note":"Add Note"}</button>
             </div>
            <div className="alertComp">
                <div className="alertComp1">
                    {isShown && <SidebarNotesEl 
                                close={closeSideBarNotes} 
                                handleChange= {handleChange} 
                                submitForm={submitForm}
                                addTitle={formData.addTitle}
                                addText={formData.addText}
                                />} 
                </div>
                {deleteBtn && <SideDeleteNotes closeNoBtn={handleChangeDeleteBtnNo} openYesBtn={handleChangeDeleteBtnYes} />}
            </div>
        </div>
    </div>
    )
}

