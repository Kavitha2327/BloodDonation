import React, { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import axios from "axios";
import { io } from 'socket.io-client';

const port = process.env.REACT_APP_SERVER_PORT;

function VenueWiseCounts() {
  const [data, setData] = useState({
    xAxis: [{ scaleType: "band", data: [] }],
    series: [{ data: [] }],
  });

  const [isLoading, setIsLoading] = useState(true); // State to handle loading

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

  const baseUrl = "https://adityauniversity.in/blooddonationbackend"
  

  // Fetch data function
  //Department=YES&
  const fetchData = () => {
    axios
      .get(`${port}count-by-venue?EventDate=YES`)
      .then((res) => {
        console.log("DATA", res.data);
        setData(res.data);
        setIsLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setIsLoading(false);
      });
  };
  const xAxisData = data.xAxis[0].data;
  
  // Format the xAxis labels
  const formattedXAxis = formatXAxisLabels(xAxisData);
  console.log(formattedXAxis);

  data.xAxis[0].data = formattedXAxis;

  useEffect(() => {
    // Fetch data initially
    fetchData();

    // Connect to the Socket.IO server
    const socket = io(port); // Replace with the correct port if needed

    // Listen for the "new-registration" event
    socket.on("new-registration", () => {
      console.log("New registration detected");
      fetchData(); // Re-fetch data on new registration
    });

    // Cleanup the socket connection on unmount
    return () => {
      socket.off("new-registration"); // Remove the event listener
      socket.disconnect(); // Disconnect the socket
    };
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center",alignItems:"center", flexDirection: "column" }}>
      <h4
        className="chart-title"
        style={{ marginBottom: 20, alignSelf: "center", marginTop: 20 }}
      >
        Venue-Wise Count
      </h4>
      {isLoading ? (
        <p style={{ textAlign: "center" }}>Loading chart data...</p>
      ) : (
        <BarChart
          xAxis={data.xAxis}
          series={data.series}
          width={window.innerWidth * 0.6}
          height={400}
        />
      )}
    </div>
  );
}

export default VenueWiseCounts;
