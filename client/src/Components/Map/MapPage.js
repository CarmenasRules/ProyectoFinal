import React, { Component } from "react";
import axios from "axios";
import MapWithADirectionsRenderer from './Map'
import Autocomplete from "./autocomplete";
import data from "../../parking.json";
import pollutionData from '../../pollution.json';
import './Map.css'
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
  GroundOverlay,
} from "react-places-autocomplete";
import Toggleinfo from './Toggleinfo'


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

  getPollution = (city) => {
    let arrayPollution = pollutionData;
  
      arrayPollution.forEach(pollutions => {
        let pollutionPoint = {
          position: {
            lat: pollutions.city.geo[0],
            lng: pollutions.city.geo[1]
          },
          no2: pollutions.iaqi.no2.v
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
<<<<<<< HEAD

  

=======
>>>>>>> 1291ac77238742a0830226c0613b8efa32c065b8
  
  componentWillMount() {
    this.getPollution("Madrid");
    this.getLocations();

  }

  render() {
    console.log(this.state)
    return (
      <div>

      <div>
          <Autocomplete updateCoordinates={this.updateCoordinates} type="origin" />
          <Autocomplete updateCoordinates={this.updateCoordinates} type="destination" />
        </div>

        <div id="mode-selector" class="controls">
          <input
            type="radio"
            name="type"
            id="changemode-walking"
            checked="checked"
          />
          <label for="changemode-walking">Walking</label>

          <input type="radio" name="type" id="changemode-transit" />
          <label for="changemode-transit">Transit</label>

          <input type="radio" name="type" id="changemode-driving" />
          <label for="changemode-driving">Driving</label>
        </div>
        <MapWithADirectionsRenderer 
        journeyOrigin={this.state.origin}
         journeyDestination={this.state.destination} 
         center={{lat:this.state.lat, lng: this.state.lng}} 
         pollution={this.state.pollutionInfo} 
         arrayInfo={this.state.arrayInfo} 
         /> <Toggleinfo />
        {/* center no me servirá y tengo q poner lo de start y end */}

      </div>
    );
  }
 }
  
