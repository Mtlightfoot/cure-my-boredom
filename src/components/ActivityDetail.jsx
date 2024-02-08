import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function ActivityDetail(props) {
    return (
        <div className="text-center">
            <Card sx={{}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.activity}
                        </Typography>
                        <Typography variant="h5" color="text.secondary">
                            <ul>
                                <li>Type: {props.type}</li>
                                <li>Accessibility: {props.accessibility}</li>
                                <li>Participants: {props.participants}</li>
                                <li>Price: {props.price}</li>
                            </ul>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default ActivityDetail;
