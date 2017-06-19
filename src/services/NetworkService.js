function NetworkService(){
    var name="";
    var city="";
    var country="";
    var stations=[];
    var _this=this;
    
    this.setName=(pName)=>name=pName;
    this.setCity=(pCity)=>city=pCity;
    this.setCountry=(pCountry)=>country=pCountry;
    this.setStations=(pStations)=>stations=pStations;
    
    this.getName=()=>name;
    this.getCity=()=>city;
    this.getCountry=()=>country;
    this.getStations=()=>stations;
    
    this.fetchData=(networkId)=>{
        var url = "https://api.citybik.es/v2/networks/"+networkId.toLowerCase()+"?fields=id,name.stations,location";
        return fetch(url)
        .then(result=>result.json())
    }
}
export default NetworkService;