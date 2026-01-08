import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CollegeWiseChart from "./CollegeWiseChart";
import GenderWiseChart from "./GenderWiseChart";
import BloodGroupChart from "./BloodGroupChart";
import BranchWiseChart from "./BranchWiseChart";

import VenueWiseCounts from "./VenueWiseCounts";

function LiveCountSlick() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };
  return (
    <div style={{alignContent: "center"}} className="forQuery">
      <Slider {...settings}>
        <div>
          <CollegeWiseChart />
        </div>
        <div style={{display:"flex", alignItems: "center", height :"100%"}}>
          <GenderWiseChart />
        </div>
        {/* <div>
          <BranchWiseChart />
        </div> */}
        <div>
          <BloodGroupChart />
        </div>
        <div>
          <VenueWiseCounts />
        </div>
      </Slider>
    </div>
  );
}

export default LiveCountSlick;
