import React, { Fragment, useState, useEffect } from "react";

import Graph1 from "./Graph1";

import "./charts.css";

import axios from "axios";

const StatisticsPage = (props) => {
  const port = import.meta.env.VITE_BACKEND_PORT;
  const [collegesData, setColleges] = useState({});
  const [collegeName, setCollegeName] = useState({
    "": "All colleges",
    AEC: "Aditya Engineering College",
    ACOE: "Aditya College of Engineering",
  });
  // const port = import.meta.env.REACT_APP_SERVER_PORT;

  useEffect(() => {
    // Fetch count by department
    axios
      .get(`${port}count-by-department`)
      .then((result) => {
        // Handle the result
        setColleges(result.data);
      })
      .catch((error) => {
        console.error("Error fetching count by department:", error);
      });

    // Fetch college names
    axios
      .get(`${port}get-college-names`)
      .then((result) => {
        // console.log("Appi Data")
        console.log(result.data);
        setCollegeName(result.data);
      })
      .catch((error) => {
        console.error("Error fetching college names:", error);
      });
  }, [port]); // Added `port` as a dependency

  const CollegeName = {
    "": "All colleges",
    ACET: "ADITYA COLLEGE OF ENGINEERING & TECHNOLOGY",
    ACOE: "ADITYA COLLEGE OF ENGINEERING",
    ACP: "ADITYA COLLEGE OF PHARMACY",
    AEC: "ADITYA COLLEGE OF ENGINEERING",
    AFSC: "ADITYA",
    AGBS: "ADITYA GLOBAL BUSINESS SCHOOL",
    APC: "ADITYA PHARMACY COLLEGE",
    ACPT: "ADITYA COLLEGE OF POLYTHECHNIC",
  };

  const [option, setOption] = useState("");
  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <Fragment>
      <main className="main">
        <section className="about">
          <div className="header-stat">
            <div className="heading-stat"></div>
            <div className="drop-down-clgs">
              <select
                value={option}
                onChange={handleChange}
                className="dropdown-btn"
              >
                <option value="" className="dropdown-content">
                  All colleges
                </option>

                {Object.keys(collegesData).map((college) => {
                  return (
                    <option
                      key={college}
                      value={college || ""}
                      className="dropdown-content"
                    >
                      {college || ""}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <center>
            {" "}
            <u style={{ color: "black" }}>
              {" "}
              <h2
                className="sectionTitle__big graphCollege"
                style={{
                  fontFamily: "Oswald",
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                {CollegeName[option]}
              </h2>
            </u>
          </center>
          <div className="graph-container">
            <div className="Graphs-1">
              <Graph1 college={option} />
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default StatisticsPage;
