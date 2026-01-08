import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import {useEffect, useState} from 'react';
import axios from 'axios';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink','blue','black'];

const data = [
  {
    name: 'A+',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'B-',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'B+',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'B-',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'O+',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'O-',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'AB+',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'AB-',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

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

export default function Chart3(props) {

  const [donorData, setDonorData] = useState([]);
  const port = process.env.REACT_APP_SERVER_PORT;


  useEffect(() => {
      const fetchData = async () => {
          try {
              const result = await axios.get(port + `count-by-blood-group?collegeCode=${props.college}`);
              // console.log(props.college);
              // console.log(result.data);

              const actualResult = Object.entries(result.data).map(([key, value]) => (
                key != "UnKnown" ?
                {
                  name: key,
                  pv: 0,
                  count: value,
                  amt: 0 
                }: {
                  name: "Un",
                  pv: 0,
                  count: value,
                  amt: 0 
                }
            ));
            setDonorData(actualResult);
          } 
          catch (error) {
              setDonorData([{
                name: "O+",
                pv: 0,
                count: 0,
                amt: 0}])
              console.error(error);
          }
      };

      fetchData();
  }, [props.college]);

  return (
    <div className='chart2'>
            <h2 className="chart-title">Blood group Count</h2>
    <BarChart
      width={500}
      height={350}
      data={donorData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >

      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip cursor={false}/>
      <Bar dataKey="count" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>/
        // this is for clrs
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 8]} />
        ))}
      </Bar>
    </BarChart>
    </div>
  );
}

Chart3.demoUrl = 'https://codesandbox.io/p/sandbox/bar-chart-with-customized-shape-jpsj68';
