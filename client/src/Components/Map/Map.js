/* eslint-disable no-undef */
// /* global google */

import { compose, withProps, lifecycle, withStateHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
  Marker,
  Polygon,
  InfoWindow
} from "react-google-maps";
import React, { Component } from "react";
import data from "../../parking.json";
import './Map.css'

// const FaAnchor = require("reac </Marker>t-icons/lib/fa/anchor");



const coords = [
  { lng: 40.408861, lat: -3.692386 },
  { lng: 40.407725, lat: -3.693364 },
  { lng: 40.405127, lat: -3.702737 },
  { lng: 40.406693, lat: -3.711553 },
  { lng: 40.40869, lat: -3.713138 },
  { lng: 40.410621, lat: -3.713899 },
  { lng: 40.422204, lat: -3.712916 },
  { lng: 40.423415, lat: -3.710815 },
  { lng: 40.428998, lat: -3.715074 },
  { lng: 40.430419, lat: -3.713883 },
  { lng: 40.429605, lat: -3.705779 },
  { lng: 40.427746, lat: -3.695789 },
  { lng: 40.425095, lat: -3.690518 },
  { lng: 40.419147, lat: -3.693222 },
  { lng: 40.414932, lat: -3.69414 },
  { lng: 40.409063, lat: -3.69227 },
  { lng: 40.408861, lat: -3.692386 }
];

const reversedCoords = coords.map(ll => {
  return { lat: ll.lng, lng: ll.lat };
});


class Map extends React.Component {

  constructor(){
    super()
    this.state = {
      showInfoIndex:0
    }
  }

   showInfo= (a)=>{
    console.log("holaaaa")
    this.setState({showInfoIndex: a })
   }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}



const MapWithADirectionsRenderer = compose(
  withStateHandlers(
    () => ({
      isOpen: false
    }),
    {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen
      })
    }
    ),
    withProps({
      googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${
        process.env.REACT_APP_APIKEY
      }&v=3.exp&libraries=geometry,drawing,places`,
      loadingElement: <div style={{width: "700px" , height:"600px"}} />,
      containerElement: <div className="mapaa" style={{width: "700px" , height:"600px"}} />,
      mapElement: <div className="mapaa" style={{width: "900px" , height:"1080px"}} />
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
      componentWillReceiveProps() {
        if (this.props.journeyOrigin && this.props.journeyDestination) {
          const DirectionsService = new window.google.maps.DirectionsService();
          
          DirectionsService.route(
            {
              origin: new window.google.maps.LatLng(
                this.props.journeyOrigin.lat,
                this.props.journeyOrigin.lng
                ),
                destination: new window.google.maps.LatLng(
                  this.props.journeyDestination.lat,
                  this.props.journeyDestination.lng
                  ),
                  travelMode: google.maps.TravelMode.DRIVING
                },
                (result, status) => {
                  if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                      directions: result
                    });
                  } else {
                    console.error(`error fetching directions ${result}`);
                  }
                }
                );
              }
            }
          })
          )(
            props => (
              <GoogleMap
              defaultZoom={13}
              defaultCenter={new google.maps.LatLng(40.406964, -3.67241)}
              center={new google.maps.LatLng(props.center)}
              >
      {console.log(props.center.lat)}
      {props.isMarkerShown && (
        <Marker position={{ lat: 41.015137, lng: 28.97953 }} />
        )}
      {
        
        props.arrayInfo &&
        props.arrayInfo.map((info, index) => {
          
          
          return (
            <Marker
            onClick={() => {
              showInfo(2);
            }}
            position={info.position}
            animation={window.google.maps.Animation.DROP}
            icon="./img/iconParking.png"
            >
                {props.showInfoIndex == index && (
                  <InfoWindow onCloseClick={props.onToggleOpen}>
                    <div>
                      <div>hola</div>
                      <div>1.500.000đ</div>
                    </div>
                  </InfoWindow>
                )}
              </Marker>
            );
          })
        }
  
      <Polygon
        path={reversedCoords}
        //key={1}
        options={{
          fillColor: "#000",
          fillOpacity: 0.4,
          strokeColor: "#000",
          strokeOpacity: 1,
          strokeWeight: 1
        }}
        />
      {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
  )
  // this.getlocation();
  );
                                                               

export default MapWithADirectionsRenderer;
