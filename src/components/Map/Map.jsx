import React from 'react';
import googleMapReact, { latLng2Tile } from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOutLinedIcon from '@material-ui/icons/LocationCityOutlined'; 
import { Rating } from '@material-ui/lab';
import useStyles from './styles';

function Map() {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');
  const coordinates = { lat: 0, lng: 0};

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
      bootstrapURLKeys={{key: ''}}
      defaultCenter={coordinates}
      center={coordinates}
      defaultZoom={14}
      margin={[]}
      >
        
      </GoogleMapReact>
    </div>
  );
}

export default Map;