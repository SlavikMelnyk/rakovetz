import React, {useState} from 'react';
import { GoogleMap, Marker, InfoWindow, withScriptjs, withGoogleMap } from 'react-google-maps';

function Map() {
  const [selected, setSelected] = useState(false);
  
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{lat: 49.739684, lng: 24.029716}}
    >
      <Marker
        position={{ lat: 49.63651, lng: 24.019465 }}
        onClick={()=>{
          setSelected(true);
        }}
      />
      
      {selected && (
        <InfoWindow
          position={{ lat: 49.6365033, lng: 24.0194774 }}
          onCloseClick={()=>{
            setSelected(false);
          }}
        >
          <div>
            <h2>Forest House Rakovetz</h2>
            <p>Novosilka</p>
            <p>L'vivs'ka oblast</p>
            <p>Ukraine</p>
            <p>81164</p>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={'https://maps.google.com/maps?ll=49.636517,24.019429&z=22&t=m&hl=en&gl=US&mapclient=apiv3&cid=14876923895261332263'}
            >View on Google Maps</a>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default () => {
  return(
    <React.Fragment>
      <WrappedMap
        googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBGx1tqY80K6JIMtC3CGBxB71e5oGzUCDs'}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </React.Fragment>
  );
}
