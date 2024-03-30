import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Contact() {
    return (
        <div className="contact">
            <div className="contact1">
                <h1> Contact Me</h1>
                
                <p> <img src="gmail.svg" alt="" width="20px" />vikramsinghrathore863@gmail.com</p>
               
                <p> <img src="call.svg" alt="" width="20px" /> +91 9649215986</p>
                
                <div className="icons">
                <a href="https://github.com/Vikramsingh863">
                 <img src="github.svg" alt="" width="28px" /></a>

                 <a href="https://www.linkedin.com/in/vikram-singh-rathore-vsr863">
                 <img src="linkdlin.svg" alt="" width="35px" /></a>

                 <a href="https://m.facebook.com/profile.php/?id=100008197966299">
                 <img src="facebook.svg" alt="" width="25px" /></a>
                 </div>
                <a href="https://drive.google.com/file/d/1l74Awvt-QjWK7kBYbm78PEZmSPG9t5zD/view?usp=drivesdk"> <button>Download CV</button> </a>
                    <div>
                    

                    </div>
                
            </div>
            <div className="contact2">
                    
            </div>
            
        </div>
    );
}
