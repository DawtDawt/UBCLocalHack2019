import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>

class Maps extends Component {
    static defaultProps = {
        center: {
          lat: 49.2581,
          lng: -123.2467873
        },
        zoom: 11
      };
    
      render() {
        return (
        <div style={{height:'400px', width: '100%'}}>
          
          <div style={{ height: '100%', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyBx7ozH-v1C-BxgCUPgh84DGMtcsAZ2lQE" }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
          </div>
        );
      }
}

export default Maps;