import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import React, { useEffect, useState } from "react";
import '../styles/style.css';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import API from '../utils/FactsApi'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Home() {

  const [searchResult, setSearchResult] = useState("");

  const query = () => {
    API.search()
      .then(res => { setSearchResult({ ...searchResult, results: res.data }) })
      .catch(err => { console.log(err) });
  }

  useEffect(() => {
    console.log(searchResult);
  }, [searchResult]);

  useEffect(() => {
    API.search()
      .then(res => { setSearchResult({ ...searchResult, results: res.data }) })
      .catch(err => { console.log(err) });
  }, [])

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{
          margin: "20px"
        }}>

          <Grid item xs={12} md={12}>
            <Item sx={{
              minHeight: "45vh",
              backgroundImage: "url(./assets/bored-dog.jpg)",
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}>
            </Item>
          </Grid>

          <Grid item xs={12} md={8}>
            <Item sx={{
              minHeight: "40vh",
              justifyContent: "center"
            }}>
              <Typography variant="h5" component="h2" sx={{
                fontWeight: "800",
                backgroundColor: "#BE3D3E",
                color: "white",
                padding: "10px"
              }}>Welcome to Cure My Boredom</Typography>
              <p> 
                <br/>
                Introducing the CureMyBoredom app
                <br/>
                Your ultimate boredom-busting companion!
                Stay updated on local news and explore a wide range of suggestions for activities, movies, and books
                all conveniently accessible through the NavBar. 
                <br/>
                Let us keep dullness at bay for you.
</p>

            </Item>
          </Grid>

          <Grid item xs={12} md={4}>
            <Item sx={{
              minHeight: "40vh",
              justifyContent: "center"
            }}>
              <Typography variant="h5" component="h2" sx={{
                fontWeight: "800",
                backgroundColor: "#BE3D3E",
                color: "white",
                padding: "10px"
              }}>Did you know??</Typography>

              <Card sx={{
                backgroundColor: "#313742",
                color: "white",
                boxShadow: "5px 5px 0px 0px #BE3D3E",
                margin: "50px",
              }}>
                <CardActionArea>

                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {searchResult.results ? searchResult.results[0].fact : "Loading..."}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>

            </Item>
          </Grid>
        </Grid>

      </Box>
    </div>
  );
}

export default Home;

