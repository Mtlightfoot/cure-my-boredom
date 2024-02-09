import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function ActivityDetail(props) {

    return (
        <div className="text-center">
            <Card sx={{
                backgroundColor: "#313742",
                minHeight: "700px"
            }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="400"
                        image={"../assets/" + props.type + ".jpg"}
                        alt={"image of" + props.type}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div" sx={{
                            fontWeight: "800",
                            backgroundColor: "#BE3D3E",
                            color: "white",
                            padding: "10px"
                        }}>
                            {props.activity}
                        </Typography>
                        <Typography variant="h5" color="text.secondary" sx={{
                            color: "white"
                        }}>
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
