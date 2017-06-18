import React from 'react';
import ReactDOM from 'react-dom';

import StationInfo from './StationInfo.js';

function StationInfoContainer(props){
    
    return (
        <div className="station flex-col">
           <div className="station-header">
              <span>{props.stationInfo.name}</span>
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