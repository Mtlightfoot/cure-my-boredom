import activityType from '../data/ActivityTypes.json';
import CureMeBtn from './CureMeBtns';
import Grid from '@mui/material/Grid';


function CureMe() {
    console.log(activityType)
    return (
        <div><Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{
                
                margin: "20px",
                width: "100%"
            }}>

            {activityType.map((activity) => <CureMeBtn
                key={activity._id}
                type={activity.type}
                img={activity.img}
            />
            )}
        </Grid>

        </div>
    )
}

export default CureMe;