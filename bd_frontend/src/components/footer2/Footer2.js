import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logos/logo_2.svg'
// import team1 from '../../images/update/team-small-1.jpg'
// import team2 from '../../images/update/team-small-2.jpg'
// import team3 from '../../images/update/team-small-3.jpg'
// import team4 from '../../images/update/team-small-4.jpg'
// import team5 from '../../images/update/team-small-5.jpg'
// import team6 from '../../images/update/team-small-6.jpg'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}


const Footer2 = (props) => {
    return (
        <footer className="footer-section">
            <div className="footer-main pt-95 pb-70">
                <div className="container overflow-hidden">
                    <div className="footer-nav pb-50">
                        <div className="row g-5">
                            <div className="col-md-6 mb-30">
                                <Link onClick={ClickHandler} to="/"><img src={logo} alt="" /></Link>
                            </div>
                            <div className="col-md-6 d-flex align-items-center justify-content-xl-end mb-30">
                                <ul className="footer-nav__list">
                                    <li className="footer-nav__item">
                                        <Link onClick={ClickHandler} to="/home-4" className="footer-nav__link">About</Link>
                                    </li>
                                    <li className="footer-nav__item">
                                        <Link onClick={ClickHandler} to="/home-4" className="footer-nav__link">Careers</Link>
                                    </li>
                                    <li className="footer-nav__item">
                                        <Link onClick={ClickHandler} to="/home-4" className="footer-nav__link">Financial</Link>
                                    </li>
                                    <li className="footer-nav__item">
                                        <Link onClick={ClickHandler} to="/home-4" className="footer-nav__link">Contact Us</Link>
                                    </li>
                                    <li className="footer-nav__item">
                                        <Link onClick={ClickHandler} to="/home-4" className="footer-nav__link">Privacy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-between">
                        <div className="col-lg-3 mb-30">
                            <h4 className="heading--tertiary mb-4 ff-primary">Contact Us</h4>
                            <ul className="footer-list mb-30">
                                <li>
                                    <Link onClick={ClickHandler} to="/home-4">House #14, Road # 1, Dhanmondi R/A, Dhaka-1205, Bangladesh</Link>
                                </li>
                                <li>
                                    Phone: <Link onClick={ClickHandler} to="/home-4">+88017858000001</Link>
                                </li>
                                <li>
                                    Email: <Link onClick={ClickHandler} to="/home-4">info@medikeyaan.com</Link>
                                </li>
                            </ul>
                            <div className="footer__social itSocial mb-0 text-start">
                                <ul>
                                    <li>
                                        <Link onClick={ClickHandler} className="facebook" to="/home-4" rel="nofollow">
                                            <i className="fab fa-facebook-f"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} className="twitter" to="/home-4" rel="nofollow">
                                            <i className="fab fa-twitter"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} className="instagram" to="/home-4" rel="nofollow">
                                            <i className="fab fa-instagram"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} className="linkedin" to="/home-4" rel="nofollow">
                                            <i className="fab fa-linkedin-in"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} className="pinterest" to="/home-4" rel="nofollow">
                                            <i className="fab fa-pinterest-p"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 mb-30">
                            <h4 className="heading--tertiary mb-4 ff-primary">ABOUT US</h4>
                            <ul className="footer-list">
                                <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                                <li><Link onClick={ClickHandler} to="/service">Service</Link></li>
                                <li><Link onClick={ClickHandler} to="/donation-listing">Donation</Link></li>
                                <li><Link onClick={ClickHandler} to="/donation-listing">Privacy</Link></li>
                                <li><Link onClick={ClickHandler} to="/donation-listing">Policy</Link></li>
                                <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 mb-30">
                            <h4 className="heading--tertiary mb-4 ff-primary">SUPPORT US</h4>
                            <ul className="footer-list">
                                <li><Link onClick={ClickHandler} to="/donation-listing">Donate Now</Link></li>
                                <li><Link onClick={ClickHandler} to="/products">Store</Link></li>
                                <li><Link onClick={ClickHandler} to="/contact">Reports</Link></li>
                                <li><Link onClick={ClickHandler} to="/home-4">Press Releases</Link></li>
                                <li><Link onClick={ClickHandler} to="/contact">Privacy & Policy</Link></li>
                                <li><Link onClick={ClickHandler} to="/donation-listing">Fundraiser</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 mb-30">
                            <h4 className="heading--tertiary mb-4 ff-primary">SUPPORT US</h4>
                            <ul className="footer-list">
                                <li><Link onClick={ClickHandler} to="/donation-listing">Donate Now</Link></li>
                                <li><Link onClick={ClickHandler} to="/products">Store</Link></li>
                                <li><Link onClick={ClickHandler} to="/contact">Reports</Link></li>
                                <li><Link onClick={ClickHandler} to="/home-4">Press Releases</Link></li>
                                <li><Link onClick={ClickHandler} to="/contact">Privacy & Policy</Link></li>
                                <li><Link onClick={ClickHandler} to="/donation-listing">Fundraiser</Link></li>
                            </ul>
                        </div>
                        
                        {/* <div className="col-lg-3 mb-30">
                            <h4 className="heading--tertiary mb-4 ff-primary">Instagram Hits</h4>
                            <div className="row g-3 mt-3">
                                <div className="col-6 col-sm-4">
                                    <Link onClick={ClickHandler} to="/home-4" className="w-100">
                                        <img src={team1} className="w-100" alt="" />
                                    </Link>
                                </div>
                                <div className="col-6 col-sm-4">
                                    <Link onClick={ClickHandler} to="/home-4" className="w-100">
                                        <img src={team2} className="w-100" alt="" />
                                    </Link>
                                </div>
                                <div className="col-6 col-sm-4">
                                    <Link onClick={ClickHandler} to="/home-4" className="w-100">
                                        <img src={team3} className="w-100" alt="" />
                                    </Link>
                                </div>
                                <div className="col-6 col-sm-4">
                                    <Link onClick={ClickHandler} to="/home-4" className="w-100">
                                        <img src={team4} className="w-100" alt="" />
                                    </Link>
                                </div>
                                <div className="col-6 col-sm-4">
                                    <Link onClick={ClickHandler} to="/home-4" className="w-100">
                                        <img src={team5} className="w-100" alt="" />
                                    </Link>
                                </div>
                                <div className="col-6 col-sm-4">
                                    <Link onClick={ClickHandler} to="/home-4" className="w-100">
                                        <img src={team6} className="w-100" alt="" />
                                    </Link>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                Copyright © 2024 All Rights Reserved passion by <Link onClick={ClickHandler} to="/home-4">XpressBuddy</Link>
            </div>
        </footer>
    )
}

export default Footer2;