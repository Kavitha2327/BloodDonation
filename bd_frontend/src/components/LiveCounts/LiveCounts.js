import React, { Fragment, useState, useEffect } from "react";
import Header from "../../components/header/Header";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";
import LiveCountSlick from "./LiveCountSlick";
import axios from "axios";
import { io } from "socket.io-client";

//const port = "https://adityauniversity.in/blooddonationbackend"; // Replace with your server URL if needed

//const port = process.env.REACT_APP_SERVER_PORT
const port = 'http://localhost:7001/blooddonationbackend/'

const StatisticsPage = (props) => {
  
  const [liveCounts, setLiveCounts] = useState(0); // State for live counts
  const [noEvent, setNoEvent] = useState(false);

  const fetchLiveCounts = async () => {
    try {
      const response = await axios.get(`${port}count-by-gender?EventDate=YES`);
      if (response.data && response.data.data) {
        // Calculate the total count from the response
        const totalCounts = response.data.data.reduce(
          (acc, item) => acc + item.value,
          0
        );
        setLiveCounts(totalCounts); // Update live counts
        setNoEvent(totalCounts === 0); // Set `noEvent` if the total count is 0
      } else {
        setLiveCounts(0);
        setNoEvent(true);
      }
    } catch (error) {
      console.error("Error fetching live counts:", error);
      setLiveCounts(0);
      setNoEvent(true);
    }
    finally {
      setTimeout(fetchLiveCounts, 10000);
    }
  };

  useEffect(() => {
    // Fetch live counts on initial render
    fetchLiveCounts();

    // Initialize the socket connection
    const socket = io(port, {
      transports: ["websocket"],
    });

    // Listen for the "new-registration" event
    socket.on("new-registration", () => {
      console.log("New registration detected");
      fetchLiveCounts(); // Fetch updated live counts
    });

    // Cleanup the socket connection and event listener
    return () => {
      socket.off("new-registration"); // Remove the listener
      socket.disconnect(); // Disconnect the socket
    };
  }, []);


  return (
    <Fragment>
      <Header hclass={"header--styleFour"} />
      <main className="main" style={{ marginBottom: "40px" }}>
        <PageTitle pageTitle={"LIVE STATISTICS"} pagesub={"LIVE STATISTICS"} />
        <div
          style={{
            width: "100%",
            display: "flex",
            borderBottom: "3px solid black",
            justifyContent: "center",
            color: "red",
            fontSize: 50,
            fontWeight: 600,
            marginTop: 50,
          }}
        >
          Live Count {liveCounts}
        </div>

        <div
          style={{
            height: 500,
            width: "60%",
            justifySelf: "center",
            display: "block",
            justifyContent: "center",
            alignItems: "start",
          }}
        >
          <LiveCountSlick />
        </div>
      </main>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default StatisticsPage;
