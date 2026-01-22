import React, { useState } from "react";
import axios from "axios";
import { AvForm, AvField } from "availity-reactstrap-validation";
import {
  Row,
  Col,
  Button,
  Card,
  CardBody,
  CardTitle,
  Label,
  FormGroup,
} from "reactstrap";
import Select from "react-select";
import "./StudentForm.css"; // Import the new CSS file
import { useEffect } from "react";

import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";

function StudentForm() {
  var { date } = useParams();

  date = JSON.parse(date);
  // console.log(date);

  // Suppress legacy context warning for this component
  React.useEffect(() => {
    const originalError = console.error;
    console.error = (...args) => {
      const message = args[0];
      if (
        typeof message === 'string' && 
        (message.includes('Legacy context API') || 
         message.includes('componentWillReceiveProps') ||
         message.includes('componentWillUpdate') ||
         message.includes('React.createContext'))
      ) {
        return; // Suppress legacy warnings
      }
      originalError.call(console, ...args);
    };

    return () => {
      console.error = originalError; // Restore original console.error on cleanup
    };
  }, []);

  const [formData, setFormData] = useState({
    Name: "",
    Rollno: "",
    MobileNumber: "",
    Email: "",
    College: null,
    Department: "",
    Year: "",
    Section: "",

    BloodGroup: null,
    Gender: null,
    NumberOfTimesDonatedInCampus: "",
    NumberOfTimesDonatedOutside: "",
    EventDate: moment(date).format("DD-MM-YYYY"),
    Address: "",

    CollegeEvent: null,
    BloodBank: null,
    Venue: null,
    Room: null,
  });

  const [searchParameter, setSearchParameter] = useState("");
  const [eventColleges, setEventColleges] = useState([]);
  const [selectedCollegeData, setSelectedCollegeData] = useState(null);
  const [venueOptions, setVenueOptions] = useState([]);

  const port = import.meta.env.VITE_BACKEND_PORT;

  // Fetch venues dynamically based on the date
  useEffect(() => {
    const fetchVenues = async () => {
      try {
        console.log("Fetching venues for date:", date);
        const response = await axios.post(port + "get-venues", { date });

        if (response.status === 200 && response.data) {
          console.log("Received venues data:", response.data);
          setEventColleges(response.data);
        } else {
          toast.error("No venues found for the selected date.");
          setEventColleges([]);
        }
      } catch (error) {
        console.error("Error fetching venues:", error);
        if (error.response?.status === 404) {
          toast.error("No events found for the selected date.");
        } else {
          toast.error("Failed to fetch venues!");
        }
        setEventColleges([]);
      }
    };

    if (date) {
      fetchVenues();
    }
  }, [date, port]); // Runs when `date` changes

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (selectedOption, name) => {
    setFormData({
      ...formData,
      [name]: selectedOption || null, // Store the full object
    });
    // console.log(formData);
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderColor: "gray",
      boxShadow: "none",
      "&:hover": {
        borderColor: "darkgray",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "black !important", // Force text color of the selected option
      fontWeight: "normal", // Optional: Remove any bold styling
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "white" : "black", // Dropdown options text color
      backgroundColor: state.isSelected ? "blue" : "white", // Background color for selected options
      ":hover": {
        backgroundColor: "lightgray", // Hover effect
      },
    }),
  };
  // const port = import.meta.env.REACT_APP_SERVER_PORT;

  const handleSubmit = () => {
    if (!formData.BloodGroup || formData.BloodGroup == "") {
      toast.error("Please select Blood Group");
      return;
    } else if (!formData.Gender || formData.Gender == "") {
      toast.error("Please select Gender");
      return;
    }
    // else if (!formData.Venue || formData.Venue == "") {
    //     toast.error("Please select Venue");
    //     return;
    // }
    else if (!formData.College || formData.College == "") {
      toast.error("Please select Venue");
      return;
    }
    const submitData = {
      ...formData,
      College: formData.College?.value || formData.College || "",
      BloodGroup: formData.BloodGroup?.value || "",
      Gender: formData.Gender?.value.trim().toUpperCase() || "",
      EventDate: date, // Send full EventDate object
      //   Venue: formData.Venue?.value || "",
      Address: formData.Address || "",
      collegeCode: collegeCode || formData.College.toUpperCase(),
    };

    console.log("FormData for submission:", submitData);

    (async () => {
      try {
        const response = await axios.post(
          port + "add-student-data",
          submitData
        );

        if (response.status == 200) {
          console.log(response.data);
          toast.success("Submitted successfully");
        } else {
          toast.success("Student data already submitted");
        }

        setTimeout(() => {
          window.location.reload();
        }, 500);
      } catch (error) {
        console.error(
          "Error submitting form:",
          error?.response?.data || error.message
        );
        toast.error("Failed to submit form");
      }
    })();
  };

  const handleEventSelect = (selectedEvent) => {
    // This function is kept for backward compatibility but now uses dynamic data
    console.log("Event selected:", selectedEvent);
  };

  const resetForm = () => {
    window.location.reload();

    // setFormData({
    //     Name: "",
    //     Rollno: "",
    //     MobileNumber: "",
    //     Email: "",
    //     College: null,
    //     Department: "",
    //     Year: "",
    //     Section: "",
    //     BloodGroup: null,
    //     Gender: null,
    //     NumberOfTimesDonatedInCampus: "",
    //     NumberOfTimesDonatedOutside: ""
    // });
  };

  //   const [eventOptions, setEventOptions] = useState([]);

  const eventOptions = {
    colleges: [
      {
        value: "Aditya University",
        label: "Aditya University",
        venues: [
          {
            value: "Cotton Bhavan, Seminar Hall",
            label: "Cotton Bhavan, Seminar Hall",
            bloodBank: "Satya Surya Blood Bank, RJY",
            room: "208",
          },
          {
            value: "Ratan Tata Bhavan, Seminar Hall",
            label: "Ratan Tata Bhavan, Seminar Hall",
            bloodBank: "Akshaya Blood Bank, KKD",
            room: "006",
          },
          {
            value: "KL Rao Bhavan, Seminar Hall",
            label: "KL Rao Bhavan, Seminar Hall",
            bloodBank: "Rotary Blood Bank, KKD",
            room: "101",
          },
          {
            value: "Bill Gates Bhavan, Seminar Hall",
            label: "Bill Gates Bhavan, Seminar Hall",
            bloodBank: "Dr. YSR Jakkampudi Rammohan Rao Blood Center, RJY",
            room: "101",
          },
        ],
      },
      {
        value: "Aditya College of Engineering & Technology",
        label: "Aditya College of Engineering & Technology",
        venues: [
          {
            value: "Visweswaraya Bhavan, Seminar Hall",
            label: "Visweswaraya Bhavan, Seminar Hall",
            bloodBank: "GGH, KKD",
            room: "011",
          },
          {
            value: "C V Raman Bhavan, Seminar Hall",
            label: "C V Raman Bhavan, Seminar Hall",
            bloodBank: "GGH, Rampachodavaram",
            room: "101",
          },
          {
            value: "Ramanujan Bhavan, Seminar Hall",
            label: "Ramanujan Bhavan, Seminar Hall",
            bloodBank: "Indian Red Cross Society, KKD",
            room: "005",
          },
          {
            value: "Newton Bhavan, Seminar Hall",
            label: "Newton Bhavan, Seminar Hall",
            bloodBank: "Sri Yuvasena Blood Bank, KKD",
            room: "201",
          },
        ],
      },
      {
        value: "Aditya College of Pharmacy",
        label: "Aditya College of Pharmacy",
        venues: [
          {
            value: "Seminar Hall",
            label: "Seminar Hall",
            bloodBank: "Dhanvantary Blood Bank, RJY",
            room: "016",
          },
        ],
      },
      {
        value: "Aditya Polytechnic College",
        label: "Aditya Polytechnic College",
        venues: [
          {
            value: "Abdul Kalam Bhavan, Seminar Hall",
            label: "Abdul Kalam Bhavan, Seminar Hall",
            bloodBank: "Rotary Blood Bank, Peddapuram",
            room: "006",
          },
        ],
      },
    ],
  };

  const [collegeCode, setCollegeCode] = useState("");

  const fetchStudentDetails = async () => {
    try {
      const response = await axios.get(
        `https://adityauniversity.in/latecomersbackendapi/get-Student-Data/${searchParameter.toUpperCase()}`
      );

      console.log(response.data[0]);
      if (response.data[0]) {
        const studentData = response.data[0];
        const selectedCollege = options.collegeOptions.find(
          (option) => option.value === studentData.college
        );
        const selectedGender = options.genderOptions.find(
          (option) =>
            option.value.toLowerCase() === studentData.gender.toLowerCase()
        );

        setCollegeCode(studentData.collegeCode);

        setFormData({
          ...studentData,
          Name: studentData.studentName,
          Rollno: studentData.studentRoll,
          MobileNumber: studentData.studentMobile,
          Email: studentData.email,
          Department: studentData.branch,
          Year: studentData.passedOutYear,
          College: studentData.college || selectedCollege || null,
          Gender: selectedGender || null,
        });

        console.log("Fetched and mapped data:", {
          // ...studentData,

          College: selectedCollege || null,
          Gender: selectedGender || null,
        });
      } else {
        toast.error("Student not found!");
      }
    } catch (error) {
      console.error("Error fetching student details:", error);
      toast.error("Failed to fetch student details!");
    }
  };

  const options = {
    collegeOptions: [
      { value: "ADITYA UNIVERSITY", label: "ADITYA UNIVERSITY" },
      {
        value: "ADITYA COLLEGE OF ENGINEERING & TECHNOLOGY",
        label: "ADITYA COLLEGE OF ENGINEERING & TECHNOLOGY",
      },
      {
        value: "ADITYA COLLEGE OF PHARMACY",
        label: "ADITYA COLLEGE OF PHARMACY",
      },
    ],
    genderOptions: [
      { value: "Male", label: "Male" },
      { value: "Female", label: "Female" },
    ],
    bloodGroupOptions: [
      { value: "A+", label: "A+" },
      { value: "A-", label: "A-" },
      { value: "B+", label: "B+" },
      { value: "B-", label: "B-" },
      { value: "O+", label: "O+" },
      { value: "O-", label: "O-" },
      { value: "AB+", label: "AB+" },
      { value: "AB-", label: "AB-" },
      { value: "Unknown", label: "Unknown" },
    ],
  };

  const handleSelectChangeEvent = (selected, field) => {
    console.log("Selected:", selected, "Field:", field);
    if (field === "CollegeEvent") {
      const selectedCollegeData = eventColleges.find(
        (college) => college.name === selected.value
      );
      
      setSelectedCollegeData(selectedCollegeData);
      setFormData({
        ...formData,
        CollegeEvent: selected.value, // Store only the college name
        Venue: null, // Reset Venue, BloodBank, and Room
        BloodBank: null,
        Room: null,
      });
    } else if (field === "Venue") {
      const selectedVenue = selectedCollegeData
        ? selectedCollegeData.bloodBanks.find(
            (bloodBank) => bloodBank.Venue === selected.value
          )
        : null;

      setFormData({
        ...formData,
        Venue: selected.value, // Store only the venue name
        BloodBank: selectedVenue?.nameOfTheBloodBank || null,
        Room: selectedVenue?.RoomNo || null,
      });
    }
  };

  const collegeOptions = eventColleges.map((college) => ({
    value: college.name,
    label: college.name,
  }));
  
  const venueOption = selectedCollegeData
    ? selectedCollegeData.bloodBanks.map((bloodBank) => ({
        value: bloodBank.Venue,
        label: `${bloodBank.Venue} (${bloodBank.nameOfTheBloodBank})`,
      }))
    : [];

  // useEffect(() => {
  //     const fetchVenues = async () => {
  //         try {
  //             const response = await axios.post(port + "get-venues", { date });

  //             if (response.status === 200 && response.data.Place) {
  //                 // Map the Place array to the venue options
  //                 const formattedVenues = response.data.Place.map((venue) => ({
  //                     value: venue,
  //                     label: venue,
  //                 }));

  //                 setVenueOptions(formattedVenues); // Update the venue options
  //             } else {
  //                 toast.error("No venues found for the selected date.");
  //                 setVenueOptions([]); // Reset venue options
  //             }
  //         } catch (error) {
  //             console.error("Error fetching venues:", error);
  //             toast.error("Failed to fetch venues!");
  //         }
  //     };

  //     fetchVenues();
  // }, [date]); // Runs when `date` changes

  return (
    <>
      <Toaster />
      <div className="main-title">
        <h3 style={{ marginBottom: "20px" }} className="heading1">
          Student donor
        </h3>
      </div>

      <div className="student-form-container">
        <div className="suspended-student-form">
          <Card>
            <CardBody>
              <AvForm>
                <h2 className="form-title">Add student donor</h2>
                <Row>
                  <Label style={{ fontWeight: "450", fontFamily: "Poppins" }}>
                    Enter Student ID
                  </Label>
                </Row>
                <Row>
                  <Col xs="8" sm="8" md="8" lg="8">
                    <AvField
                      name="rollNo"
                      placeholder="Search by Roll No"
                      type="text"
                      errorMessage="Please enter the roll no."
                      validate={{ required: { value: true } }}
                      value={searchParameter}
                      onChange={(e) => setSearchParameter(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault(); // Prevent form submission
                          fetchStudentDetails();
                        }
                      }}
                    />
                  </Col>
                  <Col xs="4" sm="4" md="4" lg="4">
                    <Button
                      color="primary"
                      onClick={fetchStudentDetails}
                      className="add-button"
                    >
                      Add
                    </Button>
                  </Col>
                </Row>
              </AvForm>
            </CardBody>
          </Card>
        </div>

        <div className="student-blood-donation-form">
          <Card>
            <CardBody>
              <CardTitle
                className="form-title"
                style={{
                  textAlign: "center",
                  fontSize: "25px",
                  fontWeight: "bolder",
                }}
              >
                Student Blood Donation Form
              </CardTitle>
              <AvForm onValidSubmit={handleSubmit}>
                {/* Form Fields */}
                <Row>
                  <Col>
                    <AvField
                      name="Name"
                      label="Name"
                      value={formData.Name}
                      placeholder="Enter Name"
                      onChange={handleInputChange}
                      validate={{
                        required: { value: true },
                        pattern: {
                          value: "^[a-zA-Z ]+$",
                          errorMessage: "Only letters",
                        },
                      }}
                    />
                  </Col>
                  <Col>
                    <AvField
                      name="Rollno"
                      label="Roll Number"
                      value={formData.Rollno}
                      placeholder="Enter Roll Number"
                      onChange={handleInputChange}
                      validate={{
                        required: { value: true },
                        // pattern: {
                        //   value: "^[a-zA-Z0-9]+$",
                        //   errorMessage: "Invalid Roll Number",
                        // },
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <AvField
                      name="MobileNumber"
                      label="Mobile Number"
                      value={formData.MobileNumber}
                      placeholder="Enter Mobile Number"
                      type="number"
                      onChange={handleInputChange}
                      validate={{
                        required: { value: true },
                        pattern: {
                          value: "^[0-9]{10}$",
                          errorMessage: "Enter a valid 10-digit number",
                        },
                      }}
                    />
                  </Col>
                  <Col>
                    <AvField
                      name="Email"
                      label="Email"
                      value={formData.Email}
                      placeholder="Enter Email"
                      type="email"
                      onChange={handleInputChange}
                      validate={{
                        required: { value: true },
                        email: { value: true },
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  {/* <Col>
                    <FormGroup>
                      <Label>College</Label>
                      <input
                        type="text"
                        placeholder="Enter College"
                        value={formData.College || ""}
                        onChange={(e) =>
                          handleInputChange(e.target.value, "College")
                        }
                        style={{
                          width: "100%",
                          padding: "10px",
                          borderRadius: "5px",
                          border: "1px solid #ccc",
                          fontSize: "14px",
                          boxSizing: "border-box",
                        }}
                      />
                    </FormGroup>
                  </Col> */}


                  <Col>
                    <AvField
                      name="College"
                      label="College"
                      value={formData.College}
                      placeholder="Enter College"
                      onChange={handleInputChange}
                      validate={{ required: { value: true } }}
                    />
                  </Col>

                  <Col>
                    <AvField
                      name="Department"
                      label="Department"
                      value={formData.Department}
                      placeholder="Enter Department"
                      onChange={handleInputChange}
                      validate={{ required: { value: true } }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <AvField
                      name="Year"
                      label="Passout Year "
                      value={formData.Year}
                      placeholder="Enter Year"
                      type="number"
                      onChange={handleInputChange}
                      validate={{ required: { value: true } }}
                    />
                  </Col>
                  <Col>
                    <AvField
                      name="Section"
                      label="Section"
                      value={formData.Section}
                      placeholder="Enter Section"
                      onChange={handleInputChange}
                      validate={{ required: { value: true } }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label>Blood Group</Label>
                      <Select
                        options={options.bloodGroupOptions}
                        placeholder="Select Blood Group"
                        value={formData.BloodGroup}
                        onChange={(selected) =>
                          handleSelectChange(selected, "BloodGroup")
                        }
                        styles={customStyles}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>Gender</Label>
                      <Select
                        options={options.genderOptions}
                        placeholder="Select Gender"
                        value={formData.Gender}
                        onChange={(selected) =>
                          handleSelectChange(selected, "Gender")
                        }
                        styles={customStyles}
                        theme={(theme) => ({
                          ...theme,
                          colors: {
                            ...theme.colors,
                            primary: "none", // Remove blue theme
                            primary25: "lightgray", // Background for hovered options
                            neutral0: "white", // Background for dropdown
                            neutral80: "black", // Text color
                          },
                        })}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <AvField
                      name="NumberOfTimesDonatedInCampus"
                      label="Times Donated In Campus"
                      value={formData.NumberOfTimesDonatedInCampus}
                      placeholder="Enter Count"
                      type="number"
                      onChange={handleInputChange}
                      validate={{ required: { value: true } }}
                    />
                  </Col>
                  <Col>
                    <AvField
                      name="NumberOfTimesDonatedOutside"
                      label="Times Donated Outside"
                      value={formData.NumberOfTimesDonatedOutside}
                      placeholder="Enter Count"
                      type="number"
                      onChange={handleInputChange}
                      validate={{ required: { value: true } }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <AvField
                        name="Event Date"
                        label="Event Date"
                        // value={date}
                        placeholder="Enter Section"
                        // onChange={handleEventSelect}
                        value={moment(date).format("DD-MM-YYYY")}
                        validate={{ required: { value: true } }}
                        readOnly
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <AvField
                      name="Address"
                      label="Address"
                      value={formData.Address}
                      placeholder="Enter Address"
                      onChange={handleInputChange}
                      validate={{ required: { value: true } }}
                    />
                  </Col>
                  {/* <Col> */}
                  {/* <FormGroup>
                                            <Label>Venue</Label>
                                            <Select
                                                options={venueOptions}
                                                placeholder="Select Venue"
                                                value={formData.Venue}
                                                onChange={(selected) => handleSelectChange(selected, "Venue")}
                                                isClearable
                                                styles={customStyles}
                                            />
                                        </FormGroup> */}
                  {/* </Col> */}
                </Row>
                <Row>
                  <Col>
                    <hr style={{ border: "2px solid gray" }} />
                  </Col>
                </Row>
                <CardTitle
                  className="form-title"
                  style={{
                    textAlign: "center",
                    fontSize: "25px",
                    fontWeight: "bolder",
                  }}
                >
                  Event Details
                </CardTitle>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label>College</Label>
                      <Select
                        options={collegeOptions} // Dropdown options for colleges
                        placeholder="Select College"
                        value={collegeOptions.find(
                          (college) => college.value === formData.CollegeEvent
                        )} // Match selected college by its value
                        onChange={(selected) =>
                          handleSelectChangeEvent(selected, "CollegeEvent")
                        }
                        isClearable
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>Venue</Label>
                      <Select
                        options={venueOption} // Dropdown options for venues based on selected college
                        placeholder="Select Venue"
                        value={venueOption.find(
                          (venue) => venue.value === formData.Venue
                        )} // Match selected venue by its value
                        onChange={(selected) =>
                          handleSelectChangeEvent(selected, "Venue")
                        }
                        isClearable
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label>Name of the Blood Bank</Label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.BloodBank || ""}
                        readOnly
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label>Room No</Label>
                      <input
                        type="text"
                        className="form-control"
                        value={formData.Room || ""}
                        readOnly
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup className="form-buttons">
                  <Button
                    className="submit-button"
                    color="success"
                    type="submit"
                    style={{
                      backgroundColor: "#33f474",
                      border: "1px solid gray",
                    }}
                  >
                    Submit
                  </Button>
                  <Button color="secondary" type="reset" onClick={resetForm}>
                    Reset
                  </Button>
                </FormGroup>
              </AvForm>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}

export default StudentForm;
