import React from 'react'
import ReactDOM from 'react-dom';
import Note from './Note';
import {useState} from "react"
import AddIcon from '@mui/icons-material/Add';
import BatteryCharging20Icon from '@mui/icons-material/BatteryCharging20';

// Implement the add note functionality
// create a constant that keeps tract of the title and content
// Pass the new note back to the app
// Add new note to an array
export default function Form(props) {
    const [note , setNote] = useState({
        title: "",
        content: ""
    });
    

    function handleChange (e) {
        const {name , value} = e.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name] : value
            }
        })

    }
    function handleSubmit (e) {

        props.onAdd()
        e.preventDefault()

    }
  return (
    <div>
        <form>
        <input onChange={handleChange} className='txt' name="title" placeholder='title' value={note.title}></input>
     <textarea onChange={handleChange} id="content" name="content" rows="6" cols="70" placeholder='Take a note....' value={note.content}></textarea>
     <button onClick ={handleSubmit}type="submit" ><AddIcon /></button><br></br>
     <textarea id ="delete" name='delete' row="4" cols="40"></textarea>
     <button variant="contained" type="submit"><BatteryCharging20Icon/></button>
     </form>
     
    </div>
  )
}
