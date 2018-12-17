import React, { Component } from "react";
import axios from "axios";
import MapWithADirectionsRenderer from './Map'
import AutocompleteEnd from "./autocompleteEnd";
import AutocompleteStart from "./autocompleteStart";
import data from "../../parking.json";
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng
} from "react-places-autocomplete";


let arrayInfo = [];
let pollutionInfo = [];
// let infoPollution = pollutions.data.data.iaqi.no2.v;




export default class Map extends Component {
  

  

  constructor(props) {
    super(props);
    this.props = props;
    
    this.state = {
      address: "",
      lat: 40.392321599999995,
      lng: -3.6985121999999997,
      zoom: 13
    };
  }




  getPollution = city => {
    return axios
      .get(
        `http://api.waqi.info/feed/${city}/?token=78c5fbbab6b2531e1aa2412418bd283e637270a3`
      )
      .then(pollutions => {
        console.log(pollutions.data.data)
        let pollutionPoint = {
          position: {
            lat: pollutions.data.data.city.geo[0],
            lng: pollutions.data.data.city.geo[1]
          },
          name: pollutions.data.data.iaqi.no2.v
        };
        pollutionInfo.push(pollutionPoint);
      });
  };






  getLocations = () => {
    let array = data["@graph"];
    // .then(response => response.json())

    array.forEach(arr => {
      let arrayData = {
        relation: arr.relation,
        address: arr.address,
        position: { lat: arr.location.latitude, lng: arr.location.longitude },
        name: arr.title,
        // address: arr.streetaddress,
        info: arr.organization
      };
      arrayInfo.push(arrayData);
    });
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(data => {
        let currentPosition = {
          lat: data.coords.latitude,
          lng: data.coords.longitude
        };
        // this.initMap(currentPosition)
      });
    }
  };

  updateCoordinates = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng =>
        this.setState({ ...this.state, lat: latLng.lat, lng: latLng.lng })
      )
      .catch(error => console.error(`Error`, error));
  };

  // getCoordinates = coordinates => {
  //   this.setState({ ...this.state, coordinates });
  // };
  // getCoordinates = coordinates2 => {
  //   this.setState({ ...this.state, coordinates2 });
  // };


  
  render() {

    return (
      <div>

      <div>
          <AutocompleteStart updateCoordinates={this.updateCoordinates} />
          <AutocompleteEnd updateCoordinates={this.updateCoordinates} />
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
        <MapWithADirectionsRenderer />

      </div>
    );
  }
 }
  
