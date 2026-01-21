import React, { useState } from "react";
import {
  BsJustify,
  BsX,
  BsPersonFill,
  BsFillPeopleFill,
  BsGraphUp,
  BsChevronDown,
  BsChevronUp,
} from "react-icons/bs";
import { FaUserGraduate, FaChalkboardTeacher, FaUserTie } from "react-icons/fa";
import { MdEvent, MdPhotoLibrary, MdVolunteerActivism ,MdSchool} from "react-icons/md";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Padding } from "@mui/icons-material";

import { useAuth } from "../context/AuthContext";
import './header.css'
import adityalogo from '../assets/aditya.png'
import logoHome from '../assets/logoHome.png'



function Header({ isSidebarCollapsed }) {
  const [toggler, settoggler] = useState(false);
  const [showDonorSubcategories, setShowDonorSubcategories] = useState(false);
  const [showActionSubcategories, setShowActionSubcategories] = useState(false);

  const sidebarsmallsize = () => {
    settoggler(!toggler);
  };

  const closeSidebar = () => {
    settoggler(false);
    setShowDonorSubcategories(false);
    setShowActionSubcategories(false);
  };

  const {logout} = useAuth(); 

  const handleLogout = () => {
    logout();
  }

  const sidebarVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: "0%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.4 },
    },
  };

  const optionVariants = {
    hidden: { x: "-50%", opacity: 0 },
    visible: (index) => ({
      x: "0%",
      opacity: 1,
      transition: {
        delay: 0.2 + index * 0.1,
        type: "spring",
        stiffness: 80,
        damping: 10,
      },
    }),
  };

  const subcategoryVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <header
      className="header"
      style={{
        marginLeft: isSidebarCollapsed ? "-170px" : "0px",
        transition: "margin-left 0.2s ease-in-out",
      }}
    >
      <div className="myHeader">
        <div className="menu-icon">
          <BsJustify className="icon" onClick={sidebarsmallsize} />
        </div>
        <div className="logout" onClick={handleLogout} >
          LOGOUT
        </div>
      </div>

      <AnimatePresence>
        {toggler && (
          <motion.div
            key="sidebar"
            className="sidebarsmallsize"
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="sidebar-header" style={{ marginLeft: "-23px", marginBottom: "10px" }}>
              <img src={logoHome} height={"59.9px"} alt="logo" onClick={closeSidebar} style={{ backgroundColor: "rgba(32, 31, 31, 0.4)" }} />
            </div>


            <ul className="sidebar-options">
              {[
                { name: "Dashboard", icon: <BsGraphUp />, path: "/blooddonationadmin" },
                { name: "Donor Form", icon: <BsPersonFill /> },
                { name: "Registered Data",icon: <BsFillPeopleFill />,path: "/blooddonationadmin/donor-data" },
                { name: "Donor Data", icon: <BsFillPeopleFill />, path: "/blooddonationadmin/donated-data" },
                { name: "Actions", icon: <BsGraphUp /> },
              ].map((option, index) => (
                <React.Fragment key={option.name}>
                  <motion.li
                    className="sidebar-option"
                    custom={index}
                    variants={optionVariants}
                    initial="hidden"
                    animate="visible"
                    onClick={() => {
                      if (option.name === "Donor Form")
                        setShowDonorSubcategories(!showDonorSubcategories);
                      if (option.name === "Actions")
                        setShowActionSubcategories(!showActionSubcategories);
                    }}
                  >
                    <Link
                      to={option.path || "#"}
                      className="link"
                      onClick={(e) => {
                        if (!option.path) {
                          e.preventDefault();
                        } else {
                          closeSidebar();
                        }
                      }}
                    >
                      <span className="icon-container">{option.icon}</span>
                      {option.name}
                    </Link>
                    {option.name === "Donor Form" && (
                      <motion.span
                        className="arrow-icon"
                        animate={{
                          rotate: showDonorSubcategories ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {showDonorSubcategories ? (
                          <BsChevronUp />
                        ) : (
                          <BsChevronDown />
                        )}
                      </motion.span>
                    )}
                    {option.name === "Actions" && (
                      <motion.span
                        className="arrow-icon"
                        animate={{
                          rotate: showActionSubcategories ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {showActionSubcategories ? (
                          <BsChevronUp />
                        ) : (
                          <BsChevronDown />
                        )}
                      </motion.span>
                    )}
                  </motion.li>
                  {option.name === "Donor Form" && (
                    <AnimatePresence>
                      {showDonorSubcategories && (
                        <motion.ul
                          className="subcategory-list"
                          variants={subcategoryVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          {[
                            { name: "Student", icon: <FaUserGraduate />, path: "/blooddonationadmin/donor-forms/student" },
                            { name: "Staff", icon: <FaChalkboardTeacher />, path: "/blooddonationadmin/donor-forms/staff" },
                            { name: "Guest", icon: <FaUserTie />, path: "/blooddonationadmin/donor-forms/guest" },
                          ].map((subcategory) => (
                            <motion.li
                              key={subcategory.name}
                              className="subcategory-option"
                              whileHover={{ scale: 1.05, color: "#4caf50" }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Link
                                to={subcategory.path}
                                className="link"
                                onClick={closeSidebar}
                              >
                                <span className="icon-container">
                                  {subcategory.icon}
                                </span>
                                {subcategory.name}
                              </Link>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  )}
                  {option.name === "Actions" && (
                    <AnimatePresence>
                      {showActionSubcategories && (
                        <motion.ul
                          className="subcategory-list"
                          variants={subcategoryVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          {[
                            { name: "Event", icon: <MdEvent />, path: "/blooddonationadmin/event" },
                            { name: "Gallery", icon: <MdPhotoLibrary />, path: "/blooddonationadmin/gallery" },
                            {
                              name: "Volunteer",
                              icon: <MdVolunteerActivism />,
                              path: "/blooddonationadmin/volunteer",
                            },
                            {
                              name:"Add Colleges",
                              icon:<MdSchool/>,
                              path:"/blooddonationadmin/add-colleges"

                            }
                          ].map((subcategory) => (
                            <motion.li
                              key={subcategory.name}
                              className="subcategory-option"
                              whileHover={{ scale: 1.05, color: "#4caf50" }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Link
                                to={subcategory.path}
                                className="link"
                                onClick={closeSidebar}
                              >
                                <span className="icon-container">
                                  {subcategory.icon}
                                </span>
                                {subcategory.name}
                              </Link>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  )}
                </React.Fragment>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
