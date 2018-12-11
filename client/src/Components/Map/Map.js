import React, { Component } from 'react';
import map from './Map.css';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  constructor(props){
    super(props)
    this.props = props
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
  
 
  render() {
    const map = this.map()
    console.log(this.props)
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
      <input id="origin-input" class="controls" type="text"
    placeholder="Enter an origin location" />

<input id="destination-input" class="controls" type="text"
    placeholder="Enter a destination location" />

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
