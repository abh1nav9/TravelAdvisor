import React from 'react';
import googleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOutLinedIcon from '@material-ui/icons/LocationCityOutlined'; 
import { Rating } from '@material-ui/lab';
import useStyles from './styles';

function Map() {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact>
        
      </GoogleMapReact>
    </div>
  );
}

export default Map;