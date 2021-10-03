import React from 'react'
import {Link} from "react-router-dom";

const FormSuccess = () => {
    return (
        <>
        <header>
           <nav><h1>Afri<span>Hub</span> <span id="careers">Careers</span></h1> </nav> 
        </header>
        
        <div className="afrihubSuccess">
            <img src="/success.jpg" alt="success" srcset="" />
        </div>
        
        <span className="successText">
                <h1>Your Application has been recieved we will get back to you shortly</h1>
        </span>

        <span id="home">
               <Link to='/'>Back to Careers</Link>
        </span>
        </>
    )
}

export default FormSuccess
