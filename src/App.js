
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Home from './Components/Home'
import About from './Components/About';
import Contact from './Components/contact';
import NoteState from './Context/Notes/noteState';
import AddNote from './Components/AddNote';
import UpdateNote from './Components/UpdateNote';
import Login from './Components/User_authentication/Login';
import Signup from './Components/User_authentication/Signup';
const App = () => {
    return (
        <>
            <div>
                <NoteState>   {/*wrap all elements in notestate where we want to use context api*/}
                    <NavBar />
                    <Routes>
                        <Route exact path='/' element={<Home key='Home' />} />
                        <Route exact path='/About' element={<About key='About' />} />
                        <Route exact path='/Contact' element={<Contact key='Contact' />} />
                        <Route exact path='/addnote' element={<AddNote key="addnote"/>}/>
                        <Route exact path='/updateNote/:id' element={<UpdateNote key="updateNote"/>}/>
                        <Route exact path='/login' element={<Login key="Login"/>}/>
                        <Route exact path='/signup' element={<Signup key="Dignup"/>}/>
                        

                    </Routes>
                </NoteState>
            </div>
        </>
    )
}
export default App;