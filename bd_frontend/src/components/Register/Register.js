import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { toast, Toaster } from 'react-hot-toast'; // Import react-hot-toast

const BloodDonationForm = () => {

    const [forms, setForms] = useState({
        name: '',
        rollNumber: '',
        phone: '',
        otp: '',
        email: '',
        bloodGroup: ''
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
            // console.log('Form Submitted:', forms);

            // Show success toast
            toast.success('Your registration has been submitted successfully!');

            validator.hideMessages();
            setForms({
                name: '',
                rollNumber: '',
                phone: '',
                otp: '',
                email: '',
                bloodGroup: ''
            });
        } else {
            validator.showMessages();
        }
    };

    return (
        <>
            <Toaster /> {/* Toast notifications will appear here */}
            <form id="blood-donation-form" className="it-contact-form commentsPost commentsPost--style2 pt-45 pb-25" onSubmit={(e) => submitHandler(e)}>
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
                                value={forms.rollNumber}
                                type="text"
                                name="rollNumber"
                                className="form-control"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="Enter your roll number*" />
                            {validator.message('rollNumber', forms.rollNumber, 'required|alpha_num')}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="commentsPost__input">
                            <input
                                value={forms.phone}
                                type="tel"
                                name="phone"
                                className="form-control"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="Enter your phone number*" />
                            {validator.message('phone', forms.phone, 'required|phone')}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="commentsPost__input">
                            <input
                                value={forms.otp}
                                type="text"
                                name="otp"
                                className="form-control"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                                placeholder="Enter your OTP*" />
                            {validator.message('otp', forms.otp, 'required|numeric')}
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
                            <select
                                value={forms.bloodGroup}
                                name="bloodGroup"
                                className="form-control"
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            >
                                <option value="">Select your blood group*</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </select>
                            {validator.message('bloodGroup', forms.bloodGroup, 'required')}
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="commentsPost__button text-center">
                            <button type="submit" className="btn btn--styleOne btn--primary it-btn">
                                <span className="btn__text">Register</span>
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
                                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
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

export default BloodDonationForm;
