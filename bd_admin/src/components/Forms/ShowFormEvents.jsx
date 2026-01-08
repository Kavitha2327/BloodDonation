import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import EventCard from "./FormCard";
import { Row } from "reactstrap";
import "../Actions/events/ShowEvents.css";



const ShowEvents = () => {
  // const port = import.meta.env.REACT_APP_SERVER_PORT;

  const { donor } = useParams();

  const [eventsData, setEventsData] = useState([]);
  const navigate = useNavigate();
  const port = import.meta.env.VITE_BACKEND_PORT;


  const fetchEvents = () => {
    axios
      .get(port + "get-events")
      .then((response) => {
        setEventsData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  console.log(donor);


  const handleCardClick = (date, eventName) => {
    navigate(`/blooddonationadmin/${donor}/${encodeURIComponent(JSON.stringify(date))}`);
};

  return (
    <>
      <div className='main-title' style={{ display: "flex", flexDirection: "column", cursor: "pointer" }}>
        <h3 style={{ marginBottom: "20px", fontFamily: "Poppins" }} className="heading1">Event Details</h3>
        <p className="heading2" style={{ marginTop: "-10px", marginLeft: "5px", fontSize: '13px' }}> <span style={{ fontWeight: "bold" }}>HOME {'>'} </span>{donor.toUpperCase()} FORM</p>
      </div>
      <div className="events-container">
        {eventsData.length > 0 ? (
          eventsData.map((event, index) => (
            <div key={index} onClick={() => handleCardClick(event.Date, event.EventName)}>
              <EventCard
                name={event.EventName}
                date={event.Date}
                venue={event.Place}
                image={event.filename}
              />
            </div>
          ))
        ) : (
          <p>No events found</p>
        )}
      </div>
    </>
  );
};

export default ShowEvents;