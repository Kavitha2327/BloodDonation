import React, { useState, useEffect, useRef } from "react";
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

const AddEventForm = ({ isOpen, toggle, onSuccess, editMode = false, existingEvent = null }) => {
  const [formData, setFormData] = useState({
    name: "",
    colleges: [
      {
        name: "",
        bloodBanks: [
          {
            nameOfTheBloodBank: "",
            Venue: "",
            RoomNo: "",
          },
        ],
      },
    ],
    date: "",
    image: null,
  });
  const [dispImage, setDispImage] = useState("");
  const [errors, setErrors] = useState({});
  const [scrollPosition, setScrollPosition] = useState(0);
  const [collegesList, setCollegesList] = useState([]);
  const [loadingColleges, setLoadingColleges] = useState(false);
  const imageRef = useRef(null);
  const modalBodyRef = useRef(null);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (modalBodyRef.current) {
        setScrollPosition(modalBodyRef.current.scrollTop);
      }
    };

    const modalBody = modalBodyRef.current;
    if (modalBody && isOpen) {
      modalBody.addEventListener('scroll', handleScroll, { passive: true });
      return () => modalBody.removeEventListener('scroll', handleScroll);
    }
  }, [isOpen]);

  // Fetch colleges when modal opens
  useEffect(() => {
    if (isOpen) {
      fetchColleges();
    }
  }, [isOpen]);

  // Function to fetch colleges from backend
  const fetchColleges = async () => {
    try {
      setLoadingColleges(true);
      const port = import.meta.env.VITE_BACKEND_PORT;
      const response = await axios.get(`${port}colleges`);
      if (response.data.success) {
        setCollegesList(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching colleges:', error);
      setCollegesList([]);
    } finally {
      setLoadingColleges(false);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      clearForm();
      clearErrors();
    } else {
      // Multiple attempts to force scroll to top when modal opens
      const resetScroll = () => {
        if (modalBodyRef.current) {
          modalBodyRef.current.scrollTop = 0;
          modalBodyRef.current.scrollLeft = 0;
        }
      };
      
      // Immediate reset
      resetScroll();
      
      // Reset after a short delay to handle any DOM updates
      setTimeout(resetScroll, 10);
      setTimeout(resetScroll, 50);
      setTimeout(resetScroll, 100);
      setTimeout(resetScroll, 200);
    }
  }, [isOpen]);

  // Populate form when in edit mode
  useEffect(() => {
    if (editMode && existingEvent && isOpen) {
      console.log("Existing event data:", existingEvent); // Debug log
      
      // Handle the fact that backend uses different field names
      const colleges = existingEvent.colleges || existingEvent.Colleges || [];
      
      setFormData({
        name: existingEvent.name || "",
        colleges: colleges.length > 0 
          ? colleges.map(college => ({
              name: college.name || "",
              bloodBanks: college.bloodBanks && college.bloodBanks.length > 0
                ? college.bloodBanks.map(bank => ({
                    nameOfTheBloodBank: bank.nameOfTheBloodBank || "",
                    Venue: bank.Venue || "",
                    RoomNo: bank.RoomNo ? bank.RoomNo.toString() : "",
                  }))
                : [{
                    nameOfTheBloodBank: "",
                    Venue: "",
                    RoomNo: "",
                  }]
            }))
          : [{
              name: "",
              bloodBanks: [{
                nameOfTheBloodBank: "",
                Venue: "",
                RoomNo: "",
              }],
            }],
        date: existingEvent.date ? existingEvent.date.split('T')[0] : "",
        image: null, // Reset image, user will need to upload new one if they want to change it
      });
      
      // Set existing image for display
      if (existingEvent.image) {
        const port = import.meta.env.VITE_BACKEND_PORT;
        setDispImage(`${port}Events/${existingEvent.image}`);
      } else {
        setDispImage("");
      }
    }
  }, [editMode, existingEvent, isOpen]);

  const handleChange = (
    e,
    collegeIndex = null,
    campIndex = null,
    field = ""
  ) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData({ ...formData, image: files[0] });
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setDispImage(fileReader.result);
      };
      fileReader.readAsDataURL(files[0]);
      setErrors({ ...errors, image: "" });
    } else if (collegeIndex !== null) {
      const updatedColleges = [...formData.colleges];

      if (campIndex !== null && field) {
        updatedColleges[collegeIndex].bloodBanks[campIndex][field] = value;
      } else if (field === "name") {
        updatedColleges[collegeIndex].name = value;
      }

      setFormData({ ...formData, colleges: updatedColleges });
    } else {
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleAddCollege = () => {
    setFormData({
      ...formData,
      colleges: [
        ...formData.colleges,
        {
          name: "",
          bloodBanks: [
            {
              nameOfTheBloodBank: "",
              Venue: "",
              RoomNo: "",
            },
          ],
        },
      ],
    });
    
    // Scroll to the new college after a short delay
    setTimeout(() => {
      if (modalBodyRef.current) {
        const newCollegeElements = modalBodyRef.current.querySelectorAll('[data-college-index]');
        if (newCollegeElements.length > 0) {
          const lastCollege = newCollegeElements[newCollegeElements.length - 1];
          lastCollege.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }, 100);
  };

  const handleAddBloodBank = (collegeIndex) => {
    const updatedColleges = [...formData.colleges];
    updatedColleges[collegeIndex].bloodBanks.push({
      nameOfTheBloodBank: "",
      Venue: "",
      RoomNo: "",
    });
    setFormData({ ...formData, colleges: updatedColleges });
    
    // Scroll to the new blood bank after a short delay
    setTimeout(() => {
      if (modalBodyRef.current) {
        const collegeElement = modalBodyRef.current.querySelector(`[data-college-index="${collegeIndex}"]`);
        if (collegeElement) {
          const bloodBankElements = collegeElement.querySelectorAll('[data-bloodbank-index]');
          if (bloodBankElements.length > 0) {
            const lastBloodBank = bloodBankElements[bloodBankElements.length - 1];
            lastBloodBank.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      }
    }, 100);
  };

  const handleRemoveBloodBank = (collegeIndex, campIndex) => {
    const updatedColleges = [...formData.colleges];
    if (updatedColleges[collegeIndex].bloodBanks.length > 1) {
      updatedColleges[collegeIndex].bloodBanks.splice(campIndex, 1);
      setFormData({ ...formData, colleges: updatedColleges });
    }
  };

  const handleRemoveCollege = (collegeIndex) => {
    const updatedColleges = [...formData.colleges];
    if (updatedColleges.length > 1) {
      updatedColleges.splice(collegeIndex, 1);
      setFormData({ ...formData, colleges: updatedColleges });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name || !formData.name.trim()) newErrors.name = "Event name is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.image && !editMode) newErrors.image = "An image is required";

    formData.colleges.forEach((college, collegeIndex) => {
      if (!college.name || !college.name.trim()) {
        newErrors[`college_${collegeIndex}`] = "College name is required";
      }
      college.bloodBanks.forEach((camp, campIndex) => {
        const nameOfTheBloodBank = camp.nameOfTheBloodBank || "";
        const venue = camp.Venue || "";
        const roomNo = camp.RoomNo ? camp.RoomNo.toString() : "";
        
        if (
          !nameOfTheBloodBank.trim() ||
          !venue.trim() ||
          !roomNo.trim()
        ) {
          newErrors[`camp_${collegeIndex}_${campIndex}`] =
            "All blood camp fields are required";
        }
      });
    });

    return newErrors;
  };

  const handleSave = async (event) => {
    event.preventDefault();

    // Log the entered data to the console
    console.log("Form Data Submitted:", formData);

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    const port = import.meta.env.VITE_BACKEND_PORT;

    const formDataToSend = new FormData();
    
    // Add image if exists, otherwise send null
    if (formData.image) {
      formDataToSend.append("image", formData.image);
      console.log("Image attached:", formData.image.name);
    } else {
      console.log("No image selected, proceeding without image");
    }
    
    formDataToSend.append("EventName", formData.name);
    formDataToSend.append("Date", formData.date);
    formDataToSend.append("Colleges", JSON.stringify(formData.colleges));

    // Add event ID for edit mode
    if (editMode && existingEvent) {
      formDataToSend.append("EventId", existingEvent.id);
    }

    console.log("FormData being sent:", formDataToSend);

    try {
      // Use different endpoint based on mode
      if (editMode && existingEvent) {
        // For update, use PUT request to match backend route
        formDataToSend.append("userID", existingEvent.id);
        formDataToSend.delete("Colleges");
        formDataToSend.append("Colleges", JSON.stringify(formData.colleges));
        
        const result = await axios.put(port + "update-event", formDataToSend, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log('Event updated successfully:', result.data);
      } else {
        // For add, use POST request
        const result = await axios.post(port + "add-event", formDataToSend, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log('Event added successfully:', result.data);
      }
      
      clearForm();
      toggle();
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Error uploading event:", error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      }
    }
  };

  const clearForm = () => {
    setFormData({
      name: "",
      colleges: [
        {
          name: "",
          bloodBanks: [
            {
              nameOfTheBloodBank: "",
              Venue: "",
              RoomNo: "",
            },
          ],
        },
      ],
      date: "",
      image: null,
    });
    setDispImage("");
    // Clear the file input
    if (imageRef.current) {
      imageRef.current.value = "";
    }
  };

  const clearErrors = () => setErrors({});

  const defaultImage = "./cardImage.jpg"; // Fixed path

  return (
    <>
      <Modal 
        isOpen={isOpen} 
        toggle={toggle} 
        size="lg" 
        centered
      >
      <ModalHeader toggle={toggle} className="bg-primary text-white">
        <h4 className="mb-0">{editMode ? 'Edit Event Details' : 'Add Event Details'}</h4>
      </ModalHeader>
      <form onSubmit={handleSave}>
        <ModalBody 
          ref={modalBodyRef}
          style={{ 
            maxHeight: "70vh", 
            overflowY: "auto",
            overflowX: "hidden",
            padding: "0",
            scrollBehavior: "smooth"
          }}
        >
          {/* Wrapper with proper padding to ensure smooth scrolling */}
          <div style={{ 
            padding: "1.5rem 1rem", 
            minHeight: "100px"
          }}>
            {/* Event Name */}
          <div className="mb-3">
            <label className="form-label fw-bold">Event Name</label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter event name"
              onChange={handleChange}
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name}</div>
            )}
          </div>

          {/* Event Date */}
          <div className="mb-3">
            <label className="form-label fw-bold">Event Date</label>
            <Input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className={`form-control ${errors.date ? "is-invalid" : ""}`}
            />
            {errors.date && (
              <div className="invalid-feedback">{errors.date}</div>
            )}
          </div>

          {/* Event Image */}
          <div className="mb-4">
            <label className="form-label fw-bold">Event Image</label>
            <div className="border rounded overflow-hidden position-relative" style={{ backgroundColor: "#f8f9fa", height: "200px" }}>
              <img
                src={dispImage || defaultImage}
                alt="event preview"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block"
                }}
              />
              <input
                type="file"
                name="image"
                accept="image/*"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  opacity: 0,
                  cursor: "pointer"
                }}
                ref={imageRef}
                onChange={handleChange}
              />
              {!dispImage && (
                <div 
                  className="position-absolute top-50 start-50 translate-middle text-center"
                  style={{ pointerEvents: "none" }}
                >
                  <i className="fas fa-camera fa-2x text-muted mb-2"></i>
                  {/* <p className="text-muted small mb-0">Click to upload image</p> */}
                </div>
              )}
            </div>
            {errors.image && (
              <div className="text-danger small mt-1">{errors.image}</div>
            )}
          </div>

          {/* Colleges Section */}
          <div className="mb-4">
            <label className="form-label fw-bold mb-3">Colleges & Blood Banks</label>
            {formData.colleges.map((college, collegeIndex) => (
              <div
                key={collegeIndex}
                data-college-index={collegeIndex}
                className="card mb-3"
                style={{ border: "1px solid #dee2e6" }}
              >
                <div className="card-header bg-light d-flex justify-content-between align-items-center">
                  <h6 className="mb-0">College {collegeIndex + 1}</h6>
                  {formData.colleges.length > 1 && (
                    <Button
                      color="link"
                      size="sm"
                      className="text-danger p-0"
                      onClick={() => handleRemoveCollege(collegeIndex)}
                      title="Remove College"
                    >
                      <i className="fas fa-trash-alt">Remove</i>
                    </Button>
                  )}
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <label className="form-label">College Name</label>
                    <Input
                      type="select"
                      value={college.name}
                      onChange={(e) => handleChange(e, collegeIndex, null, "name")}
                      className={`form-control ${errors[`college_${collegeIndex}`] ? "is-invalid" : ""}`}
                      disabled={loadingColleges}
                    >
                      <option value="">
                        {loadingColleges ? "Loading colleges..." : "Select a college"}
                      </option>
                      {collegesList.map((collegeOption) => (
                        <option key={collegeOption._id} value={collegeOption.collegeName}>
                          {collegeOption.collegeName} ({collegeOption.collegeCode})
                        </option>
                      ))}
                    </Input>
                    {errors[`college_${collegeIndex}`] && (
                      <div className="invalid-feedback">{errors[`college_${collegeIndex}`]}</div>
                    )}
                  </div>

                  {college.bloodBanks.map((camp, campIndex) => (
                    <div 
                      key={campIndex} 
                      data-bloodbank-index={campIndex}
                      className="border rounded p-3 mb-3" 
                      style={{ backgroundColor: "#f8f9fa" }}
                    >
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h6 className="mb-0">Blood Bank {campIndex + 1}</h6>
                        {college.bloodBanks.length > 1 && (
                          <Button
                            color="link"
                            size="sm"
                            className="text-danger p-0"
                            onClick={() => handleRemoveBloodBank(collegeIndex, campIndex)}
                            title="Remove Blood Bank"
                          >
                            <i className="fas fa-trash-alt">Remove</i>
                          </Button>
                        )}
                      </div>
                      <div className="row g-2">
                        <div className="col-md-4">
                          <label className="form-label">Blood Bank Name</label>
                          <Input
                            type="text"
                            value={camp.nameOfTheBloodBank}
                            placeholder="Blood Bank Name"
                            onChange={(e) =>
                              handleChange(e, collegeIndex, campIndex, "nameOfTheBloodBank")
                            }
                            className={`form-control ${
                              errors[`camp_${collegeIndex}_${campIndex}`] ? "is-invalid" : ""
                            }`}
                          />
                        </div>
                        <div className="col-md-4">
                          <label className="form-label">Venue</label>
                          <Input
                            type="text"
                            value={camp.Venue}
                            placeholder="Venue"
                            onChange={(e) =>
                              handleChange(e, collegeIndex, campIndex, "Venue")
                            }
                            className="form-control"
                          />
                        </div>
                        <div className="col-md-4">
                          <label className="form-label">Room No</label>
                          <Input
                            type="text"
                            value={camp.RoomNo}
                            placeholder="Room No"
                            onChange={(e) =>
                              handleChange(e, collegeIndex, campIndex, "RoomNo")
                            }
                            className="form-control"
                          />
                        </div>
                      </div>
                      {errors[`camp_${collegeIndex}_${campIndex}`] && (
                        <div className="text-danger small mt-2">
                          {errors[`camp_${collegeIndex}_${campIndex}`]}
                        </div>
                      )}
                    </div>
                  ))}
                  
                  <div className="text-center">
                    <Button
                      color="outline-primary"
                      size="sm"
                      className="mt-2"
                      onClick={() => handleAddBloodBank(collegeIndex)}
                    >
                      <i className="fas fa-plus me-1"></i> Add Blood Bank
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="text-center mt-3 d-flex justify-content-center">
              <Button
                color="outline-success"
                size="sm"
                onClick={handleAddCollege}
              >
                <i className="fas fa-plus me-1"></i> Add College
              </Button>
            </div>
          </div>
        </div>
        </ModalBody>
        <ModalFooter>
          <Button 
            type="submit" 
            color="primary"
          >
            {editMode ? 'Update Event' : 'Save Event'}
          </Button>
          <Button
            type="button"
            color="secondary"
            onClick={toggle}
          >
            Cancel
          </Button>
        </ModalFooter>
      </form>
    </Modal>
    </>
  );
};

export default AddEventForm;
