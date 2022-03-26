import React from "react";
import {useState} from "react";
import {FaUser , FaLock} from "react-icons/fa";
import {IconContext} from "react-icons";

export const authContext = React.createContext();

const Form = () => {
  const [Email , setEmail] = useState("");
  const [Password , setPassword] = useState("");

    const submitHandler = async (e)=>{
      e.preventDefault();

      const response = await fetch("http://localhost:5000/auth/login",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify({
          Email,
          Password
        })
      })

      const data = await response.json();

      if(data.user)
      {
        localStorage.setItem("token" , data.user);
        localStorage.setItem("name" , data.name);
        window.location.href = "/landingPage";
      }
    }
  return (
    <IconContext.Provider value={ {color:"#c4c4c4"} } >
      <form id="sign-in-form" onSubmit={ submitHandler }>
        <div>
          <FaUser />
          <input 
            placeholder="Enter email..." 
            type="email"
            required
            onChange={ (e)=>{setEmail(e.target.value)} }
            value={Email}
          />
        </div>

        <div>
          <FaLock />
          <input 
            placeholder="Enter password..." 
            type="password"
            required
            onChange={ (e)=>{setPassword(e.target.value)} }
            value={Password}
          />
        </div>

        <button type="submit">Sign in</button>
      </form>
    </IconContext.Provider>
  );
}

export default Form;