import React, { useEffect, useState } from "react";
import '../styles/style.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import API from '../utils/OmdbApi.js'
import Button from '@mui/material/Button';
import { generate, count } from "random-words";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const height = {
    minHeight: "80vh"
}

function Movies() {

    const [searchResult, setSearchResult] = useState("");

    const query = (query) => {
        API.search(query)
            .then(res => { setSearchResult({ ...searchResult, results: res.data }) })
            .catch(err => { console.log(err) });
    }

    useEffect(() => {
        console.log(searchResult);
    }, [searchResult]);

    return <div style={height}>

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{
                margin: "20px"
            }}>

                <Grid item xs={12} md={12}>
                    <Item sx={{
                        minHeight: "70vh"
                    }}>
                        <Button onClick={() => query(generate())} variant="contained" sx={{
                            fontWeight: "800",
                            marginTop: "20px",
                            marginBottom: "30px",
                            color: "#313742",
                            filter: "drop-shadow(0.5px 1px 0rem #BE3D3E)",
                            backgroundColor: "whiteSmoke"
                        }}>Click me for a random movie to watch!</Button>
                        <Grid item xs={12} md={6} align="center" justify="center" margin="auto">
                            {searchResult ? (
                                <Card sx={{
                                    justify: "center",
                                    alignItems: "center",
                                    boxShadow: "5px 5px 0px 0px #BE3D3E",
                                    backgroundColor: "#313742",
                                    color: "white"
                                }}>
                                    <CardActionArea>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}
                                        >
                                            <CardMedia
                                                component="img"
                                                image={searchResult.results.Poster}
                                                alt={"A poster of " + searchResult.results.Title}
                                                sx={{
                                                    width: "300px", marginTop: "20px"
                                                }}
                                            /></div>
                                        <CardContent>
                                            <Typography gutterBottom variant="h4" component="div" sx={{
                                                fontWeight: "800",
                                                backgroundColor: "#BE3D3E",
                                                color: "white",
                                                padding: "10px"
                                            }} >
                                                {searchResult.results.Title}
                                            </Typography>
                                            <Typography sx={{ color: "white", borderBottom: "1px solid #BE3D3E", width: "200px", marginBottom: "10px", fontWeight: "600" }} variant="h5" color="text.secondary">
                                                Plot
                                            </Typography>
                                            <Typography sx={{ color: "white" }} variant="body1" color="text.secondary">
                                                {searchResult.results.Plot}
                                            </Typography>
                                            <Typography sx={{ color: "white", borderBottom: "1px solid #BE3D3E", width: "200px", marginBottom: "10px", fontWeight: "600" }} variant="h5" color="text.secondary">
                                                Genre
                                            </Typography>
                                            <Typography sx={{ color: "white" }} variant="body1" color="text.secondary">
                                                {searchResult.results.Genre}
                                            </Typography>
                                            <Typography sx={{ color: "white", borderBottom: "1px solid #BE3D3E", width: "200px", marginBottom: "10px", fontWeight: "600" }} variant="h5" color="text.secondary">
                                                Year
                                            </Typography>
                                            <Typography sx={{ color: "white" }} variant="body1" color="text.secondary">
                                                {searchResult.results.Year}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            ) : (<div><div class="eyeLoader"></div>
                                <h3>Awaiting Magic Button Press...</h3>
                                <p>Beware!! Due to the random nature you don't know what you're going to get</p></div>
                            )}
                        </Grid>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    </div>
}

export default Movies;
