import React from 'react';
import { Link } from 'react-router-dom';
import shape from '../../images/shapes/footerShape2.png';
import logo from '../../images/logos/logo_2.jpg';

import './footer.css'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const footerData = [
    {
        title: 'Home',
        link: '/blooddonation/home',
    },
    {
        title: 'Events',
        link: '/blooddonation/events',
    },
    {
        title: 'Statistics',
        link: '/blooddonation/stats',
    },
    {
        title: 'Donations',
        link: '/blooddonation/donation-listing',
        submenu: [
            {
                id: 31,
                title: 'Donations Process',
                link: '/blooddonation/donation-listing'
            },
            {
                id: 32,
                title: 'Our Volunteers',
                link: '/blooddonation/volunteers'
            }
        ]
    },
    {
        title: 'About',
        link: '/blooddonation/about',
    },
    {
        title: 'Contact',
        link: '/blooddonation/contact',
    }
];

const Footer = (props) => {
    return (
        <footer className="footer footer--bg footer--styleOne pt-70 pb-40">
            <img src={shape} alt="Gainioz Shape" className="footer__shape" />
            <div className="container">
                <div className="row align-items-center">
                    {/* <div className="col">
                        <div className="footer__logo">
                            <img src={logo} alt="Gainioz Logo" className="footer_logo_image" />
                        </div>
                    </div> */}
                    <div className="col">
                        <div className="footer__social itSocial">
                            <ul>
                                <li>
                                    <a
                                        className="facebook"
                                        href="https://www.facebook.com/technicalhubio/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="twitter"
                                        href="https://twitter.com/technicalhubio?t=5niR3EQITmZ2ksy3wC0yFA&s=09"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="instagram"
                                        href="https://www.instagram.com/technicalhubio?utm_medium=copy_link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="linkedin"
                                        href="https://www.linkedin.com/company/technicalhub"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="youtube"
                                        href="https://www.youtube.com/channel/UCMNULLz42OXFrQvHnX7NANQ"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-12">
                        <hr className="footer__line" />
                    </div>
                </div>
                <div className="row">
                    <div className="footer__middle pt-65 pb-35">
                        <div className="row justify-content-between">
                            {footerData.map((item, index) => (
                                <div className="col-lg-2 col-md-4 mb-30" key={index}>
                                    <div className="footer__widget">
                                        <div className="footer__title">
                                            <h2 className="footer__heading text-uppercase text-white">
                                                <Link onClick={ClickHandler} to={item.link}>{item.title}</Link>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="footer__bottom">
                        <div className="row">
                            <div className="col-12">
                                <hr className="footer__line" />
                            </div>
                            <div className="col mb-20">
                                <div className="footer__copyright pt-20 myfooter" >
                                    {/* <p className="footer_copyright_text mb-0"><center>Copyright@2024 , Blood Donation Team, Designed By Technical Hub</center></p> */}

                                    <div className='foooter-left'>{new Date().getFullYear()} © Technical Hub.</div>
                                    <div className='footer-middle'>Provided by <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAABQCAYAAACj6kh7AAAACXBIWXMAAC4jAAAuIwF4pT92AAAGMWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDAgNzkuMTcxYzI3ZiwgMjAyMi8wOC8xNi0xODowMjo0MyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjEgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMy0wMS0yNFQxNDo1MjoxOSswNTozMCIgeG1wOk1vZGlmeURhdGU9IjIwMjMtMDEtMjRUMTU6MTc6NDgrMDU6MzAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjMtMDEtMjRUMTU6MTc6NDgrMDU6MzAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjExMDlmZWFjLWI0ZjUtNmI0My05YTEzLTQxMGQzMzk4ZmQ1MiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjIwNGE3OTY3LTU0ZTAtMGU0NS05NDM3LTQxZDFlY2Y0N2YzOCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjg1YjI4NjRkLTdkOGYtMTU0ZC1hOGY4LWUwYTEwNmEyMDM1NiI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ODViMjg2NGQtN2Q4Zi0xNTRkLWE4ZjgtZTBhMTA2YTIwMzU2IiBzdEV2dDp3aGVuPSIyMDIzLTAxLTI0VDE0OjUyOjE5KzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjQuMSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MTEwOWZlYWMtYjRmNS02YjQzLTlhMTMtNDEwZDMzOThmZDUyIiBzdEV2dDp3aGVuPSIyMDIzLTAxLTI0VDE1OjE3OjQ4KzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgMjQuMSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+KfZwTgAACfBJREFUeJzt3X3sHEUdx/H3zy0UKNJKVUCpRQSNUrAVrKwJllAKGisSRBBRQ4AUglBB0TqoyINmNSVQCIqVQhUxBA1PasJDRWlAR41KqVSiAaQ8VAQK/dVSaelw/jF7dm9v73bvkd/Uzyv5pbczs7NzT9/bnYftSK1WQ0QkBK95tRsgIlKVApaIBEMBS0SCoYAl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" alt="logo" style={{ width: "180px" }} /> </div>
                                    <div className='footer-right' style={{ textAlign: "center" }}>Crafted with ❤️ by Blood Donation Developer's Team</div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;