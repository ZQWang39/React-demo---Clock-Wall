import React, { useState, useEffect, Fragment } from "react";
import "moment-timezone";
import moment from "moment";
import {CircularProgress} from '@material-ui/core'



const Clock = (props) => {
  
  const [currentDate, setCurrentDate] = useState();
  const { region, city } = props;
 
  const timeUpdate = () => {
    setInterval(() => {
      const fullDate = moment().tz(`${region}/${city}`).format("dddd D MMMM YYYY HH:mm:ss");
      setCurrentDate(fullDate);
    }, 1000);
  };

  useEffect(timeUpdate, [region, city]);

  const getDate = (d)=>{
 
    let dateArray = d.split(" ");
    dateArray.pop();
    return dateArray.join(" ");
  };

  const getTime = (d)=>{
    const time = d.split(" ").pop();
    const timeArray = time.split(":");
    return {
      hour: timeArray[0],
      minute: timeArray[1],
      second: timeArray[2]
    }

  }

 // if(!currentDate) return <h1>Loading...</h1>
  

  return (
     <Fragment>
          {
        (currentDate) ? ( <div >
        <h3>{city}</h3>
          <div className="clock__header">{getDate(currentDate)}</div>
          <div className="clock__body">
            <div className="clock__body__time">
              <span>{getTime(currentDate).hour}</span> : 
              <span>{getTime(currentDate).minute}</span> : 
              <span>{getTime(currentDate).second}</span>      
            </div>
          </div>
        </div>
      ):(
          <CircularProgress />
      )
    }
   </Fragment>
  );
};

export default Clock;
