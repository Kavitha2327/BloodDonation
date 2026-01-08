import React, { useState } from "react";
// import { volunteerData as initialVolunteerData } from "../dummyData";
import VolunteerCard from "./VolunteerCard";
import ConfirmDelete from "../events/ConfirmDelete";
import AddVolunteerForm from "./AddVounteerForm";
// import "./showVolunteers.css";
import toast, { Toaster } from "react-hot-toast";

import { useEffect } from "react";
import axios from 'axios';

const ShowVolunteers = () => {
  // const port = import.meta.env.REACT_APP_SERVER_PORT;
  const [selectedEvent, setSelectedEvent] = useState(null); // State to track selected event for deletion
  const [modalOpen, setModalOpen] = useState(false); // State to control the modal
  const [addmodalOpen, setAddModalOpen] = useState(false);
  const [volunteers, setVolunteers] = useState([]);
  const port = import.meta.env.VITE_BACKEND_PORT;


  const updateVolunteerInList = (updatedVolunteer) => {
    setVolunteers((prevVolunteers) =>
      prevVolunteers.map((volunteer) =>
        volunteer.Id === updatedVolunteer.Id ? updatedVolunteer : volunteer
      )
    );
  };


  const getData = async () => {
    try {
      const response = await axios.get(port + "volunteers-data");
      setVolunteers(response.data); // Set the fetched volunteers data
    } catch (error) {
      toast.error("Failed to load volunteers."); // Show error toast if fetch fails
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteVolunteer = (code) => {
    setSelectedEvent(code); // Set the event to be deleted
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.post(port + `delete-volunteer`, { VolunteerId: selectedEvent });
      setVolunteers((prevVolunteers) =>
        prevVolunteers.filter((volunteer) => volunteer._id !== selectedEvent)
      );
      toast.success("Volunteer deleted successfully!");
    } catch (e) {
      console.error("Error deleting volunteer:", e);
      toast.error("Failed to delete volunteer. Please try again.");
    }
    setModalOpen(false); // Close the modal after confirmation
  };

  const addVolunteer = () => {
    setAddModalOpen(!addmodalOpen);
  };

  const handleAddVolunteer = (newVolunteer) => {
    setVolunteers((prevVolunteers) => [...prevVolunteers, newVolunteer]);
    toast.success("Volunteer added successfully!");
  };

  return (
    <>
      <div className='main-title'>
        <h3 style={{ marginBottom: "20px" }} className="heading1">Volunteers</h3>
      </div>

      <div className="page-heading">
        {/* <h1 className="mt-4 mb-3" style={{ textAlign: "center" }}>
          Volunteer List
        </h1> */}
        <div style={{display:"flex", justifyContent: "center", alignItems: "center", width: "100%"}}>
          <button className="btn btn-primary addVolunteer" onClick={addVolunteer}>
            Add Volunteer
          </button>
        </div>
      </div>

      <AddVolunteerForm
        isOpen={addmodalOpen}
        toggle={() => setAddModalOpen(false)}
        onAdd={handleAddVolunteer} // Pass the callback to AddVolunteerForm
      />

      <div className="volunteers-container mb-5">
        {volunteers.length > 0 &&
          volunteers.map((volunteer, index) => (
            <VolunteerCard
              key={index}
              name={volunteer.Name}
              code={volunteer.Id}
              branch={volunteer.Branch}
              mobile={volunteer.PhoneNumber}
              type={volunteer.TypeOfVolunteer}
              linkedin={volunteer.LinkedInProfile}
              id={volunteer._id}
              onDelete={() => deleteVolunteer(volunteer._id)}
            />
          ))}
      </div>
      {selectedEvent && (
        <ConfirmDelete
          isOpen={modalOpen}
          toggle={() => setModalOpen(false)}
          onDelete={handleDeleteConfirm}
          eventName={selectedEvent}
        />
      )}
    </>
  );
};

export default ShowVolunteers;
