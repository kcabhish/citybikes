import React from 'react';
import ReactDOM from 'react-dom';
import './Station.css';

import StationInfo from './StationInfo.js';

function StationInfoContainer(props){
    
    return (
        <div className="station flex-col">
           <div className="station-header">
              {props.stationInfo.name}
           </div>
           <div className="station-container flex-row">
                <StationInfo number = {props.stationInfo.free_bikes}
                             description = "free bikes"/>
                <StationInfo number = {props.stationInfo.empty_slots}
                             description = "empty slots"/>
           </div>
           <div className="station-footer">
              {props.stationInfo.timestamp}
           </div>
        </div>);
}
export default StationInfoContainer;