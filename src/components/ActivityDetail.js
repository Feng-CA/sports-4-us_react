import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { Link, useParams } from "react-router-dom"
import { useGlobalState } from "../utils/stateContext"
import categories from "../data/categoryList.json"
import group from "../assets/group-running.jpg";


const ActivityDetail = () => {
    const {store} = useGlobalState()
    const { activities, users } = store
    const params = useParams()


    return (
        <Container className="activitydetail_container">

            {activities[Number(params.id-1)] ?
                <Card sx={{display: "flex", justifyContent: "space-evenly", flexDirection: "columen", flexWrap: "wrap"}}>
                    <Box>
                        <CardMedia
                            className="activity_image"
                            component="img"
                            height="380"
                            image={group}
                            alt="activity"
                            />
                    </Box>
                    <Box>
                        <CardContent>
                            <Box>
                                <Typography variant="h5">{activities[Number(params.id-1)].date_time}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="h4">{activities[Number(params.id-1)].title}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="h5">{activities[Number(params.id-1)].location}</Typography>
                            </Box>
                            <Box sx={{display: "flex", justifyContent: "center"}}>
                                <Typography variant="h5">Organiser: </Typography>
                                <Typography variant="h5">{`${users[Number(activities[Number(params.id-1)].user_id)-1].full_name}`}</Typography>
                            </Box>
                            <Box>
                                <Typography variant="p">{activities[Number(params.id-1)].description}</Typography>
                            </Box>
                            <Box sx={{display: "flex", justifyContent: "center"}}>
                                <Typography variant="h5">Cost: </Typography>
                                <Typography variant="h5">{activities[Number(params.id-1)].cost}</Typography>
                            </Box>
                                <Typography variant="h5" component="div">
                                    {categories[Number(activities[Number(params.id-1)].category_id)-1].name}
                                </Typography>
                        </CardContent>
                    </Box>
                </Card>
                :
                <>
                    <Box marginTop={3}>
                        <Typography variant="h5">Activity not found</Typography>
                    </Box>
                    <Box marginTop={3}>
                        <Link to="/activities">Go back to the activities page</Link>
                    </Box>
                </>
            }
        </Container>
    )
}

export default ActivityDetail