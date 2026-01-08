import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TeamSection = (props) => {
    const port = process.env.REACT_APP_SERVER_PORT;

    const [volunteersData, setVolunteersData] = useState([]);

    useEffect(() => {

        const fun = async () => {
            await axios.get(port + "volunteers-data").then((result) => {
                // console.log(result.data);
                setVolunteersData(result.data);
            });
        }
        fun();

    }, []);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <section className="volunteersSection pb-120 pt-120">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sectionTitle text-center mb-70">
                            <span className="sectionTitle__small justify-content-center">
                                <i className="fa-solid fa-heart btn__icon"></i>
                                We Change Your Life & World
                            </span>
                            <h2 className="sectionTitle__big">Meet Our Volunteers</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {/* Map through volunteerData array */}
                    {volunteersData.map((volunteer, index) => (
                        <div className="col-lg-3 col-md-6 mb-45" key={index}>
                            <div className="volunteerBlock text-center">
                                <figure className="volunteerBlock__figure">
                                    <img className="volunteerBlock__figure__thumb" src={`https://info.aec.edu.in/adityacentral/studentphotos/${volunteer.Id}.jpg`} alt="Our Volunteers" />
                                </figure>
                                <div className="volunteerBlock__content">
                                    <h3 className="volunteerBlock__name text-uppercase text-center">
                                        {volunteer.Name}
                                    </h3>
                                    <div className="itSocial itSocial--volunteer">
                                        <ul>
                                            <li>
                                                <div className='volunteerRollNumber'>{volunteer.Id}</div>
                                            </li>
                                            <li>
                                                <a href={volunteer.LinkedInProfile} target="_blank" rel="noopener noreferrer">
                                                    <i className="fab fa-linkedin fa-circle"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default TeamSection;
