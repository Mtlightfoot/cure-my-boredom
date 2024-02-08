import React, { useEffect, useState } from "react";
import '../styles/style.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CureMe from '../components/CureMe'
import Typography from '@mui/material/Typography';
import ActivitiesMatt from './ActivitiesMatt';
import API from '../utils/BoredApi'

// Pages imports
// import SearchBar from '../components/SearchBar';
// import FetchData from '../data/FetchData';
// import News from './News';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Activities() {

    const [searchResult, setSearchResult] = useState("");

    const query = (query) => {
        API.search(query)
            .then(res => { setSearchResult({ ...searchResult, results: res.data }) })
            .catch(err => { console.log(err) });
    }

    useEffect(() => {
        console.log(searchResult);
    }, [searchResult]);

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{
                    margin: "20px"
                }}>

                    <Grid item xs={12} md={6}>
                        <Item sx={{
                            minHeight: "60vh"
                        }}>

                            <Typography variant="h5" component="h2" sx={{
                                fontWeight: "800",
                                marginTop: "20px",
                                marginBottom: "30px",
                                color: "#313742",
                                filter: "drop-shadow(0.5px 1px 0rem #BE3D3E)"
                            }}>Click what type of Activity you are interested in!
                            </Typography>

                            <CureMe query={query} />

                        </Item>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Item sx={{
                            minHeight: "60vh",
                            justifyContent: "center"
                        }}>
                            <Typography variant="h5" component="h2" sx={{
                                fontWeight: "800",
                                marginTop: "20px",
                                marginBottom: "20px",
                                color: "#313742",
                                filter: "drop-shadow(0.5px 1px 0rem #BE3D3E)"
                            }}>Activity</Typography>
                            <ActivitiesMatt searchResult={searchResult} />
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Activities;