import React, { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import axios from "axios";
import { io } from 'socket.io-client';
import './livecounts.css';

const port = process.env.REACT_APP_SERVER_PORT;

function CollegeWiseChart() {

  
  

  const [data, setData] = useState({
    xAxis: [{ scaleType: "band", data: [] }],
    series: [{ data: [] }],
  });

  const formatXAxisLabels = (labels) => {
    return labels.map(label => {
      if (label.length > 8) {
        return label
          .split(/[^a-zA-Z]+/) // Split by non-alphabetic characters (ignores special characters)
          .map(word => word.charAt(0).toUpperCase()) // Extract and capitalize the first letter
          .join(''); // Join the initials
      }
      return label; // Return the label as is if its length is <= 8
    });
  };
  
  

  const [isLoading, setIsLoading] = useState(true); // Loading state



  // Fetch data function  
  const fetchData = () => {
    axios
      .get(`${port}/count-by-department?EventDate="YES"`)
      .then((response) => {
        console.log("Data fetched", response.data);
        setData(response.data);
        setIsLoading(false); // Set loading to false once data is fetched
      })
      .catch((e) => {
        console.log('Error fetching data', e);
        setIsLoading(false);
      });
  };

  // Extract xAxis data
  const xAxisData = data.xAxis[0].data;
  
  // Format the xAxis labels
  const formattedXAxis = formatXAxisLabels(xAxisData);
  console.log(formattedXAxis);

  data.xAxis[0].data = formattedXAxis;

  useEffect(() => {
    // Fetch data initially
    fetchData();

    // Connect to the Socket.IO server
    const socket = io(port); // Connect to the server with the specified port

    // Listen for the "new-registration" event
    socket.on("new-registration", () => {
      console.log("New registration detected");
      fetchData(); // Re-fetch data on new registration
    });

    // Cleanup the socket connection on unmount
    return () => {
      socket.off("new-registration"); // Remove the listener
      socket.disconnect(); // Disconnect the socket
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div style={{ display: "flex", justifyContent: "center",alignItems:"center", flexDirection: "column" }}>
      <h4 className="chart-title" style={{ marginBottom: 20, alignSelf: "center", marginTop: 20 }}>
        College-Wise Count
      </h4>
      {isLoading ? (
        <p style={{ textAlign: "center" }}>Loading chart data...</p>
      ) : (
        <div className="barChartContainer">
          <BarChart
            xAxis={data.xAxis}
            series={data.series}
          />
        </div>

      )}
    </div>
  );
}

export default CollegeWiseChart;
