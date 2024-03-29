import React, { useState } from 'react';
import FetchData from '../data/FetchData';
import Geo from '../components/Geo';
import LocationData from '../data/LocationData';
import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const News = () => {
    const [location, setLocation] = useState(null);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{
                padding: "30px"
            }}>

                <Grid item xs={12} md={6}>
                    <Item sx={{
                        minHeight: "30vh"
                    }}>
                    <Typography variant="h5" component="h2" sx={{
                                fontWeight: "800",
                                marginTop: "20px",
                                marginBottom: "20px",
                                color: "#313742",
                                filter: "drop-shadow(0.5px 1px 0rem #BE3D3E)"
                            }}>Search a News Topic</Typography>
                        <FetchData />
                    </Item>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Item sx={{
                        minHeight: "70vh"
                    }}>
                        <Typography variant="h5" component="h2" sx={{
                            fontWeight: "800",
                            marginTop: "20px",
                            marginBottom: "20px",
                            color: "#313742",
                            filter: "drop-shadow(0.5px 1px 0rem #BE3D3E)"
                        }}>News in your location
                        </Typography>
                        <Geo setLocation={setLocation} />
                        {location && <LocationData latitude={location.latitude} longitude={location.longitude} />}
                    </Item>
                </Grid>
            </Grid>
        </Box>

    );
};

export default News;