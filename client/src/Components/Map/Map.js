
import React, { Component } from 'react';
import map from './Map.css';
import GoogleMapReact from 'google-map-react';
import PlacesAutocomplete from 'react-places-autocomplete';
// import Input from '../Input/Input';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
import data from '../../parking.json'
let arrayInfo = []





// const AnyReactComponent = ({ text }) => <div>{text}</div>;




 
const AnyReactComponent = ({ text }) => <div
style={{
  color: 'white', 
  background: 'grey',
  padding: '15px 10px',
  display: 'inline-flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
  transform: 'translate(-50%, -50%)'
}}>{text}</div>;
 
class SimpleMap extends Component {
  constructor(props){
    super(props)
    this.props = props
    // this.state = { currentPosition:{} , address: '' };
    this.state = { 
      address: '' ,
      lat: 40.392321599999995,
      lng:-3.6985121999999997,
      zoom: 13
    };

    this.map = (zoom) => {
      
      return(
        <GoogleMapReact
        bootstrapURLKeys={{ key:"AIzaSyApM0H8i-9V4kDgjug0RW04LOwSRV18uYw" }}
        // defaultCenter={this.props.center}
        // defaultZoom={this.props.zoom}
        // >
        //   <AnyReactComponent
        //     lat={59.955413}
        //     lng={30.337844}
        //     text={'Kreyser Avrora'}
        //     />
        defaultCenter={{lat:this.state.lat, lng:this.state.lng}}
        defaultZoom={this.state.zoom}
        center={{lat:this.state.lat, lng:this.state.lng}}
        zoom={this.state.zoom}
        onGoogleApiLoaded={({map, maps}) => this.renderMarkers(map, maps)}
        yesIWantToUseGoogleMapApiInternals
        >
          {/* {this.state.lat && <AnyReactComponent
            lat={this.state.lat}
            lng={this.state.lng}
            text={'esta uste aqui'}
          />} */}
        </GoogleMapReact>
      )
    }

    this.getLocations();
  }

  renderMarkers(map, maps, pepe) {

    // locationsInfo.push({
    //   position:{
    //     lat: 40.426687899755734,
    //     lng: -3.6996173701222492
    //   },
    //   name: "Pepe",
    // })
    let marker = arrayInfo.map( (place) =>{new maps.Marker({
      position: place.position,
      map,
      title: place.name
    });
  })
  }

  getLocations = ()=>{
    let array = data["@graph"]
    // .then(response => response.json())
    

        array.forEach(arr => {
            let arrayData = {
                position:{lat:arr.location.latitude,lng:arr.location.longitude},
                name:arr.title,
                // address: arr.street-address,
                info: arr.organization,         
            }
            arrayInfo.push(arrayData)
        })
        console.log(arrayInfo)
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((data)=>{
                let currentPosition = {
                    lat: data.coords.latitude,
                    lng: data.coords.longitude
                }
                this.initMap(currentPosition)
            })
        }
    
}

 initMap = (obj) =>{
    // map = new window.google.maps.Map(document.getElementById('map'),{
    //     zoom:13,
    //     center:obj
    // })

    // let marker = new window.google.maps.Marker({
    //     position:obj,
    //     title:'Tu ubicacion'
    // })
    // marker.setMap(map)

    // let markers = locationsInfo.map( (place) =>{
    //     return new window.google.maps.Marker({
    //         position: place.position,
    //         map:map,
    //         title:place.name
    //     })
    // })
}
  // static defaultProps = {
  //   center: {
  //     lat: 40.392321599999995, 
  //     lng: -3.6985121999999997
  //   },
  //   zoom: 11
  // };
  
  
  
  handleChange = address => {
    console.log(address)
    // this.setState({ address });
    
  };
 
  handleSelect = address => {
    

    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({...this.state, lat:latLng.lat, lng:latLng.lng}))
      .catch(error => console.error('Error', error));
  };
  handleSelect = address2 => {
    

    geocodeByAddress(address2)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({...this.state, lat:latLng.lat, lng:latLng.lng}))
      .catch(error => console.error('Error', error));
  };
  

  select = (e) => {
    this.setState({...this.state, address:e})
  }
  select = (e2) => {
    this.setState({...this.state, address2:e2})
  }

getCoordinates =(coordinates) => {
  this.setState({...this.state, coordinates})
}
  componentWillUpdate(){

  }
  getCoordinates =(coordinates2) => {
    this.setState({...this.state, coordinates2})
  }
    componentWillUpdate(){
  
  }



  render() {
    window.addEventListener('load',this.getLocations)
    
    const map = this.map()
    
    return (
      
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>

       <PlacesAutocomplete
      value={this.state.address}
      onChange={e => this.handleChange(e)}
      onSelect={this.handleSelect}
      >



    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
      <div>
            <input
            getCoordinates={this.getCoordinates} //getCoordinates
            {...getInputProps({
              placeholder: 'Search Places ...',
              className: 'location-search-input',
            })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                  >
                    <li onClick={e=>this.select(suggestion.description)}>{suggestion.description}</li>
                  </div>
                );
              })}
              
            </div>
          </div>
        )}
    </PlacesAutocomplete>
    <PlacesAutocomplete
      value={this.state.address2}
      onChange={this.handleChange2}
      onSelect={this.handleSelect2}
      >



    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
      <div>
            <input
            getCoordinates={this.getCoordinates2} //getCoordinates
            {...getInputProps({
              placeholder: 'Search Places ...',
              className: 'location-search-input',
            })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                  >
                    <li onClick={e=>this.select(suggestion.description)}>{suggestion.description}</li>
                  </div>
                );
              })}
              
            </div>
          </div>
        )}
    </PlacesAutocomplete>
     

<div id="mode-selector" class="controls">
  <input type="radio" name="type" id="changemode-walking" checked="checked" />
  <label for="changemode-walking">Walking</label>

  <input type="radio" name="type" id="changemode-transit"/>
  <label for="changemode-transit">Transit</label>

  <input type="radio" name="type" id="changemode-driving"/>
  <label for="changemode-driving">Driving</label>
</div>
        {map}
      </div>
    );
  }
}
export default SimpleMap;

