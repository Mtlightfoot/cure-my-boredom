import React, { useState, useEffect } from 'react';
import { Grid, Card, CardActionArea, CardContent, Typography, CardMedia } from '@mui/material';

const LocationData = ({ latitude, longitude }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (latitude && longitude) {
      const apiURL = `https://gnews.io/api/v4/top-headlines?geo=${latitude},${longitude}`;
      const key = '&token=67967b4c103927b15d99c699a065f0aa';
      const queryURL = apiURL + key;

      fetch(queryURL)
        .then(response => response.json())
        .then(data => {
            setArticles(data.articles || []);
            console.log(data.articles);
        })
        .catch(error => {
          console.error('Error fetching news:', error);
        });
    }
  }, [latitude, longitude]); // Include latitude and longitude in the dependency array

  return (
    <div>
      <Grid container spacing={2}>
        {articles.map((article, index) => (
          <Grid item xs={12} key={index}>
            <CardActionArea component="a" href="#">
              <Card sx={{ display: 'flex', margin: "20px" }}>
                <CardContent sx={{ flex: 1 }}>
                  <Typography component="h2" variant="h5">
                    {article.title}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    {article.description}
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    Continue reading...
                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                  image={article.image}
                  alt={article.title}
                />
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default LocationData;
