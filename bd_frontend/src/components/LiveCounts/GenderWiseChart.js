import React, { useEffect, useState } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import axios from "axios";
import { io } from "socket.io-client";

const port = process.env.REACT_APP_SERVER_PORT;

function GenderWiseChart() {
  const [data, setData] = useState([
    {
      id: 0,
      value: 1,
      label: "MALE: 1",
    },
    {
      id: 1,
      value: 1,
      label: "FEMALE: 1",
    },
  ]);

  const fetchGenderData = async () => {
    try {
      const response = await axios.get(`${port}/count-by-gender?EventDate=YES`);
      if (response.data && response.data.data) {
        setData(response.data.data);
        console.log("Data fetched", response.data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Fetch initial data when the component is mounted
    fetchGenderData();

    // Connect to the Socket.IO server
    const socket = io(port);

    // Listen for the "new-registration" event
    socket.on("new-registration", () => {
      console.log("New registration detected");
      fetchGenderData(); // Re-fetch data on new registration
    });

    // Cleanup the socket connection on unmount
    return () => {
      socket.off("new-registration"); // Remove the listener
      socket.disconnect(); // Disconnect the socket
    };
  }, []); // Empty dependency array ensures this effect runs only once

  setTimeout(() => {
    fetchGenderData();
  }, 10000 * 6);

  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
      <h4
        className="chart-title"
        style={{ marginBottom: 50, alignSelf: "center", marginTop: 20 }}
      >
        Gender Wise Count
      </h4>
      <PieChart
        series={[
          {
            data, // Pass the updated data directly
          },
        ]}
        width={window.innerWidth * 0.5}
        height={window.innerHeight * 0.4}
      />
    </div>
  );
}

export default GenderWiseChart;
