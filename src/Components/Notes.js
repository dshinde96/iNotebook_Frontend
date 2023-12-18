
import { useContext, useEffect } from "react";
import noteContext from "../Context/Notes/notecontex";
import NoteItem from "./NoteItem";
const Notes = () => {
    const { notes, setnotes,fetchnotes } = useContext(noteContext);
    useEffect(()=>{
        fetchnotes();
    },[]);
    console.log(notes);
    return (
        <>
            <div className="ShowItems row">
                        {
                            notes.map((ele)=>{
                                    return (
                                    <NoteItem note={ele} key={ele._id}/>
                                )
                            })
                        }
                    </div>
        </>
    )
}
export default Notes;