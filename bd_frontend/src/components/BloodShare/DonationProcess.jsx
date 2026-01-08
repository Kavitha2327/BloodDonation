import React from "react";
import "./DonationProcess.css";

// Component to render individual donation process step
function DonationProcessStep({ heading, matter, isLeft }) {
    return (
        <div className="donationProcessStruct">
            {isLeft ? (
                <div className="donationProcessLeftOut">
                    <div className="donationProcessLeftOutFull">
                        <div className="donationProcessLeftOutHead">
                            <h6>{heading}</h6>
                        </div>
                        <div className="donationProcessLeftOutMat">
                            <p>{matter}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="donationProcessRightOut">
                    <div className="donationProcessRightOutFull">
                        <div className="donationProcessRightOutHead">
                            <h6>{heading}</h6>
                        </div>
                        <div className="donationProcessRightOutMat">
                            <p>{matter}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function DonationProcess() {
    const DonationProcessDet = [
        {
            heading: "Registration",
            matter: "Provide personal information and complete a questionnaire about your medical history, recent travel, and lifestyle. This ensures you are eligible and safe to donate blood, both for you and the recipient."
        },
        {
            heading: "Health Screening",
            matter: "A health professional will check your blood pressure, pulse, temperature, and perform a hemoglobin test via a quick finger prick. This ensures you are fit to donate and have healthy red blood cell levels."
        },
        {
            heading: "Donation Preparation",
            matter: "You'll be seated comfortably, and your arm will be cleaned with antiseptic. A sterile needle is prepared, and the medical staff will explain the process before starting the donation."
        },
        {
            heading: "Blood Donation",
            matter: "The donation process takes about 8-10 minutes. A needle is inserted into your vein, and around 1 pint (470 ml) of blood is collected while you relax."
        },
        {
            heading: "Post-Donation Recovery",
            matter: "Once the needle is removed, a bandage is applied, and you will rest with light refreshments to help replenish your energy. This allows your body to begin the recovery process."
        },
        {
            heading: "Rest and Recovery",
            matter: "You will rest for 10-15 minutes under observation. Afterward, you are advised to avoid strenuous activities for the day and to stay hydrated for a smooth recovery."
        }
        
    ];

    return (
        <>
            <div className="forAbove"></div>
            <div className="donationProcessContainer">
                {/* <div className="donationProcessHead">
                    <h1>DONATION PROCESS</h1>
                </div> */}
                {
                    DonationProcessDet.map((step, index) => (
                        <DonationProcessStep
                            key={index}
                            heading={`${index + 1}.${step.heading}`}
                            matter={step.matter}
                            isLeft={index % 2 === 0}
                        />
                    ))
                }
            </div>
            <div className="forAbove forBelow"></div>
        </>

    );
}