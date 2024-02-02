import React from "react";
import "./style.css";
import Registration from "../components/Registration";

function RegistrationPage(){
    function logoutFn(){
      
    }
    return(
        <div>
            <div className="top-container">
                <h2>App Name</h2>
                <button onClick={()=>logoutFn()}>Logout</button>
            </div>
            <div className="middle-container">
                    <Registration />
            </div>
        </div>
    )
}
export default RegistrationPage;