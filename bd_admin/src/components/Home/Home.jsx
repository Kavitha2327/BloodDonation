import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
  from 'react-icons/bs'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
  from 'recharts';
import { useEffect } from 'react';
import { useState } from 'react';
import { motion } from "framer-motion"
import StatisticsPage from './StatisticsPage/StatisticsPage';
import './Home.css';

import axios from 'axios';
import homeIcon from '../../../icons/mission-icon2.svg'
import donorIcon from '../../../icons/mission-icon3.svg'

import adminImg from '../../assets/admin.svg'
import adminGirl from '../../assets/admingirl.png'




function Home() {
  const [percentage, setPercentage] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const targetPercentage = 50;
  const targetPercentage1 = 70
  const targetCount1 = 38566;
  const targetCount2 = 40000;
  const duration = 2000;

  const [OverviewCounts, setOverviewCounts] = useState({});

  const port = import.meta.env.VITE_BACKEND_PORT;

  useEffect(() => {

    try {
      axios.get(port + "total-counts").then((result) => {
        console.log(result.data);
        setOverviewCounts(result.data);
      })
    }
    catch (error) {
      console.error("Error fetching overview counts:", error);
    }

    const intervalTime = 50;
    const steps = duration / intervalTime;
    const steps1 = duration / intervalTime;

    let percentageStep = targetPercentage / steps;
    let percentageStep1 = targetPercentage1 / steps1;

    let countStep = targetCount1 / steps;
    let countStep1 = targetCount2 / steps;

    let currentPercentage = 0;
    let currentPercentage1 = 0;
    let currentCount = 0;
    let currentCount1 = 0;

    const interval = setInterval(() => {
      currentPercentage += percentageStep;
      currentPercentage1 += percentageStep1;
      currentCount += countStep;
      currentCount1 += countStep1;

      if (currentPercentage >= targetPercentage) {
        currentPercentage = targetPercentage;
        currentCount = targetCount1;
        clearInterval(interval);
      }

      if (currentPercentage1 >= targetPercentage1) {
        currentPercentage1 = targetPercentage1;
        currentCount1 = targetCount2;
        clearInterval(interval);
      }

      setPercentage(Math.round(currentPercentage));
      setCount(Math.round(currentCount));

      setPercentage1(Math.round(currentPercentage1));
      setCount1(Math.round(currentCount1));
    }, intervalTime);

    return () => clearInterval(interval);
  }, [targetPercentage, targetCount1, targetCount2, targetPercentage1]);


  const frontendPort = import.meta.env.VITE_FRONTEND_PORT;

  const handleClick = () => {
    window.open(frontendPort, "_blank");
  }

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3 className='heading1'>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card1'>
          <div className='card-inner'>
            <div className="card-inner_left">
              <h3 className='body-text'>Welcome Back <span style={{ "fontSize": "20px" }}>👋</span> Admin</h3>

              <p style={{ "fontSize": "16px" , marginBottom: "0", marginTop: "20px"}} className='body-text'>Please refer to this link for live Website:</p>
              {/* <p style={{ "fontSize": "16px", cursor: "pointer" }} onClick={handleClick} className='body-text'>
                👉https://adityauniversity/blooddonation</p> */}
              <a
                href="https://adityauniversity.in/blooddonation"
                target="_blank"
                rel="noopener noreferrer"
                className="body-text linkHover"
              >
                👉 https://adityauniversity.in/blooddonation
              </a>

            </div>
            <div className="card-inner_right">
              <motion.img src={adminImg} alt="admin"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }} />

              <motion.img id='admingirl' src={adminGirl} alt="admingirl" initial={{ y: 0 }} animate={{ y: [0, -8, -1] }} style={{scale:0.9}} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", }} />

            </div>
          </div>

        </div>

        <div className='card2'>
          <div className='card-inner2'>
            <div className='countbox' style={{
              backgroundColor: "#008059", borderRadius: "1.5rem", padding: "14px", display: "flex", alignItems: "center", justifyContent: "space-between", color: "white", width: "350px", height: "120px",
            }}
            >
              <div style={{ position: "relative", width: "80px", height: "80px" }}>
                
                <img src={donorIcon} alt="" />
                <div style={{
                  position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                }}
                >
                </div>
              </div>
              <div>
                <div className='total' style={{ fontSize: "22px", fontWeight: "bold" }}>{OverviewCounts.NumberOfDonors && OverviewCounts.NumberOfDonors.toLocaleString()}</div>
                <div style={{ fontSize: "16px" }} className='body-text'>Total Number of donors</div>
              </div>
            </div>

            <div
              className='countbox'
              style={{
                backgroundColor: "#0092B3", borderRadius: "1.5rem", padding: "14px", display: "flex", alignItems: "center", justifyContent: "space-between",
                color: "white", width: "350px", height: "120px",
              }}
            >
              <div style={{ position: "relative", width: "80px", height: "80px" }}>
                
                <img src={homeIcon} alt="" />
                <div style={{
                  position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                }}
                >

                </div>
              </div>
              <div>
                {/* {console.log(OverviewCounts)} */}
                <div className='total' style={{ fontSize: "22px", fontWeight: "bold" }}>{OverviewCounts.NumberOfBloodCamps && OverviewCounts.NumberOfBloodCamps.toLocaleString()}</div>
                <div style={{ fontSize: "16px" }} className='body-text'>Number of Blood Camps</div>
              </div>
            </div>


          </div>

        </div>
      </div>
      <StatisticsPage />
    </main>
  )
}

export default Home