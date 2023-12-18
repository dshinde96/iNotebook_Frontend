import { useContext, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import noteContext from "../Context/Notes/notecontex";

const NavBar = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const {setnotes}=useContext(noteContext);
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className={`nav-link ${location.pathname=='/'?"active":""}`} to={"/"}>HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${location.pathname=='/About'?"active":""}`} to={"/About"}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={`nav-link ${location.pathname=='/Contact'?"active":""}`} to={"/Contact"}>Contact</NavLink>
                            </li>
                            
                            
                        </ul>
                        {(localStorage.getItem('tocken')==='')?<><Link type="button" to="/login" className="btn btn-primary mx-3">Login</Link>
                        <Link type="button" to="/signup" className="btn btn-primary mx-3">Signup</Link></>:<button type="button" className="btn btn-primary mx-3" onClick={()=>{localStorage.setItem('tocken','');setnotes([]);navigate('/Login')}}>Logout</button>}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;