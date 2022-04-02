import React from "react";
import { useEffect , useState } from "react";
import axios from "axios";
import { FaCommentAlt , FaHome , FaCalendarAlt , FaEnvelope, FaUser} from "react-icons/fa";
import { IconContext } from "react-icons";

const Admins = ()=>{

  const [Clubs , setClubs] = useState([]);

  useEffect( ()=>{

    axios.get("https://isimm-clubs.herokuapp.com/clubs/findClubs")
      .then( (response)=>{
        setClubs(response.data);
      })
  },[]);


  return(
    <section id="admins">
      <h1>Espace membres bureau</h1>
      <div className="clubs-container"> 
        {
          Clubs.map( (club,index)=>{
            return(
              <div key={index} className="club">
                <img src={club.url} alt="club-img"/>
                <div className="club-functions">
                  <IconContext.Provider value={ {color:"#333" , size:"2rem"}  }>
                    <div>
                      <FaCommentAlt/>
                    </div>

                    <div>
                      <FaHome/>
                    </div>

                    <div>
                      <FaCalendarAlt/>
                    </div>

                    <div>
                     <FaEnvelope/>
                    </div>

                    <div>
                     <FaUser/>
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

export default Admins;