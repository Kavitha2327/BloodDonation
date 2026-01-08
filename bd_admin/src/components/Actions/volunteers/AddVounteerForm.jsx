import React, { useState, useEffect } from "react";
import {
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "reactstrap";
import axios from "axios";


const AddVolunteerForm = ({ isOpen, toggle, onAdd }) => {

  // const port = import.meta.env.REACT_APP_SERVER_PORT;
  const [formData, setFormData] = useState({
    name: "",
    code: "",
    mobile: "",
    branch: "",
    type: "Student",
    linkedin: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!isOpen) {
      clearForm();
      clearErrors();
    }
  }, [isOpen]);

  const port = import.meta.env.VITE_BACKEND_PORT;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleMobileChange = (e) => {
    // Allow only digits and limit to 10 characters
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData({
      ...formData,
      mobile: value,
    });
    setErrors({
      ...errors,
      mobile: "",
    });
  };

  const inputStyles = (error) => ({
    border: error ? "1px solid red" : undefined,
  });

  const invalidFeedbackStyle = {
    color: "red",
    fontSize: "0.875rem",
    marginTop: "0.25rem",
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Volunteer code validation
    if (!formData.code.trim()) {
      newErrors.code = "Volunteer code is required";
    } else if (formData.code.trim().length < 3) {
      newErrors.code = "Volunteer code must be at least 3 characters";
    }
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Volunteer name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = "Name can only contain letters and spaces";
    }
    
    // Mobile number validation
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else {
      // Remove all non-digit characters for validation
      const cleanMobile = formData.mobile.replace(/\D/g, '');
      if (cleanMobile.length !== 10) {
        newErrors.mobile = "Mobile number must be exactly 10 digits";
      } else if (!/^[6-9]/.test(cleanMobile)) {
        newErrors.mobile = "Mobile number must start with 6, 7, 8, or 9";
      }
    }
    
    // Branch validation
    if (!formData.branch.trim()) {
      newErrors.branch = "Branch is required";
    } else if (formData.branch.trim().length < 2) {
      newErrors.branch = "Branch must be at least 2 characters";
    }
    
    // Type validation
    if (!formData.type) {
      newErrors.type = "Type is required";
    }
    
    // LinkedIn validation (optional but if provided, should be valid)
    if (formData.linkedin.trim() && !formData.linkedin.trim().includes('linkedin.com')) {
      newErrors.linkedin = "Please enter a valid LinkedIn URL";
    }
    
    return newErrors;
  };

  const handleSave = async () => {
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      try {
        // Clean mobile number before saving (remove any non-digit characters)
        const cleanMobile = formData.mobile.replace(/\D/g, '');
        
        // Use default LinkedIn URL if field is empty
        const linkedInProfile = formData.linkedin.trim() || "https://www.linkedin.com/";
        
        const ActualData = {
          TypeOfVolunteer: formData.type,
          Name: formData.name.trim(),
          Id: formData.code.trim(),
          PhoneNumber: cleanMobile,
          Branch: formData.branch.trim(),
          LinkedInProfile: linkedInProfile,
        };

        const response = await axios.post( port + "add-volunteers-data", ActualData);

        // Call the onAdd callback to update the list in ShowVolunteers
        onAdd(response.data);

        clearForm();
        toggle();
      } catch (error) {
        console.error("Error saving volunteer data: ", error);
      }
    }
  };

  const clearForm = () => {
    setFormData({
      name: "",
      code: "",
      mobile: "",
      branch: "",
      type: "",
      linkedin: "",
    });
  };

  const clearErrors = () => {
    setErrors({});
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add Volunteer Details</ModalHeader>
      <ModalBody>
        <Row className="details_group">
          <div className="mb-3 col-lg-6">
            <span>Volunteer Code: <span style={{ color: 'red' }}>*</span></span>
            <Input
              type="text"
              name="code"
              value={formData.code}
              placeholder={errors.code ? errors.code : "Enter volunteer code"}
              onChange={handleChange}
              style={inputStyles(errors.code)}
            />
          </div>
          <div className="mb-3 col-lg-6">
            <span>Volunteer Name: <span style={{ color: 'red' }}>*</span></span>
            <Input
              type="text"
              name="name"
              value={formData.name}
              placeholder={errors.name ? errors.name : "Enter volunteer name"}
              onChange={handleChange}
              style={inputStyles(errors.name)}
            />
          </div>
        </Row>
        <Row className="details_group">
          <div className="mb-3 col-lg-6">
            <span>Mobile: <span style={{ color: 'red' }}>*</span></span>
            <Input
              type="text"
              name="mobile"
              value={formData.mobile}
              placeholder={errors.mobile ? errors.mobile : "Enter mobile number"}
              onChange={handleMobileChange}
              style={inputStyles(errors.mobile)}
              maxLength="10"
            />
          </div>
          <div className="mb-3 col-lg-6">
            <span>Branch: <span style={{ color: 'red' }}>*</span></span>
            <Input
              type="text"
              name="branch"
              value={formData.branch}
              placeholder={errors.branch ? errors.branch : "Enter branch"}
              onChange={handleChange}
              style={inputStyles(errors.branch)}
            />
          </div>
        </Row>
        <Row className="details_group">
          <div className="mb-3 col-lg-6">
            <span>Type: <span style={{ color: 'red' }}>*</span></span>
            <Input
              type="select"
              name="type"
              value={formData.type}
              onChange={handleChange}
              style={inputStyles(errors.type)}
            >
              <option value="">Select type</option>
              <option value="Student">Student</option>
              <option value="Staff">Staff</option>
            </Input>
            {errors.type && (
              <div className="error-text" style={invalidFeedbackStyle}>{errors.type}</div>
            )}
          </div>
          <div className="mb-3 col-lg-6">
            <span>LinkedIn:</span>
            <Input
              type="text"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder={errors.linkedin ? errors.linkedin : "Enter LinkedIn profile URL (optional)"}
              style={inputStyles(errors.linkedin)}
            />
          </div>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button className="btn-outline-primary" onClick={handleSave}>
          Save
        </Button>
        <Button className="btn-outline-warning" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddVolunteerForm;
