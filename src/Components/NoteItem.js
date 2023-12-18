
import { useContext } from 'react';
import './NoteItem.css';
import noteContext from '../Context/Notes/notecontex';
import { useNavigate } from 'react-router-dom';
const NoteItem = (props) => {
    const { note } = props;
    const {deleteNote}=useContext(noteContext);
    const navigate=useNavigate();
    return (
        <>
            {/* <div className="col-md-3" style={{ width: "30%", marginBottom: "30px" }}>
                <div className="Item">
                    <h3>{note.title}</h3>
                    <p>{note.description}</p>
                    <div className="btns">
                            <i className="fa fa-trash delete_btn" title="Delete Item"></i>
                            <i class="fa fa-edit edit_btn" title="edit Item"></i>
                    </div>
                </div>
            </div> */}
            <div className="Item">
                <h3>
                    {note.title}
                </h3>
                <p>{note.description}</p>
                <br/><br/>
                <h4>Tags:</h4>
                <p>{note.tags}</p>
                <div className="btns">
                        <i className="fa fa-trash delete_btn" title="Delete Item" onClick={()=>{deleteNote(note._id)}}></i>
                        <i className="fa fa-edit edit_btn" title="edit Item" onClick={()=>{navigate(`/updateNote/${note._id}`)}}></i>
                </div>
            </div>
        </>
    )
}
export default NoteItem;