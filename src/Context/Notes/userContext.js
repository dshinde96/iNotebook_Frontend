import { createContext, useContext, useState } from "react";

const userContext=createContext();
const UserState=(props)=>{
    const [tocken,settocken]=useState("");
    return (
        <>
            <userContext.Provider value={{tocken,settocken}}>
            {props.children}
            </userContext.Provider>
        </>
    )
}
export default userContext;
export {UserState};