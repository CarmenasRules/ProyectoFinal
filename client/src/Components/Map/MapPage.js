import React, { Component } from "react";
import axios from "axios";
import MapWithADirectionsRenderer from './Map'
import Autocomplete from "./autocomplete";
import data from "../../parking.json";
import './Map.css'
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
  GroundOverlay,
} from "react-places-autocomplete";
import Toggleinfo from './Toggleinfo'


let arrayInfo = [];
// let infoPollution = pollutions.data.data.iaqi.no2.v;




export default class Map extends Component {
  

  

  constructor(props) {
    super(props);
    this.props = props;
    
    this.state = {
      address: "",
      lat: 40.392321599999995,
      lng: -3.6985121999999997,
      zoom: 13,
      start:{lat:"", lng:""},
      end:{lat:"", lng:""},
      pollutionInfo:[],
      arrayInfo:[]
    };
  }




  getPollution = city => {
    return axios
      .get(
        `http://api.waqi.info/feed/${city}/?token=78c5fbbab6b2531e1aa2412418bd283e637270a3`
      )
      .then(pollutions => {
        let pollutionPoint = {
          position: {
            lat: pollutions.data.data.city.geo[0],
            lng: pollutions.data.data.city.geo[1]
          },
          name: pollutions.data.data.iaqi.no2.v
        };
        const _state = {...this.state}
        _state.pollutionInfo.push(pollutionPoint)
        this.setState(_state)
      });
  };






  getLocations = () => {
    let array = data["@graph"];

    array.forEach(arr => {
      let arrayData = {
        relation: arr.relation,
        address: arr.address,
        position: { lat: arr.location.latitude, lng: arr.location.longitude },
        name: arr.title,
        // address: arr.streetaddress,
        info: arr.organization
      };
      const _state = {...this.state}
        _state.arrayInfo.push(arrayData)
        this.setState(_state)
    });
  
  };



  updateCoordinates = (address, originOrDestination) => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng =>
        {
          let _state = {...this.state};

          _state[originOrDestination] = {
            lat: latLng.lat, 
            lng: latLng.lng
          } 

          this.setState(_state)
        }
      )
      .catch(error => console.error(`Error`, error));
  };
  
  componentWillMount() {
    this.getPollution("Madrid");
    this.getLocations();

  }

  render() {
    console.log(this.state)
    return (

      <div class="paginacompleta">
<div className="inputs">
      <div className="autocompleteinput">
          <Autocomplete updateCoordinates={this.updateCoordinates} type="origin" />

          <Autocomplete updateCoordinates={this.updateCoordinates} type="destination" />
          </div>
</div>
        <div> 
        <MapWithADirectionsRenderer 
        journeyOrigin={this.state.origin}
         journeyDestination={this.state.destination} 
         center={{lat:this.state.lat, lng: this.state.lng}} 
         pollution={this.state.pollutionInfo} 
         arrayInfo={this.state.arrayInfo} 
         /> 
         <div className="toggleescdenario">
         <Toggleinfo />
         </div>
        </div>
      </div>
 

      
    );
  }
 }
  
