import React, { Component } from 'react';
import map from './Map.css';
import GoogleMapReact from 'google-map-react';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  constructor(props){
    super(props)
    this.props = props
    this.state = { address: '' };
    this.map = (zoom) => {
      return(
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyApM0H8i-9V4kDgjug0RW04LOwSRV18uYw" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Kreyser Avrora'}
          />
        </GoogleMapReact>
      )
    }
  }
  static defaultProps = {
    center: {
      lat: 40.4167, 
      lng: -3.70325
    },
    zoom: 11
  };
  
 
  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };



  render() {
    const map = this.map()
    console.log(this.props)
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
                    <span>{suggestion.description}</span>
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
