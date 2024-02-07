import activityType from '../data/ActivityTypes.json';
import CureMeBtn from './CureMeBtns';
import Grid from '@mui/material/Grid';

function CureMe({query}) {
    return (
        <div><Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{
            }}>
            {activityType.map((activity) => <CureMeBtn
                key={activity._id}
                type={activity.type}
                img={activity.img}
                query={query}
            />
            )}
        </Grid>
        </div>
    )
}

export default CureMe;