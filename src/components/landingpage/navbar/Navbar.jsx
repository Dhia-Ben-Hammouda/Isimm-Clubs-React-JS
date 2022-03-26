import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Link as Linkk } from "react-router-dom";
import img from "./isimm_logo.png";
import { FaUser , FaSignOutAlt , FaCog } from "react-icons/fa";

const Navbar = ()=>{

  const hamburgerBtnClickHandler = ()=>{
    document.getElementById("mobile-list").classList.toggle("opened");
    document.getElementById("mobile-list").classList.toggle("closed");
    document.querySelector(".bars").classList.toggle("rotated");
  }

  const settingsHandler = ()=>{
    const menu = document.getElementById("settings");

    if(menu.style.display === "none")
    {
      menu.style.display = "block";
    }
    else
    {
      menu.style.display = "none";
    }
  }

  const logOut = ()=>{
    localStorage.removeItem("token");
    window.location.href = "/";
  }

  return(
    <nav>
      <div className="title">
        <img alt="" src={img} style={ {width:"50px" , borderRadius:"10px"} }/>
        <h1>Gestion des clubs</h1>
      </div>

      <ul id="main-list">
        <li>
          <Link smooth to="#students" >
            Etudiants
          </Link>
        </li>

        <li>
          <Link smooth to="#admins" >
            M.bureau
          </Link>
        </li>

        <li>
          <Link smooth to="#administration" >
            Administration
          </Link>
        </li>

        <div className="account-settings">
          <FaUser onClick={ settingsHandler } style={ {color:"#EEE" , transform:"scale(1.5)" ,  cursor:"pointer"} } />
          <ul id="settings">
            <li style={ {cursor:"pointer", display:"flex" , justifyContent:"space-around"} }>
              <FaCog/>
              <h5>
                <Linkk style={ {color:"#333"}} to="settings">
                  Paramètres
                </Linkk>
              </h5>
            </li>
            <hr/>
            <li onClick={logOut} style={ {cursor:"pointer", width:"90%",  display:"flex" , justifyContent:"space-around"} }>
              <FaSignOutAlt/>
              <h5>Déconnexion</h5>
            </li>
          </ul>
        </div>
      </ul>

      <ul id="mobile-list" className="closed">
        <li>
          <Link smooth to="#students" >
            Etudiants
          </Link>
        </li>

        <li>
          <Link smooth to="#admins" >
            M.bureau
          </Link>
        </li>

        <li>
          <Link smooth to="#administration" >
            Administration
          </Link>
        </li>

        <div className="account-settings">
          <FaUser style={ {color:"#EEE" , transform:"scale(1.5)" ,  cursor:"pointer"} } />
        </div>
      </ul>

      <div className="bars" onClick={ hamburgerBtnClickHandler }>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Navbar;