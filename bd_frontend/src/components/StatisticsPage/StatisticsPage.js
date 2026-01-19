import React, { Fragment,useState,useEffect} from 'react';
import Header from '../../components/header/Header';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';
import Graph1 from './Graph1';
import Graph2 from './Graph2';
import Graph3 from './Graph3';
import './charts.css';

import axios from 'axios';

const StatisticsPage = (props) => {

    // const { slug } = useParams()

    // const EventDetails = Events.find(item => item.slug === slug)


    const port = process.env.REACT_APP_SERVER_PORT;
    const [collegesData, setColleges] = useState({});
    useEffect(() => { 
        // Fetch count by department
        axios.get(`${port}count-by-department`)
            .then((result) => {
                // Handle the result
                //console.log('mylog')
                //console.log(result.data.xAxis[0].data)
                //console.log(result.data)
                setColleges(result.data);
                //console.log("col data")
                //console.log(collegesData)

            })
            .catch((error) => {
                console.error("Error fetching count by department:", error);
            });
    
        // Fetch college names
        axios.get(`${port}get-college-names`)
            .then((result) => {
                // console.log("Api data")
                console.log(result.data);
                setCollegeName(result.data);    
            })
            .catch((error) => {
                console.error("Error fetching college names:", error);
            });

    }, [port]); // Added `port` as a dependency
    


    const [collegeName, setCollegeName] = useState({
        "": "All colleges",
        "AEC": "Aditya Engineering College",
        "ACOE":  "Aditya College of Engineering"
    })

    const [option, setOption] = useState('');
    const handleChange = (event) => {
        setOption(event.target.value);
    };

    return (
        <Fragment>
            <Header hclass={'header--styleFour'} />
            <main className='main'>
            <PageTitle pageTitle={'STATISTICS'} pagesub={'STATISTICS'} />
                <section className="about">
                   <div className="header-stat">
                        <div className='drop-down-clgs'>
                            <select value={option} onChange={handleChange} className='dropdown-btn'>
                                <option value="" className='dropdown-content'>All Colleges</option>

                                { Object.keys(collegesData).map(college => {
                                    return <option key={college} value={college} className='dropdown-content'>{college}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className='graph-container'>
                        {/* {console.log(collegeName)} */}
                    <u style={{color:"black", textAlign: "center"}}> <h3 className="sectionTitle__big" >{collegeName[option]? collegeName[option] : option}</h3></u>
                        <div className='Graphs-1'>
                            
                            <Graph1 college = {option}/>
                        </div>
                        {/* <div className='Graphs-2'>
                        </div> */}
                        <div className='Graphs-2'>
                            <div className='Graph2-1'>
                            <Graph2 college = {option}/>
                            </div>
                            <div className='Graph2-2'>
                            <Graph3 college = {option}/>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default StatisticsPage;