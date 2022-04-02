import React from "react";
import {useState} from "react";
import {FaUser , FaLock} from "react-icons/fa";
import {IconContext} from "react-icons";

const Form = () => {
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

    const submitHandler = async (e)=>{
      e.preventDefault();

      const response = await fetch("https://isimm-clubs.herokuapp.com/auth/login",{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      })

      const data = await response.json();

      if(data.user)
      {
        localStorage.setItem("token" , data.user);
        localStorage.setItem("name" , data.name);
        localStorage.setItem("email" , data.email);
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
            value={email}
          />
        </div>

        <div>
          <FaLock />
          <input 
            placeholder="Enter password..." 
            type="password"
            required
            onChange={ (e)=>{setPassword(e.target.value)} }
            value={password}
          />
        </div>

        <button type="submit">Sign in</button>
      </form>
    </IconContext.Provider>
  );
}

export default Form;