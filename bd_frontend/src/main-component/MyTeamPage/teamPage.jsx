import React from "react";
import './teamPage.css';
import { FaLinkedinIn } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
// import Veda from '../../assets/veda.jpg';
import Veda from '../../assets/BloodGroup2.jpg';

const TheTeamPage = () => {
  const teamData = [
    {
      name: "Siddhardha Reddy Dakkata",
      image: require("../../assets/e5.png"),
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/siddardha-reddy-dakkata-713b13230/",
        email: "mailto:siddardhareddy2005@gmail.com",  // ✅ Fixed with mailto:
        github: "https://github.com/siddardha-reddy-dakkata"
      }
    },
    {
      name: "Rajesh Yelisetti",
      image: require("../../assets/j6.png"),
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/22a91a61j6",
        email: "mailto:rajeshyelisetti98@gmail.com", // ✅ Fixed with mailto:
        github: "https://github.com/22a91a61j6"
      }
    },
    {
      name: "Vivek Kumar",
      image: require("../../assets/vivek_kumar.png"),
      socialLinks: {
        linkedin: "https://in.linkedin.com/in/vivek-kumar-472592258",
        email: "mailto:vks7633a@gmail.com", // ✅ Fixed with mailto:
        github: "https://github.com/2004vivek"
      }
    },
    {
      name: "Sandya Durga",
      image: require("../../assets/sandya.png"),
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/sandhya-geddada-157176258/",
        email: "mailto:sandhyadurga881@gmail.com", // ✅ Fixed with mailto:
        github: "https://github.com/sandhya-durga-geddada"
      }
    },
    {
      name: "Suma Latha",
      image: require("../../assets/suma_latha.png"),
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/suma-latha-reddy-dwarampudi-b90399315/",
        email: "mailto:kumarjitendra6839@gmial.com", // ✅ Fixed with mailto:
        github: "https://github.com/Jitendrakumar99"
      }
    },
    {
      name: "Jitendra Kumar",
      image: require("../../assets/jitendra_kumar.png"),
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/jitendra-kumar-530b78260/",
        email: "mailto:kumarjitendra6839@gmial.com", // ✅ Fixed with mailto:
        github: "https://github.com/Jitendrakumar99"
      }
    },
    {
      name: "Charan Raju",
      image: require("../../assets/charan_raju.png"),
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/charan-raju-pakalapati-74416629b/",
        email: "mailto:charanraju925@gmail.com", // ✅ Fixed with mailto:
        github: "https://github.com/Charanraju18"
      }
    },
  ];

  return (
    <div className="teamPageContainer">
      <div className="TeamPageUp">

        <span className="sectionTitle__small justify-content-center TeamPageTitle">
          <i className="fa-solid fa-heart btn__icon"></i>
          Meet Our Team
        </span>
        <h2 className="sectionTitle__big">We Are The Creators !</h2>
        <div className="forTeamIndividual">
          <div className="teamImageOut">
            <img src={Veda} alt={'No veda img'}/>
          </div>
        </div>
      </div>
      <div className="teamIndividualHeading">
        <div className="teamIndividualHeadingIn">
          <h3 className="teamIndividualHeadingText">Developer Community :</h3>
        </div>
      </div>
      <div className="TeamPageDown">
        <div className="teamPageDownIn">
          {teamData.map((member, index) => (
            <div key={index} className="totalTealIndividual">
              <div className="teamCardOut">
                <div className="memberNavOPtion">
                <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="linkedInData iconData">
                  <div>
                      <FaLinkedinIn />
                  </div>
                  </a>
                  <a href={member.socialLinks.email} target="_blank" rel="noopener noreferrer" className="mailData iconData">
                  <div>
                      <MdAttachEmail />
                  </div>
                  </a>
                  <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" className="githubData iconData">
                  <div>
                      <FaGithub />
                  </div>
                  </a>
                </div>
                <div className="teamCardIn">
                  <img src={member.image} alt={member.name} />
                </div>
              </div>
              <div className="teamMemberGapOut">
                <div className="teamMemberNameGap"></div>
              </div>
              <div className="teamMemberNameOut">
                <div className="teamMemberName">{member.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TheTeamPage;
