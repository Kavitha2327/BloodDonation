import React, { useState, useEffect } from "react";
import {
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Form,
  FormGroup,
} from "reactstrap";
import "./showVolunteers.css";
import axios from "axios";

import { toast, Toaster } from "react-hot-toast";
const UpdateVolunteer = ({ isOpen, toggle, volunteer }) => {
  const port = import.meta.env.VITE_BACKEND_PORT;
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    mobile: "",
    branch: "",
    type: "Student", // Default to 'Student'
    linkedin: "",
  });

  const [errors, setErrors] = useState({}); // Validation errors

  useEffect(() => {
    if (volunteer) {
      setFormData({
        name: volunteer.name || "",
        code: volunteer.code || "",
        mobile: volunteer.mobile || "",
        branch: volunteer.branch || "",
        type: volunteer.type || "Student", // Default to 'Student' if empty
        linkedin: volunteer.linkedin || "",
      });
    }
  }, [volunteer]);

  // Function to reset form data and clear errors when modal is closed
  const handleToggle = () => {
    toggle(); // Close modal
    // Clear form and error state on modal close
    setFormData({
      name: "",
      code: "",
      mobile: "",
      branch: "",
      type: "Student", // Default to 'Student'
      linkedin: "",
    });
    setErrors({}); // Clear errors
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear errors when user types
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.code.trim()) {
      newErrors.code = "Volunteer code is required";
    }
    if (!formData.name.trim()) {
      newErrors.name = "Volunteer name is required";
    }
    // if (!formData.mobile.trim() || !/^\d{10}$/.test(formData.mobile)) {
    //   newErrors.mobile = "Mobile number must be 10 digits";
    // }
    if (!formData.branch.trim()) {
      newErrors.branch = "Branch is required";
    }

    return newErrors;
  };

  const handleSave = () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set validation errors if any
    } else {
      const ActualData = {
        TypeOfVolunteer: formData.type,
        Name: formData.name,
        Id: formData.code,
        PhoneNumber: formData.mobile,
        Branch: formData.branch,
        LinkedInProfile: formData.linkedin,
        VolunteerId: volunteer.id
      };
      console.log(ActualData);

      const response = axios
        .put(port + "update-volunteer", ActualData)
        .then((response) => {
          console.log("Updated Volunteer Data: ", response.data);
          toast.success("Updated successfully")
          
          setInterval(() => {
            window.location.reload();
          }, 500);
        })
        .catch((error) => {
          console.error("Error updating volunteer:", error);
        });

      console.log(response)
      handleToggle();
      // window.location.reload();
    }
  };

  return (
    <>
    <Toaster
  toastOptions={{
    style: {
      boxShadow: "none", // Removes unwanted shadow
      borderRadius: "8px", // Ensures default rounded corners
      background: "#fff", // Default white background
      color: "#333", // Default text color
    },
  }}
/>

    <Modal isOpen={isOpen} toggle={handleToggle}>
      <ModalHeader toggle={handleToggle}>
        {volunteer ? `Details of ${formData.name}` : "Volunteer Details"}
      </ModalHeader>
      <ModalBody>
        <Form>
          <Row className="details_group">
            <div className="mb-3 image-div">
              <img
                src={`https://info.aec.edu.in/adityacentral/studentphotos/${formData.code}.jpg`}
                alt="volunteer"
                className="volunteer-image"
              />
            </div>
          </Row>
          <Row className="details_group">
            <div className="mb-3 col-lg-6">
              <span>Volunteer Code:</span>
              <Input
                type="text"
                name="code"
                value={formData.code}
                onChange={handleChange}
                invalid={!!errors.code}
              />
              {errors.code && (
                <div className="error-text">{errors.code}</div>
              )}
            </div>
            <div className="mb-3 col-lg-6">
              <span>Volunteer Name:</span>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                invalid={!!errors.name}
              />
              {errors.name && (
                <div className="error-text">{errors.name}</div>
              )}
            </div>
          </Row>
          <Row className="details_group">
            <div className="mb-3 col-lg-6">
              <span>Mobile:</span>
              <Input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                invalid={!!errors.mobile}
              />
              {errors.mobile && (
                <div className="error-text">{errors.mobile}</div>
              )}
            </div>
            <div className="mb-3 col-lg-6">
              <span>Branch:</span>
              <Input
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                invalid={!!errors.branch}
              />
              {errors.branch && (
                <div className="error-text">{errors.branch}</div>
              )}
            </div>
          </Row>
          <Row className="details_group">
            <div className="mb-3 col-lg-6">
              <span>Type:</span>
              <Input
                type="select"
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="Student">Student</option>
                <option value="Staff">Staff</option>
              </Input>
              {errors.type && (
                <div className="error-text">{errors.type}</div>
              )}
            </div>
            <div className="mb-3 col-lg-6">
              <span>LinkedIn:</span>
              <Input
                type="text"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
              />
            </div>
          </Row>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button type="submit" onClick={handleSave} className="btn-outline-primary" style={{color: "white"}} >
          Save Changes
        </Button>
        <Button className="btn-outline-warning" onClick={toggle} >
          Close
        </Button>
      </ModalFooter>
    </Modal>

    </>
  );
};

export default UpdateVolunteer;
