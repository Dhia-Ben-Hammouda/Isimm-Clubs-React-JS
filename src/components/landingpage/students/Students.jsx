import React from "react";
import { useEffect , useState } from "react";
import axios from "axios";
import { FaCommentAlt , FaHome , FaCalendarAlt} from "react-icons/fa";
import { IconContext } from "react-icons";
import {Link} from "react-router-dom";

const Students = ()=>{

  const [Clubs , setClubs] = useState([]);

  useEffect( ()=>{

    axios.get("http://localhost:5000/clubs/findClubs")
      .then( (response)=>{
        setClubs(response.data);
      })
  },[]);


  return(
    <section id="students">
      <h1>Espace Etudiants</h1>
      <div className="clubs-container"> 
        {
          Clubs.map( (club,index)=>{
            return(
              <div key={index} className="club">
                <img src={club.url} />
                <div className="club-functions">
                  <IconContext.Provider value={ {color:"#333" , size:"2rem"}  }>
                    <div>
                      <Link to={ `${club.name}chat` } >
                        <FaCommentAlt/>
                      </Link>
                    </div>

                    <div>
                      <Link to="">
                        <FaHome/>
                      </Link>
                    </div>

                    <div>
                      <Link to="">
                        <FaCalendarAlt/>
                      </Link>
                    </div>
                  </IconContext.Provider>
                </div>
              </div>
            );
          })
        }
      </div>
    </section>
  );
}

export default Students;