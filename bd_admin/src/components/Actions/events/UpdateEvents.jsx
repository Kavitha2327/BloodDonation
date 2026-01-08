import React, { useState, useEffect, useRef } from "react";
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
  Label,
} from "reactstrap";
import axios from "axios";
import VolunteerCard from "../volunteers/VolunteerCard";

import toast, { Toaster } from "react-hot-toast";


const UpdateEvent = ({ isOpen, toggle, volunteer }) => {
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
    finalPath: null,
  });
  const [dispImage, setDispImage] = useState(null); // State to display image preview
  const [errors, setErrors] = useState({});
  const [collegesList, setCollegesList] = useState([]);
  const [loadingColleges, setLoadingColleges] = useState(false);
  const imageRef = useRef(null); // Use ref for the image input

  useEffect(() => {
    if (volunteer) {
      setFormData({
        name: volunteer.name || "",
        colleges: volunteer.colleges || [
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
        date: volunteer.date || "",
        finalPath: null, // Clear image
      });
      setDispImage(volunteer.finalPath); // Display passed image or default
    }
  }, [volunteer]);

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

  const handleChange = (
    e,
    collegeIndex = null,
    campIndex = null,
    field = ""
  ) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData({ ...formData, finalPath: files[0] });
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setDispImage(fileReader.result);
      };
      fileReader.readAsDataURL(files[0]);
      setErrors({ ...errors, finalPath: "" });
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

  const port = import.meta.env.VITE_BACKEND_PORT;

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
  };

  const handleAddBloodBank = (collegeIndex) => {
    const updatedColleges = [...formData.colleges];
    updatedColleges[collegeIndex].bloodBanks.push({
      nameOfTheBloodBank: "",
      Venue: "",
      RoomNo: "",
    });
    setFormData({ ...formData, colleges: updatedColleges });
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
    if (!formData.name.trim()) newErrors.name = "Event name is required";
    if (!formData.date) newErrors.date = "Date is required";

    formData.colleges.forEach((college, collegeIndex) => {
      if (!college.name.trim()) {
        newErrors[`college_${collegeIndex}`] = "College name is required";
      }
      college.bloodBanks.forEach((camp, campIndex) => {
        if (
          !camp.nameOfTheBloodBank.trim() ||
          !camp.Venue.trim() ||
          !camp.RoomNo.trim()
        ) {
          newErrors[`camp_${collegeIndex}_${campIndex}`] =
            "All blood bank fields are required";
        }
      });
    });

    return newErrors;
  };

  // const handleSave = (e) => {
  //   e.preventDefault(); // Prevent form submission from refreshing the page
  //   const newErrors = validateForm();

  //   if (Object.keys(newErrors).length > 0) {
  //     setErrors(newErrors);
  //   } else {

  //     console.log(formData);
  //     let updatedData = {};

  //     if (formData.name)  updatedData["EventName"] = formData.name;
  //     if (formData.venues) updatedData["Place"] = formData.venues;
  //     if (formData.date) updatedData["Date"] = formData.date;
  //     if (formData.finalPath) {
  //       updatedData["image"] = formData.finalPath;
  //     }
  //     updatedData["userID"] = volunteer.id;

  //     console.log(updatedData)





  //     axios
  //       .put(port + "update-event", updatedData)
  //       .then((response) => {
  //         console.log("Updated Event Data: ", response.data);
  //         toast.success("Event data updated successfully");
  //       })
  //       .catch((error) => {
  //         console.error("There was an error updating the event!", error);
  //       });

  //     toggle(); // Close modal after saving
  //   }
  // };
  // const port = process.env.REACT_APP_SERVER_PORT;

  const handleSave = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    const port = import.meta.env.VITE_BACKEND_PORT;

    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
    } else {
        const formDataToSend = new FormData();
        formDataToSend.append('EventName', formData.name);
        formDataToSend.append('Colleges', JSON.stringify(formData.colleges));
        formDataToSend.append('Date', new Date(formData.date));

        if (formData.finalPath) {
            formDataToSend.append('image', formData.finalPath);
        }

        formDataToSend.append('userID', volunteer.id);

        axios
            .put(port + 'update-event', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                console.log('Updated Event Data: ', response.data);
                toast.success('Event data updated successfully');
                toggle();

                setTimeout(() => {
                  window.location.reload();
                }, 500);
            })
            .catch((error) => {
                console.error('Error updating event:', error);
                toast.error('Failed to update event');
            });
    }
};


  return (
    <>
    <Toaster />
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        {volunteer ? `Details of ${formData.name}` : "Event Details"}
      </ModalHeader>
      <Form onSubmit={handleSave}>
        <ModalBody>
          <Row className="details_group">
            <FormGroup className="mb-3 image-div" style={{ position: "relative" }}>
              <img
                src={dispImage ? dispImage : port + "Events/" + volunteer.finalPath}
                alt="event"
                className="event-image"
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <input
                type="file"
                name="image"
                accept="image/*"
                className="image-div"
                style={{
                  position: "absolute",
                  opacity: 0,
                  height: "180px",
                  width: "100%",
                  top: 0,
                  left: 0,
                  cursor: "pointer",
                }}
                ref={imageRef}
                onChange={handleChange}
              />
              {errors.finalPath && (
                <div className="text-danger" style={{ marginTop: "8px" }}>
                  {errors.finalPath}
                </div>
              )}
            </FormGroup>
          </Row>

          <Row className="details_group">
            <FormGroup className="mb-3 col-lg-12">
              <Label for="name">Event Name:</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Enter event name"
                onChange={handleChange}
                className={errors.name ? "is-invalid" : ""}
              />
              {errors.name && (
                <div className="text-danger" style={{ marginTop: "8px" }}>
                  {errors.name}
                </div>
              )}
            </FormGroup>
          </Row>

          <Row className="details_group">
            {formData.colleges.map((college, collegeIndex) => (
              <div
                key={collegeIndex}
                className="mb-3 col-lg-12 addEventCollegeBlock"
              >
                <span style={{ textDecoration: "underline" }}>
                  College Name:
                </span>
                <Input
                  style={{ marginTop: "4px" }}
                  type="select"
                  value={college.name}
                  onChange={(e) => handleChange(e, collegeIndex, null, "name")}
                  className={
                    errors[`college_${collegeIndex}`] ? "is-invalid" : ""
                  }
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
                  <div className="text-danger" style={{ marginTop: "8px" }}>
                    {errors[`college_${collegeIndex}`]}
                  </div>
                )}

                {college.bloodBanks.map((camp, campIndex) => (
                  <div key={campIndex} className="mb-3">
                    <span style={{ paddingLeft: "5%" }}>
                      Blood Bank {campIndex + 1}:
                    </span>
                    <div className="d-flex gap-2">
                      <div className="adminCollege">
                        <Input
                          type="text"
                          value={camp.nameOfTheBloodBank}
                          placeholder={
                            errors[`camp_${collegeIndex}_${campIndex}`] ||
                            "Blood Bank Name"
                          }
                          onChange={(e) =>
                            handleChange(
                              e,
                              collegeIndex,
                              campIndex,
                              "nameOfTheBloodBank"
                            )
                          }
                          className={
                            errors[`camp_${collegeIndex}_${campIndex}`]
                              ? "is-invalid"
                              : ""
                          }
                        />
                        <Input
                          type="text"
                          value={camp.Venue}
                          placeholder="Venue"
                          onChange={(e) =>
                            handleChange(e, collegeIndex, campIndex, "Venue")
                          }
                        />
                        <Input
                          type="text"
                          value={camp.RoomNo}
                          placeholder="Room No"
                          onChange={(e) =>
                            handleChange(e, collegeIndex, campIndex, "RoomNo")
                          }
                        />
                      </div>
                      {college.bloodBanks.length > 1 && (
                        <Button
                          color="link"
                          size="sm"
                          className="text-danger"
                          onClick={() =>
                            handleRemoveBloodBank(collegeIndex, campIndex)
                          }
                        >
                          x
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
                <Button
                  color="link"
                  size="sm"
                  className="mt-2 text-muted"
                  onClick={() => handleAddBloodBank(collegeIndex)}
                >
                  + Add Another Blood Bank
                </Button>
                {formData.colleges.length > 1 && (
                  <Button
                    color="link"
                    size="sm"
                    className="text-danger mt-2"
                    onClick={() => handleRemoveCollege(collegeIndex)}
                  >
                    Remove College
                  </Button>
                )}
              </div>
            ))}
            <Button
              color="link"
              size="sm"
              className="mt-2 text-muted"
              onClick={handleAddCollege}
            >
              + Add Another College
            </Button>
          </Row>

          <Row className="details_group">
            <FormGroup className="mb-3 col-lg-12">
              <Label for="date">Date:</Label>
              <Input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={errors.date ? "is-invalid" : ""}
              />
              {errors.date && (
                <div className="text-danger" style={{ marginTop: "8px" }}>
                  {errors.date}
                </div>
              )}
            </FormGroup>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button type="submit" className="btn-outline-primary" style={{color: "white"}}>
            Save Changes
          </Button>
          <Button className="btn-outline-warning" onClick={toggle} >
            Close
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
    </>
  );
};



export default UpdateEvent;
