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
  const isMobile = window.innerWidth < 768;
  const innerWidth=isMobile ? 250 : 300;
  const innerheight=isMobile ? 250 : 300;

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
    const interval = setInterval(() => {
      fetchGenderData();
    }, 60000);

    // Cleanup the socket connection on unmount
    return () => {
      socket.off("new-registration"); // Remove the listener
      socket.disconnect(); // Disconnect the socket
      clearInterval(interval);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div style={{ display: "flex", justifyContent: "center",alignItems:"center", flexDirection: "column" }}>
      <h4
        className="chart-title"
        style={{ marginBottom: 20, alignSelf: "center", marginTop: 20,marginBottom: 40 }}
      >
        Gender-Wise Count
      </h4>
      {/* <div style={{ width: "100%", maxWidth: 380 }}>
        <PieChart
          series={[{ data }]}
          margin={{ bottom: 60,right:20 }}   // ✅ IMPORTANT
          height={400}
          slotProps={{
            legend: {
              direction: "row",
              position: {
                vertical: "bottom",
                horizontal: "middle",
              },
            },
          }}
        />
      </div> */}
      <div style={{ width: "100%", height: "100%" }}>
        <PieChart
          series={[{ data }]}
          margin={{ bottom: 70, right: 20 }}
          height={window.innerWidth < 480 ? 280 : 400}
          slotProps={{
            legend: {
              direction: "row",
              position: {
                vertical: "bottom",
                horizontal: "middle",
              },
            },
          }}
        />
      </div>


    </div>
  );
}

export default GenderWiseChart;
