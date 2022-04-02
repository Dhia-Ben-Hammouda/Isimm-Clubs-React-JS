import React from "react";
import { FaEnvelope, FaCalendarAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Administration = () => {
  return (
    <section id="administration">
      <h1>Espace Administration</h1>
      <div className="administration-grid">
        <IconContext.Provider value={ {size:"2rem" , color:"#333"} }>
          <Link to="">
            <div className="administration-task">
              <FaCalendarAlt/>
              <h1>consulter calendrier</h1>
            </div>
          </Link>

          <Link to="">
            <div className="administration-task">
              <FaEnvelope/>
              <h1>boite réception</h1>
            </div>
          </Link>
        </IconContext.Provider>
      </div>
    </section>
  );
}

export default Administration;