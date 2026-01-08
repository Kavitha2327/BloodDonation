import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import EventCard from "./DonorDataCard";
import { Row } from "reactstrap";
import "./ShouwDonors.css";



const ShowEvents = () => {
  const [eventsData, setEventsData] = useState([]);
  // const port = import.meta.env.REACT_APP_SERVER_PORT;
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

  const handleCardClick = (date, eventName) => {
    // navigate(`/blooddonationadmin/donor-details-each/${date.split("-").reverse().join("-")}/${encodeURIComponent(eventName)}`);
    window.location.href = `/blooddonationadmin/donor-details-each/${date}/${encodeURIComponent(eventName)}`;
  };

  return (
    <>
      <div className="main-title">
        <h3 style={{ marginBottom: "20px" }} className="heading1">Registration Details</h3>
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