import React, { useEffect, useState } from "react";
import '../styles/style.css';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CureMe from '../components/CureMe'
import Typography from '@mui/material/Typography';
import './ActivitiesMatt';
import API from '../utils/BoredApi';

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

            <Container maxWidth="x1" sx={{
                backgroundColor: "#0661A8",
                margin: "0",
                padding: "0"
            }}>

                <Box sx={{

                    flexGrow: 1,
                    marginTop: "20px"
                }}>
                    <Grid container spacing={2} columns={16} sx={{
                    }}>
                        <Grid xs={8}>
                            <Item sx={{

                            }}>
                                <Typography variant="h5" component="h2" sx={{
                                    marginBottom: "20px", color: "#0661A8"
                                }}>
                                    Click what type of Activity you are interested in!
                                </Typography>
                                <CureMe query={query} />
                            </Item>
                        </Grid>


                        <Grid xs={8}>
                            <Item sx={{
                                minHeight: "100vh",
                                minWidth: "100%",
                                color: "#0661A8"
                            }}>
                                <Typography variant="h5" component="h2" sx={{
                                    margin: "15px 50px",
                                }}>Activity</Typography>
                                <ActivitiesMatt searchResult={searchResult} />
                            </Item>
                        </Grid>
                    </Grid>
                </Box>

            </Container>

        </div>
    )
}

export default Activities;