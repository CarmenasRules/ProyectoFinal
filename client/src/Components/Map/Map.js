 /* eslint-disable no-undef */
// /* global google */

import { compose, withProps, lifecycle }  from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
  Marker,
  Polygon
} from "react-google-maps";
import React, { Component } from "react";



const coords = [
  { lng: 40.408861, lat: -3.692386 },
  { lng: 40.407725, lat: -3.693364 },
  { lng: 40.405127, lat:  -3.702737 },
  { lng: 40.406693, lat: -3.711553 },
  { lng: 40.408690, lat: -3.713138 },
  { lng: 40.410621, lat:  -3.713899 },
  { lng: 40.422204, lat: -3.712916 },
  { lng: 40.423415, lat:  -3.710815 },
  { lng: 40.428998, lat:  -3.715074 },
  { lng: 40.430419, lat:  -3.713883 },
  { lng: 40.429605, lat: -3.705779 },
  { lng: 40.427746, lat: -3.695789 },
  { lng: 40.425095, lat: -3.690518 },
  { lng: 40.419147, lat:  -3.693222 },
  { lng: 40.414932, lat:  -3.694140 },
  { lng: 40.409063, lat: -3.692270 },
  { lng: 40.408861, lat: -3.692386 },];

  const reversedCoords = coords.map( ll => {
    return { lat: ll.lng, lng: ll.lat }
});



const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyApM0H8i-9V4kDgjug0RW04LOwSRV18uYw&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `590px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentDidMount() {
      const DirectionsService = new window.google.maps.DirectionsService();

      DirectionsService.route({
        origin: new window.google.maps.LatLng(40.375645, -3.697076), 
        destination: new window.google.maps.LatLng(40.406964, -3.672410),
        travelMode: google.maps.TravelMode.DRIVING,

        // waypoints:
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  })
)(props =>
  <GoogleMap
    defaultZoom={7}
    defaultCenter={new google.maps.LatLng(40.406964, -3.672410)}



    
   
  >
   {props.isMarkerShown && <Marker position={{ lat: 41.015137, lng: 28.979530 }} />}
        <Polygon
            path={reversedCoords}
            //key={1}
            options={{
                fillColor: "#000",
                fillOpacity: 0.4,
                strokeColor: "#000",
                strokeOpacity: 1,
                strokeWeight: 1
            }} />
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
);


export default MapWithADirectionsRenderer

