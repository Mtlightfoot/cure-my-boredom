import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { Grid, Card, CardActionArea, CardContent, Typography, CardMedia, Container } from '@mui/material';

const FetchData = () => {
  const apiURL = "https://gnews.io/api/v4/search?";
  const key = "&country=us&max=10&token=7a80bd4daab897185e40094dd2819580";
  const [articles, setArticles] = useState([]);

  const handleClear = () => {
    setArticles([]);
  };

  const handleSearch = (searchString) => {
    const queryURL = apiURL + "q=" + searchString + key;

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
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SearchBar onSearch={handleSearch} onClear={handleClear} />
        </Grid>
        {articles.map((article) => (
          <Grid item sm={12} md={12} lg={6} xl={6} key={article.url}>
            <CardActionArea component="a" href={article.url} target="_blank" rel="noopener noreferrer">
              <Card>
                <CardMedia
                  component="img"
                  sx={{ height: 140 }}
                  image={article.image}
                  alt={article.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {article.description}
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    Continue reading...
                  </Typography>
                </CardContent>
              </Card>
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FetchData;

