import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import React, { useState } from 'react';

function CureMe(props) {

    const type = props.type.toLowerCase();

    return <div>
        <Card sx={{
            backgroundColor: "#313742",
            color: "white",
            boxShadow: "5px 5px 0px 0px #BE3D3E",
            margin: "5px",
            width: "220px"
        }} onClick={() => props.query(type)}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.img}
                    alt={props.type}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.type}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>


    </div>
}

export default CureMe;