import React, { useState } from 'react';
import FetchData from '../data/FetchData';
import Geo from '../components/Geo';
import LocationData from '../data/LocationData';
import { Container, Grid } from '@mui/material';

const News = () => {
    const [location, setLocation] = useState(null);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Container style={{ textAlign: 'center' }}>
                    <h1>News in your location</h1>
                    <Geo setLocation={setLocation} />
                    {location && <LocationData latitude={location.latitude} longitude={location.longitude} />}
                </Container>
            </Grid>
            <Grid item xs={12} s={12} md={6}>
                <Container style={{ textAlign: 'center' }}>
                    <FetchData />
                </Container>
            </Grid>
        </Grid>
    );
};

export default News;


