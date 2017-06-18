import React from 'react';
import ReactDOM from 'react-dom';
//import './Station.css';

function StationInfo(props) {
  return (
        <div className="station-info">
            <span className="bike-number">
                {props.number}
            </span>
            <span className="bike-info">
                {props.description}
            </span>
        </div>      
      );
}
export default StationInfo;