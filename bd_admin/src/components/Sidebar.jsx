import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillGrid3X3GapFill,
  BsListCheck,
  BsMenuButtonWideFill,
} from "react-icons/bs";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { TbArrowLeftToArc } from "react-icons/tb";
import { TbArrowLeftFromArc } from "react-icons/tb";

import { MdBloodtype } from "react-icons/md";
import { MdEvent, MdPhotoLibrary, MdVolunteerActivism, MdSchool } from "react-icons/md";
import { FaUserGraduate, FaChalkboardTeacher, FaUserTie } from "react-icons/fa";
import {
  BsJustify,
  BsX,
  BsPersonFill,
  BsFillPeopleFill,
  BsGraphUp,
  BsChevronDown,
  BsChevronUp,
} from "react-icons/bs";
import "./Sidebar.css";


import logoHome from '../assets/logoHome.png'

import adityalogo from '../assets/aditya.png'





function Sidebar({ openSidebarToggle, OpenSidebar, isSidebarCollapsed, onSidebarToggle }) {
  //   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleSidebar = () => {
    onSidebarToggle(!isSidebarCollapsed);
  };

  // Sidebar animation variants
  const sidebarVariants = {
    expanded: { width: "270px" },
    collapsed: { width: "80px" },
  };

  const listItemVariants = {
    expanded: { opacity: 1, x: 0 },
    collapsed: { opacity: 0, x: -20 },
  };

  const submeuvariants = {
    hidden: { opacity: 0, x: -10, pointerEvents: "none" },
    visible: { opacity: 1, x: 10, pointerEvents: "auto" },
  };
  const [isRotatedDonar, setIsRotatedDonar] = useState(false);
  console.log("logoHome value:", logoHome);

  return (
    <motion.aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
      animate={isSidebarCollapsed ? "collapsed" : "expanded"}
      variants={sidebarVariants}
      transition={{ duration: 0.01 }}
      style={{
        overflow: isSidebarCollapsed ? "visible" : "auto",
      }}
    >
      <div
        className="sidebar-toggler-adjust"
        onClick={toggleSidebar}
      >
        {isSidebarCollapsed ? (
          <TbArrowLeftFromArc fontSize="26px" color="gray" />
        ) : (
          <TbArrowLeftToArc fontSize="26px" color="gray" />
        )}
      </div>
      <div className="sidebar-title" style={{ margin: "0", padding: "0px 0px 10px", backgroundColor: "rgba(32, 31, 31, 0.2)" }}>
        <div className="sidebar-brand" >
          <center>
            {!isSidebarCollapsed ? <img src={logoHome} className="sidebar-logo" height={"60px"} alt="logo" /> : <img src={adityalogo} height={"52px"} alt="logo" />}
          </center>
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <Link to="/blooddonationadmin">
          <li className="sidebar-list-item" id="uniqueact" onMouseEnter={() => setHoveredItem("dashboard")} onMouseLeave={() => setHoveredItem(null)}>
            {/* <BsGrid1X2Fill className="icon" /> */}
            <span style={{ paddingRight: "10px" }}><BsGraphUp /></span>
            <motion.span
              variants={listItemVariants}
              animate={isSidebarCollapsed ? "collapsed" : "expanded"}
            >
              {!isSidebarCollapsed && "Dashboard"}
            </motion.span>
            {
              isSidebarCollapsed && hoveredItem === "dashboard" && <li
                className="hiddenboxicon1"
              >
                <Link to="/blooddonationadmin">
                  <div >Dashboard</div>
                </Link>

              </li>
            }
          </li>
        </Link>

        <li
          className="sidebar-list-item"
          id="uniqueaction"
          onClick={() => setIsRotatedDonar((prev) => !prev)}
          onMouseEnter={() => setHoveredItem("donor-form")} onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="sidebariconshandler">
            <span style={{ paddingRight: "10px" }}><BsPersonFill /></span>

            <motion.span
              variants={listItemVariants}
              animate={isSidebarCollapsed ? "collapsed" : "expanded"}
            >
              {!isSidebarCollapsed && "Donor Form"}
            </motion.span>
          </div>


          {!isSidebarCollapsed && (
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: isRotatedDonar ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <RiArrowRightDoubleFill fontSize="22px" />
            </motion.span>
          )}
          {
            isSidebarCollapsed && hoveredItem === "donor-form" && <li
              className="hiddenboxicon"
            >
              <Link to="/blooddonationadmin/donor-forms/student" >
                <div >Student</div>
              </Link>
              <Link to="/blooddonationadmin/donor-forms/staff">
                <div>Staff</div>
              </Link>
              <Link to="/blooddonationadmin/donor-forms/guest">
                <div >Guest</div>
              </Link>
            </li>
          }
        </li>
        {isRotatedDonar && !isSidebarCollapsed && (
          <motion.li
            className="actiontoggler"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}

          >
            <Link to="/blooddonationadmin/donor-forms/student">

              <div className="options" style={{ paddingLeft: "5px" }}>
                <FaUserGraduate />
                <span style={{ paddingLeft: "10px" }}>Student</span>
              </div>
            </Link>
            <Link to="/blooddonationadmin/donor-forms/staff">
              <div className="options" style={{ paddingLeft: "5px" }}>
                <FaChalkboardTeacher />
                <span style={{ paddingLeft: "10px" }}>Staff</span>
              </div>
            </Link>
            <Link to="/blooddonationadmin/donor-forms/guest">
              <div className="options" style={{ paddingLeft: "5px" }}  >
                <FaUserTie />
                <span style={{ paddingLeft: "10px" }}>Guest</span>
              </div>
            </Link>
          </motion.li>

        )}

        <Link to="/blooddonationadmin/donor-data">
          <li className="sidebar-list-item" id="uniqueact" onMouseEnter={() => setHoveredItem("donor-data")} onMouseLeave={() => setHoveredItem(null)}>
            <span style={{ paddingRight: "10px" }}><BsFillPeopleFill /></span>
            <motion.span
              variants={listItemVariants}
              animate={isSidebarCollapsed ? "collapsed" : "expanded"}
            >
              {!isSidebarCollapsed && "Registered data"}
            </motion.span>

            {
              isSidebarCollapsed && hoveredItem === "donor-data" && <li
                className="hiddenboxicon2"
              >
                <Link to="/blooddonationadmin/donor-data">
                  <div >Registration Details</div>
                </Link>

              </li>
            }
          </li>
        </Link>


        <Link to="/blooddonationadmin/donated-data">
          <li className="sidebar-list-item" id="uniqueact" onMouseEnter={() => setHoveredItem("donor-data")} onMouseLeave={() => setHoveredItem(null)}>
            <span style={{ paddingRight: "10px" }}><MdBloodtype /></span>
            <motion.span
              variants={listItemVariants}
              animate={isSidebarCollapsed ? "collapsed" : "expanded"}
            >
              {!isSidebarCollapsed && "Donor data"}
            </motion.span>

            {
              isSidebarCollapsed && hoveredItem === "donor-data" && <li
                className="hiddenboxicon2"
              >
                <Link to="/blooddonationadmin/donor-data">
                  <div >Registration Details</div>
                </Link>

              </li>
            }
          </li>
        </Link>


        <li
          className="sidebar-list-item"
          id="uniqueaction"
          onClick={() => setIsRotated(!isRotated)}
          onMouseEnter={() => setHoveredItem("action")} onMouseLeave={() => setHoveredItem(null)}
        >
          <div className="sidebariconshandler">
            <BsFillGrid3X3GapFill className="icon" />
            <motion.span
              variants={listItemVariants}
              animate={isSidebarCollapsed ? "collapsed" : "expanded"}
            >
              {!isSidebarCollapsed && "Actions"}
            </motion.span>
          </div>
          {!isSidebarCollapsed && (
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: isRotated ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <RiArrowRightDoubleFill fontSize="22px" />
            </motion.span>
          )}

          {
            isSidebarCollapsed && hoveredItem === 'action' && <li
              className="hiddenboxicon3"
            >
              <Link to="/blooddonationadmin/event">
                <div>
                  Events</div>
              </Link>
              <Link to="/blooddonationadmin/gallery">
                <div >Gallery</div>
              </Link>
              <Link to="/blooddonationadmin/volunteer">
                <div >Volunteer</div>
              </Link>
              <Link to="/blooddonationadmin/add-colleges">
                <div >Add Colleges</div>
              </Link>
            </li>
          }

        </li>
        {isRotated && !isSidebarCollapsed && (
          <motion.li
            className="actiontoggler"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <Link to="/blooddonationadmin/event">

              <div className="options" style={{ paddingLeft: "5px" }}>
                <MdEvent />
                <span style={{ paddingLeft: "10px" }}>Events</span>
              </div>
            </Link>
            <Link to="/blooddonationadmin/gallery">

              <div className="options" style={{ paddingLeft: "5px" }}>
                <MdPhotoLibrary />
                <span style={{ paddingLeft: "10px" }}>Gallery</span>
              </div>
            </Link>
            <Link to="/blooddonationadmin/volunteer">
              <div className="options" style={{ paddingLeft: "5px" }}>
                <MdVolunteerActivism />
                <span style={{ paddingLeft: "10px" }}>Volunteers</span>
              </div>
            </Link>

             <Link to="/blooddonationadmin/add-colleges">
              <div className="options" style={{ paddingLeft: "5px" }}>
                <MdSchool />
                <span style={{ paddingLeft: "10px" }}>Add Colleges</span>
              </div>
            </Link>
          </motion.li>
        )}
      </ul>
    </motion.aside>
  );
}

export default Sidebar;
