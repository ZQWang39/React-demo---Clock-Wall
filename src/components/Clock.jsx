import React, { useState, useEffect } from "react";
import "moment-timezone";
import moment from "moment";
import SetTime from "./SetTime"


const Clock = (props) => {
  
  const [currentDay, setCurrentDay] = useState();
  const [currentDate, setCurrentDate] = useState();
  const { region, city } = props;

 
  const date = () => {
    setInterval(() => {
      setCurrentDate(moment().tz(`${region}/${city}`).format("dddd"));
    }, 1000);
  };
  const day = () => {
    setInterval(() => {
      setCurrentDay(moment().tz(`${region}/${city}`).format("ll"));
    }, 1000);
  };


  useEffect(date, [region, city]);
  useEffect(day, [region, city]);

  return (
    <div className='clock'>
      <h1 className='clock__city'>{city}</h1>
      <div className='clock__date'>
        <span>{currentDate}</span> <span>{currentDay}</span>
      </div>
      <SetTime region={region} city={city}/>
    </div>
  );
};

export default Clock;
