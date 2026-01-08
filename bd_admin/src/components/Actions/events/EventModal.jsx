import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Button } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import moment from "moment";

const EventModal = ({ isOpen, toggle, event, onEdit, onDelete }) => {
  if (!event) return null;

  const ActualDate = moment(event.date).format("DD-MM-YYYY");
  const port = import.meta.env.VITE_BACKEND_PORT;
  const imagePath = event.image ? `${port}Events/${event.image}` : './cardImage.jpg';

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg" centered>
      <ModalHeader toggle={toggle}>
        <h4>{event.name}</h4>
      </ModalHeader>
      <ModalBody>
        <div className="event-modal-content">
          <div className="event-image-section" style={{ textAlign: "center", marginBottom: "20px" }}>
            <img
              src={imagePath}
              alt={event.name}
              style={{
                width: "100%",
                maxHeight: "300px",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
              }}
            />
          </div>
          
          <div className="event-details">
            <h5 style={{ color: "#2c3e50", marginBottom: "15px" }}>Event Details</h5>
            <p><strong>Event Date:</strong> {ActualDate}</p>
            
            <div className="event-colleges-info" style={{ marginTop: "20px" }}>
              <h6 style={{ color: "#34495e", marginBottom: "10px" }}>Colleges & Venues:</h6>
              {event.colleges && event.colleges.map((college, index) => (
                <div key={index} className="college-info" style={{ 
                  marginBottom: "15px", 
                  padding: "10px", 
                  backgroundColor: "#f8f9fa", 
                  borderRadius: "5px",
                  border: "1px solid #e9ecef"
                }}>
                  <h6 style={{ margin: "0 0 8px 0", color: "#495057", fontWeight: "600" }}>
                    {college.name}
                  </h6>
                  {college.bloodBanks && college.bloodBanks.map((bloodBank, bIndex) => (
                    <div key={bIndex} className="blood-bank-info" style={{
                      marginLeft: "15px",
                      marginBottom: "5px",
                      padding: "5px 10px",
                      backgroundColor: "#ffffff",
                      borderRadius: "3px",
                      border: "1px solid #dee2e6"
                    }}>
                      <p style={{ margin: "0", fontSize: "14px", color: "#6c757d" }}>
                        <strong>{bloodBank.nameOfTheBloodBank}</strong> - {bloodBank.Venue} (Room {bloodBank.RoomNo})
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Edit />}
          onClick={() => onEdit(event)}
          style={{ marginRight: "10px" }}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="error"
          startIcon={<Delete />}
          onClick={() => onDelete(event.id)}
        >
          Delete
        </Button>
        <Button variant="outlined" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EventModal;
