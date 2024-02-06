import React, { useState } from "react";
import '../styles/style.css';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CureMe from '../components/CureMe'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

// React Router imports
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

// Pages imports
import SearchBar from '../components/SearchBar';
import FetchData from '../data/FetchData';
import Home from '../pages/Home';
// import Activities from './pages/Activities';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Activities () {
    return (
        <div>
            <Container maxWidth="x1" sx={{
                margin: "0",
                padding: "0"
            }}>

            <Box sx={{
                flexGrow: 1,
                marginTop: "20px"
            }}>
                <Grid container spacing={2} columns={16} sx={{
                justifyContent: "center",
                textAlign: "center"
                }}>
                
                <Grid xs={8}>
                    <Item sx={{
                    minHeight: "100vh"
                    }}>
                    {/* <Typography variant="h5" component="h2">
                        Find me an Activity
                    </Typography> */}
                    <CureMe />
                    </Item>
                </Grid>
                </Grid>
            </Box>
            </Container>
            
        </div>
    )
}

export default Activities;