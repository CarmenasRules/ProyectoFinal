import React, { Component } from 'react';
import map from './Map.css';
import GoogleMapReact from 'google-map-react';
import PlacesAutocomplete from 'react-places-autocomplete';
import Input from '../Input/Input';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
 
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
    this.state = { 
      address: '' ,
      lat: 40.4167,
      lng: -3.70325,
      zoom: 13
    };

    this.map = (zoom) => {
      
      return(
        <GoogleMapReact
        bootstrapURLKeys={{ key:"AIzaSyApM0H8i-9V4kDgjug0RW04LOwSRV18uYw" }}
        defaultCenter={{lat:this.state.lat, lng:this.state.lng}}
        defaultZoom={this.state.zoom}
        center={{lat:this.state.lat, lng:this.state.lng}}
        zoom={this.state.zoom}
        >
          {this.state.lat && <AnyReactComponent
            lat={this.state.lat}
            lng={this.state.lng}
            text={'esta uste aqui'}
          />}
        </GoogleMapReact>
      )
    }
  }
  
 
  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    

    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.setState({...this.state, lat:latLng.lat, lng:latLng.lng}))
      .catch(error => console.error('Error', error));
  };

  select = (e) => {
    this.setState({...this.state, address:e})
  }


getCoordinates =(coordinates) => {
  this.setState({...this.state, coordinates})
}
  componentWillUpdate(){

  }


  render() {
    const map = this.map()
    console.log(map)
    return (

      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>

       <PlacesAutocomplete
      value={this.state.address}
      onChange={this.handleChange}
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

