import React, { useState } from "react";
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import UpdateVolunteer from "./UpdateVolunteer";
import "./VolunteerCard.css"; // Assuming you create a separate CSS file for styles

export default function VolunteerCard(props) {
  const { name, code, mobile, branch, type, onDelete, linkedin, id } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleUpdate = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <UpdateVolunteer
        isOpen={isOpen}
        toggle={() => setIsOpen(!isOpen)}
        volunteer={{ name, code, branch, mobile, type, linkedin, id }}

        
      />

      <MDBRow>
        <MDBCol className="mt-3">
          <MDBCard style={{ borderRadius: "15px", minHeight: "200px" }}>
            <MDBCardBody className="p-3 d-flex align-items-center" style={{ minHeight: "200px" }}>
              <div className="d-flex text-black align-items-center">
                <div className="flex-shrink-0">
                  <MDBCardImage
                    style={{ width: "120px", borderRadius: "10px" }}
                    src={`https://info.aec.edu.in/adityacentral/studentphotos/${code}.jpg`}
                    alt="Volunteer image"
                    fluid
                  />
                </div>
                <div className="flex-grow-1 ms-3">
                  <MDBCardTitle>{name}</MDBCardTitle>
                  <MDBCardText>{code}</MDBCardText>

                  <div
                    className="d-flex justify-content-start rounded-3 p-2 mb-2"
                    style={{ backgroundColor: "#efefef" }}
                  >
                    <div className="me-3">
                      <p className="small text-muted mb-1">Branch</p>
                      <p className="mb-0">{branch}</p>
                    </div>
                    <div>
                      <p className="small text-muted mb-1">Mobile</p>
                      <p className="mb-0">{mobile}</p>
                    </div>
                  </div>
                  <div className="d-flex pt-1">
                    <MDBBtn
                      outline
                      className="me-1 btn-outline-success"
                      style={{ width: "100px" }}
                      onClick={handleUpdate}
                    >
                      Update
                    </MDBBtn>
                    <MDBBtn
                      outline
                      className="btn-outline-danger"
                      style={{ width: "100px" }}
                      onClick={() => onDelete(code)}
                    >
                      Delete
                    </MDBBtn>
                  </div>
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
