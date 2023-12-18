
import { useNavigate } from "react-router-dom";
import Notes from './Notes'
import './Home.css'
import { useContext, useEffect } from "react";
const Home = () => {
    const navigate=useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('tocken')==='')
        navigate('/Login');
    })
    return (
        <>
            <div className="main_div">
                <div className="child_div">
                    {/* <figure>
                        <img src="https://th.bing.com/th/id/OIP.Wd2RYDR9xN1IwRXQW4ULTQHaHa?pid=ImgDet&rs=1"/>
                        <figcaption>Add Your List Here</figcaption>
                    </figure> */}

                    {/* <div className="AddItems">
                        <input type="text" placeholder="✍ Add Items..." value={text} onChange={(e)=>{settext(e.target.value)}} id='input_text'/>
                        {toggle_btn? <i className="fa fa-plus add_btn" title="Add Item" onClick={handle_add}></i>:<i class="fa fa-check add_btn" onClick={submit_edit}></i>}
                    </div> */}
                    <button onClick={()=>{navigate('/addnote')}}>Add Note</button>
                    <Notes/>
                </div>
            </div>
        </>
    )
}

export default Home;