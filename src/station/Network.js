import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './Station.css';
import StationInfoContainer from './StationInfoContainer.js';

var url = "http://api.citybik.es/v2/networks/hubway?fields=id,name.stations,location";

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
      fetch(url)
      .then(result=>result.json())
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
        console.log(this.state.stations);
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