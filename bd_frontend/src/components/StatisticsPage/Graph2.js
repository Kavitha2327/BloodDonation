'use client';
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import "./charts.css";
import axios from 'axios';

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>

            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />

            {/* <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${key}`}</text> */}
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${value}`}</text>
            {/* <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999"> */}
                {/* {`(Rate ${(percent * 100).toFixed(2)}%)`} */}
            {/* </text> */}

        </g>
    );
};

const Example = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [donorData, setDonorData] = useState([]);
    var fillColor = "#8884d8";
    const port = process.env.REACT_APP_SERVER_PORT;


    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log(props.college);
                const result = await axios.get(port + `count-by-gender?collegeCode=${props.college}`);
                // console.log(props.college);
                // console.log(result.data);
                console.log(result)

                const actualResult = Object.entries(result.data).map(([key, value]) => (
                    {
                        name: key,
                        value: value
                    }
                ));
                setDonorData(actualResult);

                console.log(actualResult);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        const colorFill = {

            "AEC" : "#ADD8E6",
            "ACOE": "#90EE90",
            "": "#FFFACD"
        }
        fillColor = colorFill[props.college];


        fetchData();
    }, [props.college]);

    const onPieEnter = (_, index) => {
        setActiveIndex(index);
    };

    return (
        <div className="chart2">
            <h2 className="chart-title">Gender-Wise Count</h2>
            <ResponsiveContainer width="100%" height="100%" >
                <PieChart>
                    <Pie
                        activeIndex={activeIndex}
                        activeShape={renderActiveShape}
                        data={donorData}
                        cx="50%"
                        cy="50%"
                        innerRadius={90}
                        outerRadius={120}
                        fill={fillColor}
                        dataKey="value"
                        onMouseEnter={onPieEnter}
                    />
                </PieChart>

            </ResponsiveContainer>
        </div>
    );
};

export default Example;