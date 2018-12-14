import React, { Component } from "react";
import map from "./Map.css";
import axios from "axios";
import autocompleteEnd from "./autocompleteEnd";
import GoogleMapReact from "google-map-react";
import data from "../../parking.json";
import AutocompleteStart from "./autocompleteStart";
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng
} from "react-places-autocomplete";
let arrayInfo = [];
let pollutionInfo = [];

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "blue",
      padding: "10px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)"
    }}
  >
    {text}
  </div>
);

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    // this.state = { currentPosition:{} , address: '' };
    this.state = {
      address: "",
      lat: 40.392321599999995,
      lng: -3.6985121999999997,
      zoom: 13
    };

    this.map = (zoom, lat, lng) => {
      let DirectionsService = new window.google.maps.DirectionsService();
      DirectionsService.route(
        {
          origin: new window.google.maps.LatLng(lat, lng),
          destination: new window.google.maps.LatLng(lat, lng),
          travelmode: window.google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            this.setState({
              direction: result
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );

      return (
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyApM0H8i-9V4kDgjug0RW04LOwSRV18uYw" }}
          defaultCenter={{ lat: this.state.lat, lng: this.state.lng }}
          defaultZoom={this.state.zoom}
          center={{ lat: this.state.lat, lng: this.state.lng }}
          zoom={this.state.zoom}
          onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
          yesIWantToUseGoogleMapApiInternals
        >
          {this.state.lat && (
            <AnyReactComponent
              lat={this.state.lat}
              lng={this.state.lng}
              text={"esta uste aqui"}
            />
          )}
        </GoogleMapReact>
      );
      this.getLocations();
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
        pollutionInfo.push(pollutionPoint);
      });
  };

  renderMarkers(map, maps) {
    let markerParkings = arrayInfo.map(place => {
      new maps.Marker({
        position: place.position,
        animation: window.google.maps.Animation.DROP,
        icon:"./img/iconParking.png",
        map,
        title: place.name
      });
    });
    let markerPollution = pollutionInfo.map(place => {
      new maps.Marker({
        position: place.position,
        map,
        title: place.name,
        animation: window.google.maps.Animation.DROP,
      });
    });
  }

  getLocations = () => {
    let array = data["@graph"];
    // .then(response => response.json())

    array.forEach(arr => {
      let arrayData = {
        relation: arr.relation,
        address: arr.address,
        position: { lat: arr.location.latitude, lng: arr.location.longitude },
        name: arr.title,
        address: arr.streetaddress,
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

  getCoordinates = coordinates => {
    this.setState({ ...this.state, coordinates });
  };
  getCoordinates = coordinates2 => {
    this.setState({ ...this.state, coordinates2 });
  };

  render() {
    const locations = ["madrid", "barcelona", "algeciras"];
    window.addEventListener("load", this.getLocations);
    window.addEventListener(
      "load",
      locations.forEach(location => this.getPollution(location))
    );

    const map = this.map();

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "570px", width: "100%" }}>
        <div>
          <AutocompleteStart updateCoordinates={this.updateCoordinates} />
          <autocompleteEnd update={this.updateCoorend} />
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
        {map}
      </div>
    );
  }
}

export default SimpleMap;
