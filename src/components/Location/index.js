// @flow 
import * as React from 'react';
import { useState } from "react";
import ReactMapGL, {Marker, NavigationControl} from 'react-map-gl';
import MyMarker from '../MyMarker';

export const Location = (props) => {
    const [viewport, setViewport] = React.useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 19,
        scrollZoom: false
      });

      const navControlStyle= {
        right: 15,
        top: 300
      };

      const [settings, setsettings] = useState({
        dragPan: true,
        dragRotate: true,
        scrollZoom: false,
        touchZoom: true,
        touchRotate: true,
        keyboard: true,
        doubleClickZoom: true
        });
   
    return (
        <>
        <div className="bg-footer-2"></div>
        <div className="order-location-container">
            <div className="order-location-content">
                <ReactMapGL
                    {...settings}
                    {...viewport}
                    width="100%"
                    height="100%"
                    mapStyle='mapbox://styles/juniimsi/ckl9yan2u1dvk17p6dvh5mwh7'
                    mapboxApiAccessToken={process.env.MAPBOX_KEY}
                    onViewportChange={(viewport) => setViewport(viewport)}
                >
                     <NavigationControl style={navControlStyle} />
                    <Marker className="marker-style" latitude={37.7577} longitude={-122.4376}>
                        <MyMarker name="Loja!!!" description="Visite-nos!"/>
                        <img width="50" src="./img/place.svg" />
                    </Marker>
                </ReactMapGL>
            </div>
        </div>
        </>
    );
};

export default Location;