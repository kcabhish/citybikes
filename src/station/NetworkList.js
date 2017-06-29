import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import NetworkService from '../services/NetworkService.js';

class NetworkList extends Component{
    constructor(props){
        super(props);
        var _this=this;
        this.state={
            networks:[]
        };
        
        var network = new NetworkService();
       //params can be hubway, opole-bike
       network.fetchNetworkList()
       .then(function(data){
          console.log(data);
          _this.setState({
              networks:data.networks
          });
          
      });
      console.log(this.state.networks);
    }
    render(){
        return (
            <div className="network-list">
                <h1> Hello World </h1>
                {
                    this.state.networks.map(item=><h1>{item.name} => {item.href}</h1>)
                }
            </div>
        );
    }
}
export default NetworkList;