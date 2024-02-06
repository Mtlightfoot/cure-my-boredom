import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';


function CureMe(props) {

    return <div>
        <Grid item xs sx={{
            margin: "10px"
        }}>
            <Card>
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