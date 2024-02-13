import React, { useEffect, useState } from "react";
import axios from "axios";
import { generate } from "random-words";
import '../styles/style.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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

function Books() {
    const [book, setBook] = useState(null);

    const fetchRandomBook = async () => {
        try {
            const randomTitle = generate(); // Generate a random book title
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${randomTitle}&download=epub&key=AIzaSyAYANa_Ds0NFsEf9kGgUE_aS0AANs_Riss`);
            const randomIndex = Math.floor(Math.random() * response.data.items.length);
            const randomBook = response.data.items[randomIndex];
            setBook({
                title: randomBook.volumeInfo.title,
                image: randomBook.volumeInfo.imageLinks.thumbnail,
                description: randomBook.volumeInfo.description,
                author: randomBook.volumeInfo.authors ? randomBook.volumeInfo.authors.join(', ') : 'Unknown Author',
                publishedYear: randomBook.volumeInfo.publishedDate ? randomBook.volumeInfo.publishedDate.substring(0, 4) : 'Unknown Year'
            });
        } catch (error) {
            console.error('Error fetching random book:', error);
        }
    };

    useEffect(() => {
        fetchRandomBook();
    }, []);

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} sx={{ margin: "20px" }}>
                    <Grid item xs={12} md={12}>
                        <Item sx={{ minHeight: "60vh" }}>
                            <Button onClick={fetchRandomBook} variant="contained" sx={{
                                fontWeight: "800",
                                marginTop: "20px",
                                marginBottom: "30px",
                                color: "#313742",
                                filter: "drop-shadow(0.5px 1px 0rem #BE3D3E)",
                                backgroundColor: "whiteSmoke"
                            }}>Click me for a random book to read!</Button>
                            <Grid item xs={12} md={6} align="center" justify="center" margin="auto">
                                {book ? (
                                    <Card sx={{
                                        justify: "center",
                                        alignItems: "center",
                                        boxShadow: "5px 5px 0px 0px #BE3D3E",
                                        backgroundColor: "#313742",
                                        color: "white"
                                    }}>
                                        <CardActionArea>
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <CardMedia
                                                    component="img"
                                                    image={book.image}
                                                    alt="book cover"
                                                    sx={{ width: "300px", marginTop: "20px" }}
                                                />
                                            </div>
                                            <CardContent>
                                                <Typography gutterBottom variant="h4" component="div" sx={{
                                                    fontWeight: "800",
                                                    backgroundColor: "#BE3D3E",
                                                    color: "white",
                                                    padding: "10px"
                                                }}>
                                                    {book.title}
                                                </Typography>
                                                <Typography sx={{
                                                    color: "white",
                                                    borderBottom: "1px solid #BE3D3E",
                                                    width: "200px",
                                                    marginBottom: "10px",
                                                    fontWeight: "600"
                                                }} variant="h5" color="text.secondary">
                                                    Description
                                                </Typography>
                                                <Typography sx={{ color: "white" }} variant="body1" color="text.secondary">
                                                    {book.description}
                                                </Typography>
                                                <Typography sx={{
                                                    color: "white",
                                                    borderBottom: "1px solid #BE3D3E",
                                                    width: "200px",
                                                    marginBottom: "10px",
                                                    fontWeight: "600"
                                                }} variant="h5" color="text.secondary">
                                                    Author
                                                </Typography>
                                                <Typography sx={{ color: "white" }} variant="body1" color="text.secondary">
                                                    {book.author}
                                                </Typography>
                                                <Typography sx={{
                                                    color: "white",
                                                    borderBottom: "1px solid #BE3D3E",
                                                    width: "200px",
                                                    marginBottom: "10px",
                                                    fontWeight: "600"
                                                }} variant="h5" color="text.secondary">
                                                    Published Year
                                                </Typography>
                                                <Typography sx={{ color: "white" }} variant="body1" color="text.secondary">
                                                    {book.publishedYear}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                ) : (
                                    <h3>Awaiting magic button press</h3>
                                )}
                            </Grid>
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Books;





