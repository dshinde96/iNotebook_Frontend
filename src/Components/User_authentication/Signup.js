import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [invalidcred, setinvalidcred] = useState(false);
    const [user, setuser] = useState({ name: "", email: "", password: "" });

    const handle_change = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value });
    }
    const navigate = useNavigate();
    const Add_user = async (name, email, password) => {
        const url = "http://localhost:5000/api/auth/createuser";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user) // body data type must match "Content-Type" header
        });
        const msg = await response.json();
        if (response.status != 200) {
            // alert(msg.error);
            setinvalidcred(true);
        }
        else {
            localStorage.setItem('tocken',msg.tocken);
            navigate('/');
        }
    }
    return (
        <>
            <form className="container" style={{ marginTop: "100px" }}>
                <div className="alert">
                    {invalidcred ? <div class="alert alert-primary  d-flex justify-content-between" role="alert">
                        <h5>This email already registered...Kindly login</h5><i className="fa fa-xmark delete_btn" title="Delete Item" onClick={() => { setinvalidcred(false) }}></i>
                    </div> : ""}
                </div>
                <div className="container">
                    <h2>Register with Your mail id</h2>

                    <div>
                        <label htmlFor="exampleInputEmail1" className="form-label">Enter Your Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name="name" onChange={handle_change} />
                    </div>

                    <div>
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={handle_change} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" id="exampleInputPassword1" onChange={handle_change} />
                    </div>

                    <button className="btn btn-primary" type="button" onClick={() => { Add_user(user.name, user.email, user.password) }}>Register</button>
                </div>
            </form>
        </>
    )
}
export default Signup;