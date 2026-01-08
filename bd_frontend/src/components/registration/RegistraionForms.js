import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './registrationForm.css';
import axios from 'axios';

import { useEffect } from 'react';

import moment from 'moment/moment';

const RegistrationForm = () => {
    const port = process.env.REACT_APP_SERVER_PORT;

    const [formData, setFormData] = useState({
        name: '',
        rollNumber: '',
        college: '',
        phone: '',
        otp: ''
    });

    const [otpSent, setOtpSent] = useState(false);
    const [eventDate, setEventDate] = useState(null);


    useEffect(() => {
        const fun = (async () => {
            try {
                const response = await axios.get(port + 'get-upcoming-event');

                if (response.status === 200) {
                    setEventDate(response.data);
                }
                console.log(response.data);
            }
            catch(e) {
                console.log(e);
            }
        });
        fun();
    }, [])






    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const [otpButtonDisabled, setOtpButtonDisabled] = useState(false);

    const handleSendOTP = () => {
        if (!formData.phone) {
            toast.error('Please enter a phone number before sending OTP');
            return;
        }
    
        if (!/^\d{10}$/.test(formData.phone)) {
            toast.error('Phone number must be exactly 10 digits');
            return;
        }
        try {
            const fun = async () => {
                try {
                    const response = await axios.post(port + "send-otp", {
                        phoneNumber: formData.phone
                    });

                    if (response.status === 200) {
                        toast.success('OTP sent successfully!');
                        setOtpSent(true);
                        setOtpButtonDisabled(true); // Disable the button after sending OTP
                    } else {
                        toast.error('Failed to send OTP');
                    }
                } catch (err) {
                    console.error(err);
                    toast.error('Failed to send OTP');
                }
            };
            fun();
        } catch (e) {
            toast.error('Failed to send OTP');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!otpSent) {
            toast.error('Please verify your phone number by entering the OTP');
            return;
        }

        try {
            const fun = async () => {
                const sentData = {
                    phoneNumber: formData.phone,
                    otp: formData.otp
                };

                try {
                    const response = await axios.post(port + "verify-otp", sentData);

                    if (response.status === 200) {
                        try {
                            const registrationResponse = await axios.post(port + "register", {
                                RollNumber: formData.rollNumber,
                                PhoneNumber: formData.phone,
                                EventDate: eventDate.Date
                            });

                            if (registrationResponse.status === 200) {
                                toast.success('Registration submitted successfully!');

                                // Reset the form fields
                                setFormData({
                                    name: '',
                                    rollNumber: '',
                                    college: '',
                                    phone: '',
                                    otp: ''
                                });
                                setOtpSent(false);
                                setOtpButtonDisabled(false); // Re-enable the button after successful submission
                            }
                            else  {
                                toast.success('Student is already registered');
                                setFormData({
                                    name: '',
                                    rollNumber: '',
                                    college: '',
                                    phone: '',
                                    otp: ''
                                });
                                setOtpSent(false);
                                setOtpButtonDisabled(false);
                            }
                        } catch (e) {
                            console.log(e);
                            toast.error('Failed to register');
                        }
                    } else {
                        toast.error('Invalid OTP');
                        setOtpButtonDisabled(false); // Re-enable the button if OTP verification fails
                    }
                } catch (error) {
                    console.log('Error during request:', error.response?.data || error.message);
                    toast.error('Invalid OTP');
                    setOtpButtonDisabled(false); // Re-enable the button if OTP verification fails
                }
            };
            fun();
        } catch (e) {
            console.log(e);
        }
    };


    // const handleSendOTP = () => {
    //     if (!formData.phone) {
    //         toast.error('Please enter a phone number before sending OTP');
    //         return;
    //     }

    //     // Simulate OTP send
    //     // console.log(`Sending OTP to ${formData.phone}`);

    //     try {
    //         const fun = async () => {
    //             try {
    //                 const response = await axios.post(port + "send-otp", {
    //                     phoneNumber: formData.phone
    //                 });
    //                 // console.log(response);

    //                 if (response.status == 200) {
    //                     toast.success('OTP sent successfully!');
    //                     setOtpSent(true);
    //                 }
    //                 else {
    //                     toast.error('Failed to send OTP');
    //                 }
    //             }
    //             catch (err) {
    //                 console.error(err);
    //                 toast.error('Failed to send otp');
    //             }
    //         }
    //         fun();

    //     }
    //     catch (e) {
    //         toast.error('Failed to send OTP');
    //     }

    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     if (!otpSent) {
    //         toast.error('Please verify your phone number by entering the OTP');
    //         return;
    //     }

    //     // Simulate form submission
    //     // console.log('Form Data:', formData);


    //     try {
    //         const fun = async () => {

    //             const sentData = {
    //                 phoneNumber: formData.phone,
    //                 otp: formData.otp
    //             };
    //             var response;

    //             try {
    //                 response = await axios.post(port + "verify-otp", sentData);
    //                 // console.log('Response:', response.data);


    //                 if (response.status == 200) {
    //                     try {
    //                         var response = await axios.post(port + "register", {
    //                             RollNumber: formData.rollNumber,
    //                             PhoneNumber: formData.phone
    //                         })
    //                         // console.log(response);

    //                         toast.success('Registration submitted successfully!');

    //                         // Reset the form fields
    //                         setFormData({
    //                             name: '',
    //                             rollNumber: '',
    //                             college: '',
    //                             phone: '',
    //                             otp: ''
    //                         });
    //                         setOtpSent(false);
    //                     }
    //                     catch (e) {
    //                         console.log(e);
    //                         toast.error('Failed to register');
    //                     }
    //                 }


    //             } catch (error) {
    //                 console.log('Error during request:', error.response?.data || error.message);
    //             }
    //         }
    //         fun();
    //     }
    //     catch (e) {
    //         console.log(e);
    //     }        
    // };

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <div className="headForContact">
                <span className="sectionTitle__small">
                    <i className="fa-solid fa-user btn__icon"></i>
                    Registration
                </span>
                {eventDate && <h2>Fill Your Details</h2>}
            </div>
            {eventDate && <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Roll Number</label>
                        <input
                            type="text"
                            name="rollNumber"
                            value={formData.rollNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>College</label>
                        <input
                            type="text"
                            name="college"
                            value={formData.college}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Upcoming Event</label>
                        <div className="input-with-icon">
                            <input
                                type="text"
                                name="college"
                                value={moment(eventDate.Date).format("DD-MM-YYYY") + "    |    " + eventDate.EventName}
                                required
                                readOnly
                                className="read-only-input"
                                title="This field is read-only"
                            />
                            <i
                                className="fa fa-info-circle"
                                title="This field is read-only"
                            ></i>
                        </div>
                    </div>


                    <div className="form-group">
                        <label>Phone Number</label>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                style={{ flex: 1 }}
                            />
                            <button
                                type="button"
                                onClick={handleSendOTP}
                                className="otp-button"
                                disabled={otpButtonDisabled} // Disable the button if OTP has been sent
                            >
                                Send OTP
                            </button>


                        </div>
                    </div>

                    {otpSent && (
                        <div className="form-group">
                            <label>Enter OTP</label>
                            <input
                                type="text"
                                name="otp"
                                value={formData.otp}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}

                    <button type="submit">Submit</button>
                </form>
            </div>}

            {!eventDate && <div className='form-container' style={{ height: "300px", display: "flex", alignItems: "center", justifyContent: "center", color: "black", fontSize: "30px", wordSpacing: "5px" }}>NO UPCOMING EVENTS TO REGISTER</div>}
        </>
    );
};

export default RegistrationForm;
