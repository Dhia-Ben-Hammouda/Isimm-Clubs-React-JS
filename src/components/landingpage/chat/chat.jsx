import React from "react";
import { useState , useEffect } from "react";
import { io } from "socket.io-client";
import { FaArrowRight } from "react-icons/fa";
import { IconContext } from "react-icons";


const socket = io.connect("https://isimm-clubs.herokuapp.com/");

const Chat = () => {
  
  const User = localStorage.getItem("name");
  const [ Msg , setMsg ] = useState("");
  const [ Users , setUsers ] = useState([]);
  const [ Messages , setMessages ] = useState([]);

  useEffect( ()=>{
    socket.emit("user-connected" , { user:User });
  },[Users]);

  const submitHandler = (e)=>{
    e.preventDefault();

    socket.emit( "send-msg" , { name:User , message : Msg  } )
    setMsg("");
  }

  socket.on("recieve-msg" , (data)=>{
    setMessages([...Messages , { name: data.name , message : data.message }]);
  })

  socket.on("add-user" , (data)=>{
    setUsers([...Users , data.user]);
  })

  const clickHandler = ()=>{
    
  }

  return (
    <div id="chat">
      <div className="left">
        <div className="user-container">
          <h1>Users</h1>
          {
            Users.map( (User,index)=>{
              return(
                <div className="user-info" key={index}>
                  <div className="circle"></div>
                  <h3>{User}</h3>
                </div>
              )
            })
          }
        </div>
      </div>

      <div className="right">
        <div className="chat-container">
          <IconContext.Provider value={ {size:"1.5rem" , color:"#333"} }>
            <div className="msg-container">
              {
                Messages.map( (msg,index,arr)=>{
                  return(
                    <div className="msg" key={index}>
                      <h2>{msg.name}</h2>
                      <h4>{msg.message}</h4>
                    </div>
                  );
                })
              }
            </div>

            <form onSubmit={ submitHandler } className="msg-form">
              <input
                id="msg-input"
                value={Msg}
                onChange={ (e)=>{setMsg(e.target.value)} }
                placeholder="Enter message..."
                autoComplete="off"
              />
              
              <button type="submit">
                <FaArrowRight style={ {cursor:"pointer"} } />
              </button>
            </form>
          </IconContext.Provider>
        </div>
      </div>

      <div className="chat-hamburger" onClick={ clickHandler }>
         <div className="chat-hamburger-bar"></div>
         <div className="chat-hamburger-bar"></div>
         <div className="chat-hamburger-bar"></div>
      </div>
    </div>
  );
}

export default Chat;