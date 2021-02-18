// @flow 
import * as React from 'react';
import { useState } from "react";
import ReactMapGL, {Marker} from 'react-map-gl';

export const Location = (props) => {
    const [viewport, setViewport] = React.useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 15,
        scrollZoom: false
      });

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
                    <Marker latitude={37.7577} longitude={-122.4376}>
                        <div>Loja</div>
                    </Marker>
                </ReactMapGL>
            </div>
        </div>
        </>
    );
};

export default Location;