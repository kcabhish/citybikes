import React from 'react';
import ReactDOM from 'react-dom';
import './Station.css';
import StationInfoContainer from './StationInfoContainer.js';




function Station(props){
    console.log(props);
    var tempStation = props.network.stations;
    console.log("Station info");
    console.log(tempStation);
    return (
        <div>
        {
            tempStation.map(function(item) {
                return (<StationInfoContainer key={item.id} stationInfo={item} />)
            })
         }
        </div>
        )
}
export default Station;