import React, { useState } from "react";
import "./BloodShare.css";
import { CgProfile } from "react-icons/cg";
// import Bdimg from "./Images/udp6_muv3_230302.jpg";
import LearnBloodImg from "./Images/gtnu_c3uh_220606-removebg-preview.png";

import Donor from '../../assets/Donor.png';
import Reciever from '../../assets/Reciever.png';

export default function BloodShare() {
    const BloodShareData = [
        {
            
            group: "A+",
            take: "O+ O- A+ A-",
            give: "A+ AB+",
        },
        {
            // A-
            group: "A-",
            take: "O- A-",
            give: "A+ A- AB+ AB-",
        },
        {
            // B+
            group: "B+",
            take: "O+ O- B+ B-",
            give: "B+ AB+",
        },
        {
            // B-
            group: "B-",
            take: "O- B-",
            give: "B+ B- AB+ AB-",
        },
        {
            // AB+
            group: "AB+",
            take: "O+ O- A+ A- B+ B- AB+ AB-",
            give: "AB+",
        },
        {
            // AB-
            group: "AB-",
            take: "O- A- B- AB-",
            give: "AB+ AB-",
        },
        {
            // O+
            group: "O+",
            take: "O+ O-",
            give: "O+ A+ B+ AB+",
        },
        {
            // O-
            group: "O-",
            take: "O-",
            give: "O+ A+ B+ AB+ O- A- B- AB-",
        },
    ];

    const [selectedGroup, setSelectedGroup] = useState(BloodShareData[0]); // Default to the first blood group

    // Function to handle click on blood group
    const handleBloodGroupClick = (group) => {
        const selected = BloodShareData.find(bloodGroup => bloodGroup.group === group);
        setSelectedGroup(selected);
    };

    return (
        <>
            <div className="bloodShareHead">
                <span className="sectionTitle__small">
                    <i className="fa-solid fa-heart btn__icon"></i>
                    Learn About Donation
                </span>
                <h2>Learn About Donation</h2>
            </div>
            <div className="eachBloodGroupName">
                {
                    BloodShareData.map((bloodGroup, index) => (
                        <div
                            key={index}
                            className={`singleBloodGroup ${selectedGroup.group === bloodGroup.group ? 'active' : ''}`}
                            onClick={
                                () => handleBloodGroupClick(bloodGroup.group)
                            }
                        >
                            {bloodGroup.group}
                        </div>
                    ))
                }
            </div>
            <div className="bloodDataAndImg">
                <div className="bloodGroupTakeAndGive">
                    <div className="bloodGroupTake">
                        <div className="bloodGroupTakeIcon">
                            <img src={Reciever} alt=""  />
                        </div>
                        <div className="bloodGroupTakeMat">
                            <div className="bloodGroupTakeHead">
                                Can Recieve From:
                            </div>
                            <div className="bloodGroupTakeGroups">
                                {selectedGroup.take}
                            </div>
                        </div>
                    </div>
                    <div className="bloodGroupGive">
                        <div className="bloodGroupGiveIcon">
                            
                        <img src={Donor} alt=""  />
                        </div>
                        <div className="bloodGroupGiveMat">
                            <div className="bloodGroupGiveHead">
                                Can Donate To:
                            </div>
                            <div className="bloodGroupGiveGroups">
                                {selectedGroup.give}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bloodGroupImg">
                    {/* <img src={Bdimg} alt="No img" /> */}
                    <img src={LearnBloodImg} alt="No Image" />
                </div>
            </div>
        </>
    );
}
