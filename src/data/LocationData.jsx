import React, { useState, useEffect } from 'react';
import { Grid, Card, CardActionArea, CardContent, Typography, CardMedia } from '@mui/material';

const LocationData = ({ latitude, longitude }) => {
  const [articles, setArticles] = useState([]);
  const [countryCode, setCountryCode] = useState('');

  useEffect(() => {
    if (latitude && longitude) {
      // fetching the latitude and longitude from the Geo.jsx and converting that into a country using the geocode API
      fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
        .then(response => response.json())
        .then(data => {
            console.log(data.address.country_code);
          // converting that country name into the two letter country code that gnews accepts
          if (data && data.address && data.address.country_code) {
            const countryCode = data.address.country_code.toUpperCase();
            setCountryCode(countryCode);

            const countryCodesMap = {
              AU: 'au', // Australia
              BR: 'br', // Brazil
              CA: 'ca', // Canada
              CN: 'cn', // China
              EG: 'eg', // Egypt
              FR: 'fr', // France
              DE: 'de', // Germany
              GR: 'gr', // Greece
              HK: 'hk', // Hong Kong
              IN: 'in', // India
              IE: 'ie', // Ireland
              IL: 'il', // Israel
              IT: 'it', // Italy
              JP: 'jp', // Japan
              NL: 'nl', // Netherlands
              NO: 'no', // Norway
              PK: 'pk', // Pakistan
              PE: 'pe', // Peru
              PH: 'ph', // Philippines
              PT: 'pt', // Portugal
              RO: 'ro', // Romania
              RU: 'ru', // Russian Federation
              SG: 'sg', // Singapore
              ES: 'es', // Spain
              SE: 'se', // Sweden
              CH: 'ch', // Switzerland
              TW: 'tw', // Taiwan
              UA: 'ua', // Ukraine
              GB: 'gb', // United Kingdom
              US: 'us', // United States
            };

            // Using the country code so the news is filtered to the users location
            const gnewsCountryCode = countryCodesMap[countryCode];
            const apiURL = `https://gnews.io/api/v4/top-headlines?country=${gnewsCountryCode}&lang=en&max=10&token=d5a7f513dc78b3c13393cd72ba2bbcd7`;

            fetch(apiURL)
              .then(response => response.json())
              .then(data => {
                console.log(data);
                setArticles(data.articles || []);
              })
              .catch(error => {
                console.error('Error fetching news:', error);
              });
          } else {
            console.error('Unexpected response from Nominatim API:', data);
          }
        })
        .catch(error => {
          console.error('Error fetching country:', error);
        });
    }
  }, [latitude, longitude]);

  return (
    // Making the news appear in the cards
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
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                        Continue reading...
                    </a>
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
