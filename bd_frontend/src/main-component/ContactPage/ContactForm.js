import './contactForm.css';
import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast'; // Import react-hot-toast
import axios from 'axios';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const port = process.env.REACT_APP_SERVER_PORT;


    const handleSubmit = (e) => {
        e.preventDefault();
        // You can handle the form submission here, e.g., sending it to an API
        const fun = async () => {
            const response = await axios.post( port + 'contact', formData);
            // console.log(response)
        }
        fun();
        console.log('Form Submitted:', formData);

        // Show success toast
        toast.success('Your message has been sent successfully!');

        // console.log('Form Data:', formData);





        
        // alert('Your message has been submitted');
        // Reset the form fields
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
        <>
            <Toaster />
            <div className='headForContact'>
                <span className="sectionTitle__small">
                    <i className="fa-solid fa-heart btn__icon"></i>
                    Contact Us Here
                </span>
                <h2>Leave A Message Here</h2>
            </div>
            <div className="form-container">
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
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Subject</label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            required
                        ></textarea>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

export default Form;