import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';

function CureMe(props) {

    const type = props.type.toLowerCase();

    return <div>

        <Grid item sx={{
            margin: "5px",
            width: "250px"
        }}>

            <Card sx={{
                backgroundColor: "#313742",
                color: "white",
                boxShadow: "5px 5px 0px 0px #BE3D3E"
            }} onClick={() => props.query(type)}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={props.img}
                        alt={props.type}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.type}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </Grid>
    </div>
}

export default CureMe;