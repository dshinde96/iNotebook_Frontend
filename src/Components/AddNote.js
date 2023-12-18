
import { useContext, useState } from "react";
import {useNavigate} from 'react-router-dom'
import noteContext from "../Context/Notes/notecontex";
const AddNote = () => {
    const navigate=useNavigate();
    const { addnote } = useContext(noteContext);
    const s1={title:"",description:"",tags:""};
    const [note,setnote]=useState(s1);
    const handle_change=(event)=>{
        setnote({...note,[event.target.name]:event.target.value});
    }
    return (
        <>
            <form style={{marginTop:"80px",marginLeft:"50px"}}>
            <h2>Add Note</h2>
            <h6>Title and description must have minimum length of 5 characters</h6>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Note Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="title" value={note.title} onChange={handle_change}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Note description</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" value={note.description} name="description" onChange={handle_change}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Add Tags</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" value={note.tags} name="tags" onChange={handle_change}/>
                </div>
                <button disabled={note.title.length<5 || note.description.length<5} type="button" className="btn btn-primary" onClick={()=>{addnote(note.title,note.description,note.tags);navigate("/");}}>Submit</button>
            </form>
        </>
    )
}
export default AddNote;