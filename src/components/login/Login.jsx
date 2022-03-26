import React from "react";
import isimm from "./isimm_logo.png";
import SignIn from "./signInForm/SignIn.jsx";
import SignUp from "./signUpForm/SignUp.jsx";

const Login = ()=>{

  const clickHandler = (e)=>{
    const btn = document.querySelector("#btn");

    document.querySelector("#btn").classList.toggle("btn-translated");
    document.querySelector("#sign-up-form").classList.toggle("translated");
    document.querySelector("#sign-in-form").classList.toggle("translated");
    
    if (btn.innerText === "Sign in")
    {
      btn.innerText = "Sign up";
    }
    else
    {
      btn.innerText = "Sign in";
    }
  }

  return(
    <section id="login">
      <div className="auth-container">
        <div className="title-container">
          <img style={ {height:"100%" , borderRadius:"20px"} } src={isimm} alt="isimm logo" />
          <h3 style={  {width:"50%" , color:"#EEE" } } >Gestion des clubs Institut supérieure d'informatique et de mathématiques de monastir</h3>        
        </div>

        <div className="interaction-container">
          <div className="btn-container">
            <div className="btn-wrapper">
              <button id="btn" onClick={clickHandler}>
                Sign in
              </button>
            </div>
          </div>

          <div className="form-container">
            <SignIn/>
            <SignUp/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;