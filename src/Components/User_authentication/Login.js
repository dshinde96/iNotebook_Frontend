import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'
const Login = () => {
    const [invalidcred, setinvalidcred] = useState(false);
    const [user, setuser] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    const handle_change = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value });
    }
    const Add_user = async (e) => {
        // e.preventDefault();
        const url = "http://localhost:5000/api/auth/login";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        const msg = await response.json();
        console.log(msg);
        if (response.status !== 200) {
            localStorage.setItem('tocken','');
            setinvalidcred(true);
        }
        else {
            localStorage.setItem('tocken',msg.tocken);
            navigate("/");
        }


    }
    return (
        <>
            <form style={{ marginTop: "100px" }}>
            <div className="alert">
                        {invalidcred ? <div class="alert alert-primary  d-flex justify-content-between" role="alert">
                            <h5>Invalid credentials...Please try again </h5><i className="fa fa-trash delete_btn" title="Delete Item" onClick={() => { setinvalidcred(false) }}></i>
                        </div> : ""}
                    </div>
                <div className="container">
                    <h2>Login</h2>

                    <div>
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={handle_change} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" id="exampleInputPassword1" onChange={handle_change} />
                    </div>

                    <button className="btn btn-primary" type="button" onClick={() => { Add_user(user.email, user.password) }}>Login</button>
                </div>
            </form>
        </>
    )
}
export default Login;