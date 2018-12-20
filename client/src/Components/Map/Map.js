 /* eslint-disable no-undef */
// /* global google */

import { compose, withProps, lifecycle }  from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
  Marker,
  Polygon,
} from "react-google-maps";
import React, { Component } from "react";
import data from "../../parking.json";



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
  //      withStateHandlers(() => ({
  //   isOpen: false,
  // }), {
  //   onToggleOpen: ({ isOpen }) => () => ({
  //     isOpen: !isOpen,
  //   })
  // })
      withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_APIKEY}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `590px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
      }),
      withScriptjs,
      withGoogleMap,
      lifecycle({
        componentWillReceiveProps() {        
        
        
      if (this.props.journeyOrigin && this.props.journeyDestination) {
        const DirectionsService = new window.google.maps.DirectionsService();

        DirectionsService.route({
          origin: new window.google.maps.LatLng(this.props.journeyOrigin.lat, this.props.journeyOrigin.lng), 
          destination: new window.google.maps.LatLng(this.props.journeyDestination.lat, this.props.journeyDestination.lng), 
          travelMode: google.maps.TravelMode.TRANSIT,
   
          
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
    }
  })
)(props =>
  
  <GoogleMap
  defaultZoom={13}
  defaultCenter={new google.maps.LatLng(40.406964, -3.672410)}
  center={new google.maps.LatLng(props.center)}
  >
  
   {/* {props.isMarkerShown && <Marker position={{ lat: 41.015137, lng: 28.979530 }} />}   */}
  {console.log(props.center.lat)}
   {props.isMarkerShown && <Marker position={{ lat: 41.015137, lng: 28.979530 }} />}
    {props.arrayInfo && props.arrayInfo.map(info => <Marker position={info.position} animation={window.google.maps.Animation.DROP} icon="./img/iconParking.png"/>)}
    {props.pollution && props.pollution.map(info => {
      
      let icon;
    if (props.pollution[0].no2 < 100) {
      icon = "../../img/amarillo.png";
    } else if (100< props.pollution[0].no2 < 250) {
      icon = "../../img/orange.jpg";
    } else {
      icon = "../../img/rojo.png";
    }
    


    return (<Marker position={info.position} animation={window.google.maps.Animation.DROP} icon={info.icon}/>)})} 
    {/* "./img/nube.png" */}
    
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
  // this.getlocation();
);


export default MapWithADirectionsRenderer
