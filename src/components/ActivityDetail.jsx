import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function ActivityDetail(props) {

    return (
        <div className="text-center" align="center" justify="center" margin="auto">
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
                            <Typography sx={{ color: "white", borderBottom: "1px solid #BE3D3E", width: "200px", marginBottom: "10px", fontWeight: "600" }} variant="h5" color="text.secondary">
                                Type
                            </Typography>
                            <Typography sx={{ color: "white" }} variant="body1" color="text.secondary">
                                {props.type}
                            </Typography>
                            <Typography sx={{ color: "white", borderBottom: "1px solid #BE3D3E", width: "200px", marginBottom: "10px", fontWeight: "600" }} variant="h5" color="text.secondary">
                                Accessibility
                            </Typography>
                            <Typography sx={{ color: "white" }} variant="body1" color="text.secondary">
                                {props.accessibility}
                            </Typography>
                            <Typography sx={{ color: "white", borderBottom: "1px solid #BE3D3E", width: "200px", marginBottom: "10px", fontWeight: "600" }} variant="h5" color="text.secondary">
                                Participants
                            </Typography>
                            <Typography sx={{ color: "white" }} variant="body1" color="text.secondary">
                                {props.participants}
                            </Typography>
                            <Typography sx={{ color: "white", borderBottom: "1px solid #BE3D3E", width: "200px", marginBottom: "10px", fontWeight: "600" }} variant="h5" color="text.secondary">
                                Price
                            </Typography>
                            <Typography sx={{ color: "white" }} variant="body1" color="text.secondary">
                                {props.price}
                            </Typography>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default ActivityDetail;
