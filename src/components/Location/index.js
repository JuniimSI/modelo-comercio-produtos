// @flow 
import * as React from 'react';
import { useState } from "react";
import ReactMapGL from 'react-map-gl';

export const Location = (props) => {
    const [viewport, setViewport] = React.useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
      });
   
    return (
        <>
        <div className="order-location-container">
            <div className="order-location-content">
                <ReactMapGL
                    {...viewport}
                    width="100%"
                    height="100%"
                    mapStyle='mapbox://styles/juniimsi/ckl9yan2u1dvk17p6dvh5mwh7'
                    mapboxApiAccessToken={process.env.MAPBOX_KEY}
                    onViewportChange={(viewport) => setViewport(viewport)}
                    />
            </div>
        </div>
        </>
    );
};

export default Location;