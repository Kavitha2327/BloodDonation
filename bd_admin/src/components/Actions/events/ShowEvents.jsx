import React, { useState, useEffect } from "react";
import axios from "axios";
import EventCard from "./Eventcard";
import ConfirmDelete from "./ConfirmDelete";
import { Row } from "reactstrap";
import "./ShowEvents.css";
import AddEventForm from "./AddEventForm";

const ShowEvents = () => {
  const [eventsData, setEventsData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);

  const port = import.meta.env.VITE_BACKEND_PORT;

  const fetchEvents = () => {
    axios
      .get(port + "get-events")
      .then((response) => {
        setEventsData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleCardClick = (event) => {
    setSelectedEvent({
      id: event.id,
      name: event.name,
      date: event.date,
      colleges: event.colleges,
      image: event.image
    });
    setEditModalOpen(true);
  };

  const handleDeleteClick = (event) => {
    setSelectedEvent({
      id: event.id,
      name: event.name,
      date: event.date,
      colleges: event.colleges,
      image: event.image
    });
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    setModalOpen(false);
    try {
      await axios.post(port + "delete-event", { EventId: selectedEvent.id });
      console.log(`Event ${selectedEvent.id} deleted successfully.`);
      fetchEvents(); // Refresh events after deletion
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  const handleAddEventSuccess = () => {
    setAddModalOpen(false);
    fetchEvents(); // Refresh events after adding
  };

  const handleEditSuccess = () => {
    setEditModalOpen(false);
    fetchEvents(); // Refresh events after updating
  };

  return (
    <>
      <div className='main-title'>
        <h3 style={{ marginBottom: "20px" }} className="heading1">Events</h3>
      </div>
      <Row className="justify-content-center mt-2" onClick={() => setAddModalOpen(true)}>
        <button className="add-event-btn btn w-25 btn-primary addVolunteer">Add New Event</button>
      </Row>

      <AddEventForm 
        isOpen={addModalOpen} 
        toggle={() => setAddModalOpen(false)} 
        onSuccess={handleAddEventSuccess} 
      />

      <div className="events-container">
        {eventsData.length > 0 ? (
          eventsData.map((event, index) => (
            <EventCard
              key={index}
              name={event.EventName}
              date={event.Date}
              colleges={event.Colleges}
              image={event.filename}
              onEditClick={() => handleCardClick({
                id: event._id,
                name: event.EventName,
                date: event.Date,
                colleges: event.Colleges,
                image: event.filename
              })}
              onDeleteClick={() => handleDeleteClick({
                id: event._id,
                name: event.EventName,
                date: event.Date,
                colleges: event.Colleges,
                image: event.filename
              })}
            />
          ))
        ) : (
          <p>No events found</p>
        )}
      </div>

      {/* Edit Event Modal */}
      {selectedEvent && (
        <AddEventForm
          isOpen={editModalOpen}
          toggle={() => setEditModalOpen(false)}
          editMode={true}
          existingEvent={selectedEvent}
          onSuccess={handleEditSuccess}
        />
      )}

      {/* Delete Confirmation Modal */}
      {selectedEvent && (
        <ConfirmDelete
          isOpen={modalOpen}
          toggle={() => setModalOpen(false)}
          onDelete={handleDeleteConfirm}
          eventName={selectedEvent.name || "Event"}
        />
      )}
    </>
  );
};

export default ShowEvents;
