import { Card,  CardContent, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { Link, useParams } from "react-router-dom"
import ActivityList from "../data/activitiesList.json"

const ActivityDetail = ({activity}) => {
    const params = useParams()

    const getActivity = (id) => {
        return ActivityList.find(a => a.id === parseInt(id))
    }

    return (
        <Container>
            {/* {Activity ?
                <Card>
                    <Typography variant="h5">{Activity.title}</Typography>
                    <CardMedia
                        component="img"
                        height="140"
                        image={activity.image}
                        alt="activity"
                        />
                    <CardContent>
                    <Box sx={{display: "flex", justifyContent: "center"}}>
                        <Typography variant="h5">{Activity.date}</Typography>
                        <Typography variant="p">{Activity.location}</Typography>
                        <Typography variant="h5">{Activity.organiser}</Typography>
                    </Box>
                        <Typography variant="p">{Activity.description}</Typography>
                        <Typography variant="p"></Typography>
                        <Typography variant="h5" component="div">
                            {category.name}
                        </Typography>
                    </CardContent>
                </Card>
                :
                <>
                    <Typography variant="p">Activity not found</Typography>
                    <Link to="/activities">Go back to the activities page</Link>
                </>
            } */}
        </Container>
    )
}

export default ActivityDetail