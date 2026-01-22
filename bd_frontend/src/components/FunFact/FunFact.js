import React, { useEffect } from 'react'
import CountUp from 'react-countup';
import map from '../../images/map/map-fact.png'
import CtaSection from '../CtaSection/CtaSection';

import { useState} from 'react';
import axios from 'axios';








const FunFactSection = (props) => {

    
    const [OverviewCounts, setOverviewCounts] = useState({});
    const port = process.env.REACT_APP_SERVER_PORT;


    useEffect( () => { 
        axios.get(port + "total-counts").then((result)=> {
            // console.log(result.data);
            setOverviewCounts(result.data);
        })
    }, [])

    const FunFact = [
        {
            title: OverviewCounts.NumberOfDonors,
            subTitle: 'Donors',
            symbol: ' plus',
            des: 'Dedicated individuals contributing to the lifesaving mission of our blood bank.',
            sclass: 'factBlock--one',
        },
        {
            title: OverviewCounts.NumberOfBloodCamps,
            subTitle: 'Blood Camps ',
            symbol: '',
            des: 'Strategically located camps facilitating safe and easy blood donations.',
            sclass: 'factBlock--two',
        },
        {
            title: '16000',
            subTitle: 'Lives saved',
            symbol: '+',
            des: 'Families reunited, hopes restored, and futures secured through blood donation.',
            sclass: 'factBlock--three',
        },
        {
            title: OverviewCounts.NumberOfVolunteers,
            subTitle: 'Volunteers',
            symbol: '',
            des: 'Every volunteer contributes to our mission of providing lifesaving blood.',
            sclass: 'factBlock--four',
        },
        {
            title: OverviewCounts.UnitsCollected,
            subTitle: 'Blood Units',
            symbol: '+',
            des: 'Lifesaving blood donations collected to support patients in need.',
            sclass: 'factBlock--five',
        },
    
    ];
     const formatValue = (value) => {
        if (value === null || value === undefined) {
            return { numericValue: 0, suffix: "" };
        }
        // Extract numeric and suffix portions
        const numericValue = parseInt(value);
        const suffix = typeof value === 'string' ? value.replace(/\d+/, '') : '';

        return { numericValue, suffix };
    };

    return (

        <section className="fact fact--layout1 position-relative pt-125 pb-95">
            <img src={map} alt="Gainioz" className="fact__map position-absolute" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-8 mx-auto">
                        <div className="sectionTitle text-center mb-65">
                            <span className="sectionTitle__small justify-content-center">
                                <i className="fa-solid fa-heart btn__icon"></i>
                                need your help
                            </span>
                            <h2 className="sectionTitle__big">we are always there when others need help</h2>
                        </div>
                    </div>
                </div>
                <div className="factWrapper">
                    <div className="row gx-50">
                        {FunFact.slice(0, 3).map((funfact, fitem) => {
                            const { numericValue, suffix } = formatValue(funfact.title);
                            return (
                            <div className="col-lg-4" key={fitem}>
                                <div className={`factBlock ${funfact.sclass}`}>
                                    <h3 className="factBlock__heading"><span className="factBlock__number"><CountUp end={numericValue} enableScrollSpy /></span><span
                                        className="factBlock__ext">{funfact.symbol}</span>
                                    </h3>
                                    <span className="factBlock__tag">{funfact.subTitle}</span>
                                    <p className="factBlock__text">{funfact.des}</p>
                                </div>
                            </div>
                        );})}
                    </div>
                </div>
                <div className="factWrapper factWrapper--two">
                    <div className="row justify-content-center gx-50">
                        {FunFact.slice(3, 5).map((funfact, fitem) =>{ 
                            const { numericValue, suffix } = formatValue(funfact.title);
                            return (
                            <div className="col-lg-4" key={fitem}>
                                <div className={`factBlock ${funfact.sclass}`}>
                                    <h3 className="factBlock__heading"><span className="factBlock__number"><CountUp end={numericValue} enableScrollSpy /></span><span
                                        className="factBlock__ext">{funfact.symbol}</span>
                                    </h3>
                                    <span className="factBlock__tag">{funfact.subTitle}</span>
                                    <p className="factBlock__text">{funfact.des}</p>
                                </div>
                            </div>
                        );})}
                    </div>
                </div>
                <CtaSection/>
            </div>
        </section>
    )}


export default FunFactSection;