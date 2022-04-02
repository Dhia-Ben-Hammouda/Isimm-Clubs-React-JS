import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Events = () => {

  const [events, setevents] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:5000/clubs/getEvents")
      .then((response) => {
        setevents(response.data);
      })
  }, [])


  return (
    <div className="event-wrapper">
      <div className="event-container">
        {
          events.map((event, index, arr) => {
            return (
              <div key={index} className="event">
                <img alt="" src={event.img} />

                <div className="info">
                  <h3 style={ {color:"dodgerblue"} } className="event-name">{event.name}</h3>
                  <h3 className="event-date">{event.date}</h3>
                </div>

              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Events;