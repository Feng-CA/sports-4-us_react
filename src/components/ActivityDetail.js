import { Card,  CardContent, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { Link, useParams } from "react-router-dom"
import Activities from "../data/activitiesList.json"
import { useGlobalState } from "../utils/stateContext"
import categories from "../data/categoryList.json"

const ActivityDetail = () => {
    const {store} = useGlobalState()
    const { users } = store
    const params = useParams()

    // const getActivity = (id) => {
    //     return ActivityList.find(a => a.id === parseInt(id))
    // }

    return (
        <Container>
             <ul>
                <li>
                    Activity Id: {Activities[Number(params.id-1)].id}  
                </li>
                <li>
                    Activity Category: {categories[Number(Activities[Number(params.id-1)].category_id)-1].name}
                </li>
                <li>
                    Activity Title: {Activities[Number(params.id-1)].title}
                </li>
                <li>
                    Activity Description: {Activities[Number(params.id-1)].description}
                </li>
                <li>
                    Activity Date: {Activities[Number(params.id-1)].date_time}
                </li>
                <li>
                    Activity Organiser: {`${users[Number(Activities[Number(params.id-1)].user_id)-1].first_name} ${users[Number(Activities[Number(params.id-1)].user_id)-1].last_name}`}
                </li>

            </ul>

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