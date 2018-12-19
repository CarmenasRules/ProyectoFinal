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
  
  
  
    // getpollution = () => {
    //   fetch(
    //     "https://tiles.waqi.info/tiles/{aqi}/{z}/{x}/{y}.png?token=78c5fbbab6b2531e1aa2412418bd283e637270a3"
    //   )
    //     .then(response => response.json())
    //     .then(pollution => {
    //       console.log(pollution);
  
    //       pollution.forEach(location => {
    //         let locationData = {
    //           // position:{lat:,lng: },
    //           // name:
    //         };
    //         pollutionInfo.push(/* pollutionData */);
    //       });
    //     });
    // };
  
    // renderMarkers(map, maps); {
    //   let marker = arrayInfo.map(place => {
    //     new maps.Marker({
    //       position: place.position,
    //       map,
    //       title: place.name,
    //     });
    //   });
    //   let marker2 = arrayInfo.map(place => {
    //     new maps.Marker({
    //       position: place.position,
    //       map,
    //       title: place.name,
    //     });
    //   });
    // }
  
    // getLocations = () => {
    //   let array = data["@graph"];
    //   // .then(response => response.json())
  
    //   array.forEach(arr => {
    //     let arrayData = {
    //       relation: arr.relation,
    //       address: arr.address,
    //       position: { lat: arr.location.latitude, lng: arr.location.longitude },
    //       name: arr.title,
    //       address: arr.streetaddress,
    //       info: arr.organization
    //     };
    //     arrayInfo.push(arrayData);
    //   });
    //   console.log(arrayInfo);
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(data => {
    //       let currentPosition = {
    //         lat: data.coords.latitude,
    //         lng: data.coords.longitude
    //       };
    //       // this.initMap(currentPosition)
    //     });
    //   }
    // };
  
    // updateCoordinates = address => {
    //   geocodeByAddress(address)
    //   .then(results => getLatLng(results[0]))
    //   .then(latLng => {
    //     this.setState({...this.state, coorStart: latLng})
    //     })
    //     .catch(error => console.error(`Error`, error));
    // };
  
    // getCoordinates = coordinates => {
    //   this.setState({ ...this.state, coordinates });
    // };
    // getCoordinates = coordinates2 => {
    //   this.setState({ ...this.state, coordinates2 });
    // };





    
    const MapWithADirectionsRenderer = compose(
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
          travelMode: google.maps.TravelMode.DRIVING,
  
         
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

  {console.log(props.center.lat)}
   {props.isMarkerShown && <Marker position={{ lat: 41.015137, lng: 28.979530 }} />}
    {props.arrayInfo && props.arrayInfo.map(info => <Marker position={info.position} icon="./img/iconParking.png"/>)}
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




// const AnyReactComponent = ({ text }) => (
//   <div
//     style={{
//       height: "50px",
//       width: "50px",
//       color: "white",
//       background: "blue",
//       padding: " 5px",
//       display: "inline-flex",
//       textAlign: "center",
//       alignItems: "center",
//       justifyContent: "center",
//       borderRadius: "100%",
//       transform: "translate(-50%, -50%)"
//     }}
//   >
//     {text}
//   </div>
// );

// class SimpleMap extends Component {
//   constructor(props) {
//     super(props);
//     this.props = props;
//     // this.state = { currentPosition:{} , address: '' };
//     this.state = {
//       markers: [],
//       address: "",
//       lat: 40.392321599999995,
//       lng: -3.6985121999999997,
//       zoom: 13
//     };



//     this.map = (zoom, lat, lng) => {
//       let DirectionsService = new window.google.maps.DirectionsService();
//       DirectionsService.route(
//         {
//           origin: new window.google.maps.LatLng(40.407749, -3.710138),
//           destination: new window.google.maps.LatLng(40.762341, -3.788512),
//           travelmode: window.google.maps.TravelMode.DRIVING
//         },
//         (result, status) => {
//           if (status === window.google.maps.DirectionsStatus.OK) {
//             this.setState({
//               direction: result
//             });
//           } else {
//             console.error(`error fetching directions ${result}`);
//           }
//         }
//       );

//       return (
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "AIzaSyApM0H8i-9V4kDgjug0RW04LOwSRV18uYw" }}
//           defaultCenter={{ lat: this.state.lat, lng: this.state.lng }}
//           defaultZoom={this.state.zoom}
//           center={{ lat: this.state.lat, lng: this.state.lng }}
//           zoom={this.state.zoom}
//           travelMode= {window.google.maps.DirectionsTravelMode.DRIVING}
//           onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
//           yesIWantToUseGoogleMapApiInternals
//         >
//           {this.state.coorStart && (
//             <AnyReactComponent 
//             lat={this.state.coorStart.lat}
//             lng={this.state.coorStart.lng}
//             text={"esta uste aqui"}
//           />
//           )}
//         </GoogleMapReact>
//       );
//       this.getLocations();
//     };
//   }

//   //   updateCoorstart = (coorstart) => {
//   //     this.setState({...this.state, coorstart})
//   // }
//   //   updateCoorend = (coorsend) => {
//   //   this.setState({...this.state, coorsend})
//   // }


//   render() {
//     window.addEventListener("load", this.getLocations);

//     const map = this.map();

//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: "570px", width: "100%" }}>
//         <div>
//           <AutocompleteStart updateCoordinates={this.updateCoordinates} />
//           <AutocompleteEnd updateCoordinates={this.updateCoordinates} />
//         </div>

//         <div id="mode-selector" class="controls">
//           <input
//             type="radio"
//             name="type"
//             id="changemode-walking"
//             checked="checked"
//           />
//           <label for="changemode-walking">Walking</label>

//           <input type="radio" name="type" id="changemode-transit" />
//           <label for="changemode-transit">Transit</label>

//           <input type="radio" name="type" id="changemode-driving" />
//           <label for="changemode-driving">Driving</label>
//         </div>
//         {map}
//       </div>
//     );
//   }
// }

// export default SimpleMap;
