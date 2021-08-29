import React, { useState, useEffect } from "react";
import "moment-timezone";
import moment from "moment";


const SetTime = (props) => {
  const [currentHour, setCurrentHour] = useState();
  const [currentMinute, setCurrentMinute] = useState();
  const [currentSecond, setCurrentSecond] = useState();
  
  const { region, city } = props;

  const timerHour = () => {
    setInterval(() => {
      setCurrentHour(moment().tz(`${region}/${city}`).format("HH"));
    }, 1000);
  };

  const timerMinute = () => {
    setInterval(() => {
      setCurrentMinute(moment().tz(`${region}/${city}`).format("mm"));
    }, 1000);
  };

  const timerSecond = () => {
    setInterval(() => {
      setCurrentSecond(moment().tz(`${region}/${city}`).format("ss"));
    }, 1000);
  };
  useEffect(timerHour, [region, city]);
  useEffect(timerMinute, [region, city]);
  useEffect(timerSecond, [region, city]);


    return (
      <div className = 'clock__time__container'>
        <div className = 'clock__time'>
            <span>{currentHour}</span>:<span>{currentMinute}</span>:
            <span>{currentSecond}</span>
        </div>
      </div>
    )
}

export default SetTime
