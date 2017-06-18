import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//custom imports
import StationInfoContainer from './station/StationInfoContainer.js';
import './index.css';

var station = {"empty_slots": 2,
                "extra": {
                    "address": null,
                    "last_updated": 1497801898,
                    "renting": 1,
                    "returning": 1,
                    "uid": "152"
                },
                "free_bikes": 12,
                "id": "0d0f6b413915f118e0c8c7e0ea107ffa",
                "latitude": 42.345901,
                "longitude": -71.063187,
                "name": "Ink Block - Harrison Ave at Herald St",
                "timestamp": "2017-06-18T16:33:01.280000Z"};


const element = <StationInfoContainer stationInfo={station}/>;
ReactDOM.render(
  element,
  document.getElementById('root')
);
registerServiceWorker();