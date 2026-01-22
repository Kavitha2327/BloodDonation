import React, { useState, useEffect } from "react";
import axios from "axios";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Row, Col, Button, Card, CardBody, CardTitle, Label, FormGroup } from "reactstrap";
import Select from "react-select";
import "./StudentForm.css"; // Custom CSS for styling
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";



function ManagementAndGuestForm() {
  var { date } = useParams();

  date = JSON.parse(date);

  const [formData, setFormData] = useState({
    Name: "",
    MobileNumber: "",
    Email: "",
    TypeOfDonor: "",
    BloodGroup: "",
    Gender: "",
    NumberOfTimesDonatedInCampus: "",
    NumberOfTimesDonatedOutside: "",
    EventDate: date.split("-").reverse().join("-"),
    Address: "",
    CollegeEvent: null,
    BloodBank: null,
    Venue: null,
    Room: null,
  });


  // const [eventOptions, setEventOptions] = useState([]);

  const [venueData, setVenueData] = useState([]);
  const [eventColleges, setEventColleges] = useState([]);
  const [selectedCollegeData, setSelectedCollegeData] = useState(null);
  const [venueOptions, setVenueOptions] = useState([]);
  // const port = import.meta.env.REACT_APP_SERVER_PORT;

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

  const handleEventSelect = (selectedEvent) => {
  // This function is kept for backward compatibility but now uses dynamic data
  console.log("Event selected:", selectedEvent);
};

const handleInputChange = (event) => {
  const { name, value } = event.target;
  setFormData({ ...formData, [name]: value });
};

const handleSelectChange = (selectedOption, name) => {
  setFormData({ ...formData, [name]: selectedOption });
};

const handleSubmit = () => {

  if (!formData.TypeOfDonor || formData.TypeOfDonor == "") {
    toast.error("Please select Type of Donor");
    return;
  }

  else if (!formData.BloodGroup || formData.BloodGroup == "") {
    toast.error("Please select Blood Group");
    return;
  }
  else if (!formData.Gender || formData.Gender == "") {
    toast.error("Please select Gender");
    return;
  }
  // else if (!formData.Venue || formData.Venue == "") {
  //     toast.error("Please select Venue");
  //     return;
  // }
  // else if (formData.BloodGroup == "" || formData.Gender == ""  || formData.Venue == "") {
  //     toast.error("Please fill all the required fields before submitting.");
  //     return;
  // }

  const submitData = {
    ...formData,
    College: formData.College?.value || "",
    BloodGroup: formData.BloodGroup?.value || "",
    Gender: formData.Gender?.value.trim().toUpperCase() || "",
    EventDate: date, // Send full EventDate object
    // Venue: formData.Venue?.value || "",
    Address: formData.Address || "",
    TypeOfDonor: formData.TypeOfDonor?.value || "",
  };

  console.log("FormData for submission:", submitData);




  const submittedData = async () => {
    try {
      const response = await axios.post(port + "add-management-guest-data  ", submitData);
      console.log(response.data);


      if (response.status == 200) {
        toast.success("Submitted successfully");
        resetForm();

        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    } catch (error) {
      console.error("Error submitting form:", error.response.data || error.message);
      toast.error("Failed to submit the form!");
    }
  };
  submittedData();
};

const resetForm = () => {
  window.location.reload();
  // setFormData({
  //     Name: "",
  //     MobileNumber: "",
  //     Email: "",
  //     TypeOfDonor: "",
  //     BloodGroup: "",
  //     Gender: "",
  //     NumberOfTimesDonatedInCampus: "",
  //     NumberOfTimesDonatedOutside: "",
  //     EventDate: "",
  //     Venue: "",
  // });
};

const options = {
  typeOfDonorOptions: [
    { value: "Management", label: "Management" },
    { value: "Guest", label: "Guest" },
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

  return (
    <>
      <Toaster />
      <div className="main-title">
        <h3 style={{ marginBottom: "20px" }} className="heading1">Management & Guest Donor</h3>
      </div>
    <div className="form-container" style={{ padding: "20px" }}>
      <Card>
        <CardBody>
          <center>
            <CardTitle
              className="form-title"
              style={{
                textAlign: "center",
                fontSize: "25px",
                fontWeight: "bolder",
              }}
            >
              Management & Guest Blood Donation Form
            </CardTitle>
          </center>
          <AvForm onValidSubmit={handleSubmit}>
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
                    pattern: { value: "^[a-zA-Z ]+$", errorMessage: "Only letters allowed" },
                  }}
                />
              </Col>
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
                    pattern: { value: "^[0-9]{10}$", errorMessage: "Enter a valid 10-digit number" },
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <AvField
                  name="Email"
                  label="Email"
                  value={formData.Email}
                  placeholder="Enter Email"
                  type="email"
                  onChange={handleInputChange}
                  validate={{ required: { value: true }, email: { value: true } }}
                />
              </Col>
              <Col>
                <FormGroup>
                  <Label>Type of Donor</Label>
                  <Select
                    options={options.typeOfDonorOptions}
                    placeholder="Select Type of Donor"
                    onChange={(selected) => handleSelectChange(selected, "TypeOfDonor")}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label>Blood Group</Label>
                  <Select
                    options={options.bloodGroupOptions}
                    placeholder="Select Blood Group"
                    onChange={(selected) => handleSelectChange(selected, "BloodGroup")}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Gender</Label>
                  <Select
                    options={options.genderOptions}
                    placeholder="Select Gender"
                    onChange={(selected) => handleSelectChange(selected, "Gender")}
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
                    onChange={handleEventSelect}
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
                color="success"
                type="submit"
                style={{ marginRight: "10px", backgroundColor: "#33f474", border: "1px solid gray" }}
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
  </>
  );
}

export default ManagementAndGuestForm;
