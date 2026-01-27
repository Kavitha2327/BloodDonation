import React, { useState, useEffect } from 'react';
import {ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import axios from 'axios';
import { io } from 'socket.io-client';

const port = process.env.REACT_APP_SERVER_PORT; // Ensure this is set correctly
const socket = io(port, {
  transports: ["websocket"],
  withCredentials: true,
}); 

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', 'blue', 'black'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function BloodGroupChart(props) {
  const [donorData, setDonorData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Function to fetch donor data from the backend
  const fetchDonorData = async () => {
    try {
      setIsLoading(true);
      const result = await axios.get(`${port}/count-by-blood-group?EventDate="YES"`);
      const actualResult = Object.entries(result.data).map(([key, value]) => (
        key !== 'UnKnown'
          ? { name: key, count: value }
          : { name: 'Un', count: value }
      ));
      setDonorData(actualResult);
    } catch (error) {
      console.error(error);
      setDonorData([{ name: 'O+', count: 0 }]);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect hook to fetch data initially and set up WebSocket listener
  useEffect(() => {
    fetchDonorData();

    socket.on('new-registration', () => {
      console.log('New registration detected');
      fetchDonorData(); // Fetch updated donor data on new registration
    });

    return () => {
      socket.off('new-registration'); // Cleanup WebSocket listener
    };
  }, [props.college]); // Re-run when `props.college` changes

  return (
    <div style={{ display: "flex", justifyContent: "center",alignItems:"center", flexDirection: "column" }}>
      <h4 className="chart-title" style={{ marginBottom: 20, alignSelf: "center", marginTop: 20 }}>Blood Group-Wise Count</h4>
      {isLoading ? (
        <div>Loading...</div> // Display loading message while data is being fetched
      ) : (
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={donorData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip cursor={false} />

            <Bar
              dataKey="count"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {donorData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
