import React, { Component } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import './app.css';

export default class App extends Component {

  api = '9b808bbf-f5bc-40d6-9b72-ec3e8348143f';

  mapStyle = {
    width: '640px',
    height: '480px'
  }

  mapData = {
    center: [55.7539, 37.6208],
    zoom: 12
  }

  render(){
    return (
      <div className="map">
        <YMaps>
          <div>
            <Map style={this.mapStyle} defaultState={ this.mapData }>
              <Placemark defaultGeometry={[55.7539, 37.6208]} />
            </Map>
          </div>
        </YMaps>
      </div>
    )
  }
}
