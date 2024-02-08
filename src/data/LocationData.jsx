import React, { useState, useEffect } from 'react';
import { Grid, Card, CardActionArea, CardContent, Typography, CardMedia } from '@mui/material';

const LocationData = ({ latitude, longitude }) => {
  const [articles, setArticles] = useState([]);
  const [countryCode, setCountryCode] = useState('');

  useEffect(() => {
    if (latitude && longitude) {
      // fetching the latitude and longitude from the Geo.jsx and converting that into a country using the geocode API
      fetch(`https://geocode.xyz/${latitude},${longitude}?json=1`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
          // converting that country name into the two letter country code that gnews accepts
          const countryName = data.country;
          const countryCodeMap = {
            Australia: 'au',
            Brazil: 'br',
            Canada: 'ca',
            China: 'cn',
            Egypt: 'eg',
            France: 'fr',
            Germany: 'de',
            Greece: 'gr',
            'Hong Kong': 'hk',
            India: 'in',
            Ireland: 'ie',
            Israel: 'il',
            Italy: 'it',
            Japan: 'jp',
            Netherlands: 'nl',
            Norway: 'no',
            Pakistan: 'pk',
            Peru: 'pe',
            Philippines: 'ph',
            Portugal: 'pt',
            Romania: 'ro',
            'Russian Federation': 'ru',
            Singapore: 'sg',
            Spain: 'es',
            Sweden: 'se',
            Switzerland: 'ch',
            Taiwan: 'tw',
            Ukraine: 'ua',
            'United Kingdom': 'gb',
            'United States': 'us'
          };
          const countryCode = countryCodeMap[countryName];
          setCountryCode(countryCode);

          // Using that country code in the API call to get the news filtered to the users location
          const apiURL = `https://gnews.io/api/v4/top-headlines?country=${countryCode}&max=10&token=7a80bd4daab897185e40094dd2819580`;

          fetch(apiURL)
            .then(response => response.json())
            .then(data => {
                console.log(data);
              setArticles(data.articles || []);
            })
            .catch(error => {
              console.error('Error fetching news:', error);
            });
        })
        .catch(error => {
          console.error('Error fetching country:', error);
        });
    }
  }, [latitude, longitude]);

  // Making the news appear in the cards
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
