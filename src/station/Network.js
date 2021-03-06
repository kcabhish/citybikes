import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './Station.css';
import StationInfoContainer from './StationInfoContainer.js';
import NetworkService from '../services/NetworkService.js';
var url = "https://api.citybik.es/v2/networks/hubway?fields=id,name.stations,location";

/**
Main Network component that loads the station information page.
*/
class Network extends Component{
    constructor(props) {
      
      super(props);
      var _this = this;
      this.state = { 
          name:"",
          city:"",
          country:"",
          stations:[]
      };
      var network = new NetworkService();
      //params can be hubway, opole-bike
      network.fetchData("hubway")
      .then(function(data){
          _this.setState({
              name:data.network.name,
              city:data.network.location.city,
              country:data.network.location.country,
              stations:data.network.stations
          });
          
      });
    }
        
    
    render(){
        return (
          <div className="network flex-col">
            <div className="network-header">
                <span className="network-name">{this.state.name}</span>
                <span className="network-address">{this.state.city}, {this.state.country}</span>
            </div>
              {
                  this.state.stations.length ?
                  this.state.stations.map(item=><StationInfoContainer 
                                                key={item.id} 
                                                stationInfo={item} />) 
                : <h1>Seeking the droid you are looking for ...</h1>
              }
          </div>
        )
    }
}
export default Network;