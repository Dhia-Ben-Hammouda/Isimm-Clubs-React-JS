import React from "react";
import Login from "./login/Login.jsx";
import LandingPage from "./landingpage/LandingPage.jsx";
import Chat from "./landingpage/chat/chat.jsx";
import Settings from "./landingpage/Settings/Settings.jsx";
import StudentEvents from "./landingpage/students/events/Events.jsx";
import { Route , Routes } from "react-router-dom";
import "./styles.css";

const App = ()=>{
  return(
    <>
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route exact path="/landingPage" element={ <LandingPage/> } />
        <Route exact path="/landingPage/eventsEtudiants" element={ <StudentEvents/> } />
        <Route exact path="/landingPage/*" element={ <Chat/> } />
        <Route exact path="/landingPage/settings" element={ <Settings/> } />
      </Routes>
    </>
  );
}

export default App;