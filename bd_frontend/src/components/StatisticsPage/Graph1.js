'use client';
import React, { useState, useEffect } from "react";
import './charts.css';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts";
import axios from "axios";

function Chart1(props) {
    const [donorData, setDonorData] = useState([]);
    const port = process.env.REACT_APP_SERVER_PORT;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get(port + `count-by-department?collegeCode=${props.college}`);
                // console.log(props.college);
                // console.log(result.data);

                const actualResult = Object.entries(result.data).map(([key, value]) => ({
                    College: key,
                    "NUMBER OF DONORS": value
                }));

                if (actualResult.length === 1) {
                    actualResult.push({ College: "Others", "NUMBER OF DONORS": 0 });
                }
                setDonorData(actualResult);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [props.college]);

    return (
        <div className="chart1">
            <ResponsiveContainer height="100%" width="100%">
                <AreaChart width={800} height={800} data={donorData} margin={{ right: 30 }}>
                    <YAxis />
                    <XAxis dataKey="College" />
                    <Tooltip cursor={false} />
                    <Legend />
                    <Area 
                        type="monotone" 
                        dataKey="NUMBER OF DONORS" 
                        stroke="#7c3aed" 
                        fill="#8b5cf6" 
                        isAnimationActive={false} // Disable animation for faster rendering
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart1;