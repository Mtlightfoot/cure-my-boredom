import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import { Grid, Card, CardActionArea, CardContent, Typography, CardMedia, Container } from '@mui/material';

const FetchData = () => {
  const apiURL = "https://gnews.io/api/v4/search?";
  const key = "&country=us&max=10&token=d5a7f513dc78b3c13393cd72ba2bbcd7";
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
      <SearchBar onSearch={handleSearch} onClear={handleClear} />

      <Grid container spacing={2}>
        {articles.map((article) => (
          <Grid item sm={2} md={3} lg={6} xl={12}>
            <CardActionArea component="a" href="#">
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
