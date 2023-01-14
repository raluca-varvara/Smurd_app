import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./login.css"
import { useNavigate } from "react-router-dom";


function LogIn() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  let navigate = useNavigate();

    // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
      role: "admin"
    },
    {
      username: "user2",
      password: "pass2",
      role: "client"
    },
    {
      username: "user3",
      password: "pass3",
      role: "volunteer"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);
     

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
        alert("wrong password")
      } else {
        localStorage.setItem("role", userData.role);
        setIsSubmitted(true);
        navigate("/");
        window.alert("Logged in successfully");
      }
    } else {
      // Username not found
      alert("this username does not exist")
      setErrorMessages({ name: "uname", message: errors.uname });
    }
    
  };
 

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  return (
    <div className="login">

                <div className="title">Sign In</div>
                <div className="formStyle">
                    <form onSubmit={handleSubmit}>
                            <div className = "row">
                              <label>Username </label>
                              <input  type="text" name="uname" required />
                            </div>
                            {/* {renderErrorMessage("uname")} */}
                            <div className = "row">
                              <label>Password </label>
                              <input type="password" name="pass" required />
                            </div>
                            
                            {/* {renderErrorMessage("pass")} */}
                          <div className = "button-div">
                            <button className="button-color" type="submit">Submit</button>
                          </div>
                            
                        
                    </form>
                </div>
       
    </div>
  );
}

export default LogIn;