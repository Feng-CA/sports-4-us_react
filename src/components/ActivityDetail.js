import { Box, Card, CardMedia, CardContent, Typography, Button } from "@mui/material"
import { Container } from "@mui/system"
import { Link, useParams, useNavigate } from "react-router-dom"
import { useGlobalState } from "../utils/stateContext"
import categories from "../data/categoryList.json"
import group from "../assets/group-running.jpg";
import { blueGrey } from "@mui/material/colors"
import { useState } from "react"


const ActivityDetail = () => {
    const {store} = useGlobalState()
    const { activities, users } = store
    const params = useParams()
    const navigate = useNavigate()
    
    const [clicked, setClicked] = useState(true);


    return (
        <Container className="activitydetail_container" maxWidth="lg">

            {activities[Number(params.id-1)] ?
                <Card sx={{display: "flex", justifyContent: "space-evenly", flexDirection: "columen", flexWrap: "wrap"}} margin={3}>
                    <Box>
                        <CardMedia
                            className="activity_image"
                            component="img"
                            height="380"
                            image={group}
                            alt="activity"
                            />
                    </Box>
                    <Box className="activitydetail_content">
                        <CardContent>
                            <Box marginTop={1}>
                                <Typography variant="h5">{activities[Number(params.id-1)].date_time}</Typography>
                            </Box>
                            <Box marginTop={2}>
                                <Typography variant="h4">{activities[Number(params.id-1)].title}</Typography>
                            </Box>
                            <Box sx={{display: "flex", justifyContent: "flex-start"}} marginTop={2}>
                                <Typography variant="h5" marginRight={1}>Location: </Typography>
                                <Typography variant="h5">{activities[Number(params.id-1)].location}</Typography>
                            </Box>
                            <Box sx={{display: "flex", justifyContent: "flex-start"}} marginTop={2}>
                                <Typography variant="h5" marginRight={1}>Organiser: </Typography>
                                <Typography variant="h5">{`${users[Number(activities[Number(params.id-1)].user_id)-1].full_name}`}</Typography>
                            </Box>
                            <Box sx={{display: "flex", justifyContent: "flex-start"}} marginTop={2}>
                                <Typography variant="h5" marginRight={1}>Category: </Typography>
                                <Typography variant="h5">{categories[Number(activities[Number(params.id-1)].category_id)-1].name}</Typography>
                            </Box>
                            <Box sx={{display: "flex", textAlign: "justify"}} marginTop={1.5}>
                                <Typography variant="h6">{activities[Number(params.id-1)].description}</Typography>
                            </Box>
                            <Box sx={{display: "flex", justifyContent: "space-around"}} marginTop={1}>
                                <Box sx={{display: "flex", justifyContent: "space-around"}}>
                                    <Typography variant="h5">Cost: </Typography>
                                    <Typography variant="h5">{activities[Number(params.id-1)].cost}</Typography>
                                </Box>
                                <Box sx={{display: "flex", justifyContent: "space-around"}}>
                                    <Typography variant="h5">Quantity: </Typography>
                                    <Typography variant="h5">{activities[Number(params.id-1)].quantity_limit}</Typography>
                                </Box>
                            </Box>
                            <Box sx={{display: "flex", justifyContent: "space-evenly"}} marginTop={2}> 
                                <Box marginLeft={3}> 
                                    <Button variant="outlined" style={{color: "primary"}} onClick={() => navigate("/messages")}>Enquiry</Button>
                                </Box>
                                <Box marginLeft={2}>
                                    <Button variant="outlined" color="success" onClick={() => navigate("/payment")}>Register</Button>
                                </Box>
                            </Box>
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