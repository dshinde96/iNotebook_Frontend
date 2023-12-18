import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import {useNavigate} from 'react-router-dom'
import noteContext from "../Context/Notes/notecontex";
const UpdateNote=()=>{
    const navigate=useNavigate();
    const {id}=useParams();

    const {notes,updateNote}=useContext(noteContext);
    const initilnote = notes.find((note) => note._id === id);
    const [note,setnote]=useState(initilnote);

    const handle_change=(event)=>{
        setnote({...note,[event.target.name]:event.target.value});
    }

    return(
        <>
            <form style={{marginTop:"80px",marginLeft:"50px"}}>
            <h2>Update Note</h2>
            <h6>Title and description must have minimum length of 5 characters</h6>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Note Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={note.title} name="title" onChange={handle_change}  />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Note description</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" value={note.description} name="description" onChange={handle_change}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Add Tags</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" name="tags" value={note.tags} onChange={handle_change}/>
                </div>
                <button disabled={note.title.length<5 || note.description.lenght<5} type="button    " className="btn btn-primary" onClick={()=>{updateNote(id,note.title,note.description,note.tags);navigate("/");}}>Submit</button>
            </form>
        </>
    )
}

export default UpdateNote;

