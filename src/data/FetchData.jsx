import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { Grid, Card, CardActionArea, CardContent, Typography, CardMedia } from '@mui/material';

const FetchData = () => {
  const apiURL = "https://gnews.io/api/v4/search?";
  const key = "&country=us&max=10&token=5c2d5f1cb9b9c8208892c9bc4389d93a";
  const [articleNumber, setArticleNumber] = useState(0);
  const [articles, setArticles] = useState([]);

  const handleClear = () => {
    setArticleNumber(0);
  };

  const handleSearch = (searchString) => {
    setArticleNumber(0);
    const queryURL = apiURL + "q=" + searchString + key;

    console.log('query: ', queryURL);

    fetch(queryURL)
      .then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log(data);
        console.log(data.articles);
        
        setArticles(data.articles);
      });
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} onClear={handleClear} />

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

export default FetchData;