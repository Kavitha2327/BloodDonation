import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { toast, Toaster } from 'react-hot-toast'; // Import react-hot-toast
import axios from 'axios';

const ContactForm = (props) => {

    const port = process.env.REACT_APP_SERVER_PORT;


    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value });
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            // Log form data to the console
            const fun = async () => {
                const response = await axios.post(port + 'contact', forms);
                // console.log(response)
            }
            fun();

            // console.log('Form Submitted:', forms);

            // Show success toast
            toast.success('Your message has been sent successfully!'); // Display success toast

            validator.hideMessages();
            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
            });
        } else {
            validator.showMessages();
        }
    };

    return (
        <>
            <Toaster /> {/* Toast notifications will appear here */}
            <form id="contact-form" className="it-contact-form commentsPost commentsPost--style2 pt-45 pb-25" onSubmit={(e) => submitHandler(e)}>
                <div className="row g-4">
                    <div className="col-md-6">
                        <div className="commentsPost__input">
                            <input
                                value={forms.name}
                                type="text"
                                name="name"
                                className="form-control"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="Enter your name*" />
                            {validator.message('name', forms.name, 'required|alpha_space')}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="commentsPost__input">
                            <input
                                value={forms.email}
                                type="email"
                                name="email"
                                className="form-control"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="Enter your email*" />
                            {validator.message('email', forms.email, 'required|email')}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="commentsPost__input">
                            <input
                                value={forms.phone}
                                type="phone"
                                name="phone"
                                className="form-control"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="Enter your number*" />
                            {validator.message('phone', forms.phone, 'required|phone')}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="commentsPost__input">
                            <input
                                value={forms.subject}
                                type="text"
                                name="subject"
                                className="form-control"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="Subject*" />
                            {validator.message('subject', forms.subject, 'required')}
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="commentsPost__input">
                            <textarea
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                value={forms.message}
                                type="text"
                                name="message"
                                className="form-control"
                                placeholder="Enter your Message*">
                            </textarea>
                            {validator.message('message', forms.message, 'required')}
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="commentsPost__check">
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Save my name, email, and website in this browser for the next time I comment.</label>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="commentsPost__button text-center">
                            <button type="submit" className="btn btn--styleOne btn--primary it-btn">
                                <span className="btn__text">Send message</span>
                                <i className="fa-solid fa-heart btn__icon"></i>
                                <span className="it-btn__inner">
                                    <span className="it-btn__blobs">
                                        <span className="it-btn__blob"></span>
                                        <span className="it-btn__blob"></span>
                                        <span className="it-btn__blob"></span>
                                        <span className="it-btn__blob"></span>
                                    </span>
                                </span>
                                <svg className="it-btn__animation" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    <defs>
                                        <filter>
                                            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
                                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo">
                                            </feColorMatrix>
                                            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
                                        </filter>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="form-response"></div>
            </form>
        </>
    );
};

export default ContactForm;
