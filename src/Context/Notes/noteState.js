
import { useContext, useState } from 'react';
import NoteContext from './notecontex';

const NoteState = (props) => {
  const [notes, setnotes] = useState([]);
  const host = "http://localhost:5000";

  //fetch all notes
  const fetchnotes=async()=>{
    const url = `${host}/api/note/fetchnotes`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "auth-tocken":`${localStorage.getItem('tocken')}`
      }
    });
    const data=await response.json();
    setnotes(data);
    // console.log(data); 
  }

  //addnote
  const addnote = async (title, description, tags) => {
    // console.log(title+"  "+description);
    const url = `${host}/api/note/addnote`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "auth-tocken":`${localStorage.getItem('tocken')}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({title,description,tags}) // body data type must match "Content-Type" header
    });
    const note = await response.json();
    // console.log(note);
  }

  //deletenote
  const deleteNote = async(id) => {
    const url = `${host}/api/note/deletenote/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "auth-tocken":`${localStorage.getItem('tocken')}`
      }
    });
    //logic to delete node
    // console.log(id);
    const newnotes = notes.filter((note) => { return note._id !== id });
    setnotes(newnotes);
  }

  //update note
  const updateNote = async (id, title, description, tags) => {
    //AI call
    const url = `${host}/api/note/updatenote/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "auth-tocken":`${localStorage.getItem('tocken')}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title:title, description:description, tags:tags }) // body data type must match "Content-Type" header
    });
    // const json = response.json();
  }
  
  

  return (
    <>
      <NoteContext.Provider value={{ notes, setnotes,fetchnotes, addnote, deleteNote, updateNote }}>
        {props.children}
      </NoteContext.Provider>
    </>
  )
}


export default NoteState;
