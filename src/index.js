import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//custom imports
import Network from './station/Network.js';
import './index.css';
import './station/Station.css';

const element = <Network />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
registerServiceWorker();
