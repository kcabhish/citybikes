import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//custom imports
import Network from './station/Network.js';
import './index.css';
import './station/Station.css';
import NetworkList from './station/NetworkList.js';

const element = <NetworkList />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
registerServiceWorker();
