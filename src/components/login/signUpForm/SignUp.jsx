import React from "react";
import { useState } from "react";
import { FaUser, FaLock, FaSignature, FaPhoneAlt } from "react-icons/fa";
import { IconContext } from "react-icons";

const Form = () => {
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/auth/register", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        Name,
        Phone,
        Email,
        Password
      })
    })
    const data = await response.json();

    if (data.status === "ok") 
    {
      document.querySelector(".response").innerHTML = "User created succesfully";
    }
    else if (data.status === "exists") 
    {
      document.querySelector(".response").innerHTML = "User already exists";
    }
  }

  return (
    <form id="sign-up-form" className="translated" onSubmit={submitHandler}>
      <IconContext.Provider value={{ color: "#c4c4c4" }}>
        <div>
          <FaSignature />
          <input
            placeholder="Enter name..."
            type="text"
            required
            onChange={(e) => { setName(e.target.value) }}
            value={Name}
          />
        </div>

        <div>
          <FaPhoneAlt />
          <input
            placeholder="Enter phone..."
            type="text"
            required
            onChange={(e) => { setPhone(e.target.value) }}
            value={Phone}
          />
        </div>

        <div>
          <FaUser />
          <input
            placeholder="Enter email..."
            type="email"
            required
            onChange={(e) => { setEmail(e.target.value) }}
            value={Email}
          />
        </div>

        <div>
          <FaLock />
          <input
            placeholder="Enter password..."
            type="password"
            required
            onChange={(e) => { setPassword(e.target.value) }}
            value={Password}
          />
        </div>

        <h3 className="response" style={{ color: "green" }}></h3>
        <button type="submit">Sign up</button>
      </IconContext.Provider>
    </form>
  );
}

export default Form;