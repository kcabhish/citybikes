import React from 'react';
import ReactDOM from 'react-dom';
import './Station.css';

import StationInfo from './StationInfo.js';

function StationInfoContainer(props){
    
    return (
        <div>
           <div className="station-container flex-row">
                <StationInfo number = {props.stationInfo.free_bikes}
                             description = "free bikes"/>
                <StationInfo number = {props.stationInfo.empty_slots}
                             description = "empty slots"/>
           </div>
        </div>);
}
export default StationInfoContainer;