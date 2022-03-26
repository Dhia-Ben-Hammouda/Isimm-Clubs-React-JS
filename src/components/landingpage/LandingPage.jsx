import React from "react";
import Carousel from "./carousel/Carousel.jsx";
import Navbar from "./navbar/Navbar.jsx";
import Students from "./students/Students.jsx";
import Admins from "./admins/Admins.jsx";
import Administration from "./administration/Administration.jsx";
import Footer from "./footer/Footer.jsx";
import {useEffect} from "react";


const LandingPage = ()=>{
  useEffect( ()=>{
    const token = localStorage.getItem("token");
    if(!token)
    {
      localStorage.removeItem("token");
      window.location.href = "/";
    }
  },[]);

  return(
    <>
      <Carousel/>
      <Navbar/>
      <Students/>
      <Admins/>
      <Administration/>
      <Footer/>
    </>
  );
}

export default LandingPage;