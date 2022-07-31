import { Box, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { Container } from "@mui/system";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";
import group from "../assets/group-running.jpg";


const ActivityDetail = () => {
    const {store} = useGlobalState()
    const { activities, users, loggedInUser, profiles } = store
    const params = useParams()
    const navigate = useNavigate()

    
    let newProfiles;
    let newActivities;
    if(typeof(activities) === "string") {
        newActivities = JSON.parse(activities)
    } else {
        newActivities = activities
    }
    
    if(typeof(profiles) === "string") {
        newProfiles = JSON.parse(profiles)
    } else {
        newProfiles = profiles
    }

    // check whether loggedInUser is admin
    const adminProfile = newProfiles.find(profile => profile.isAdmin === true)
    
    let loggedInAdmin;
    if (adminProfile.fullname === loggedInUser) {
        loggedInAdmin = adminProfile.fullname
    } else {
        loggedInAdmin = null
    }
    
    // get all organiser data
    const organiserProfiles = newProfiles.filter(profile => profile.account_id === "Organiser" )
    const organiserProfile = organiserProfiles.find(profile => profile.fullname === loggedInUser )
  

    const handleUpdate = () => {
        
    }
    const handleDelete = () => {

    }


    return (
        <Container className="activitydetail_container" maxWidth="lg">

            {newActivities[Number(params.id-1)] ?
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
                                <Typography variant="h5">{newActivities[Number(params.id-1)].date_time}</Typography>
                            </Box>
                            <Box marginTop={2}>
                                <Typography variant="h4">{newActivities[Number(params.id-1)].title}</Typography>
                            </Box>
                            <Box sx={{display: "flex", justifyContent: "flex-start"}} marginTop={2}>
                                <Typography variant="h5" marginRight={1}>Location: </Typography>
                                <Typography variant="h5">{newActivities[Number(params.id-1)].location}</Typography>
                            </Box>
                            <Box sx={{display: "flex", justifyContent: "flex-start"}} marginTop={2}>
                                <Typography variant="h5" marginRight={1}>Organiser: </Typography>
                                <Typography variant="h5">{newActivities[Number(params.id-1)].organiser}</Typography>
                            </Box>
                            <Box sx={{display: "flex", justifyContent: "flex-start"}} marginTop={2}>
                                <Typography variant="h5" marginRight={1}>Category: </Typography>
                                <Typography variant="h5">{newActivities[Number(params.id-1)].category}</Typography>
                            </Box>
                            <Box sx={{display: "flex", textAlign: "justify"}} marginTop={1.5}>
                                <Typography variant="h6">{newActivities[Number(params.id-1)].description}</Typography>
                            </Box>
                            <Box sx={{display: "flex", justifyContent: "space-around"}} marginTop={1}>
                                <Box sx={{display: "flex", justifyContent: "space-around"}}>
                                    <Typography variant="h5">Cost: </Typography>
                                    <Typography marginLeft={2} variant="h5">{newActivities[Number(params.id-1)].cost}</Typography>
                                </Box>
                                <Box sx={{display: "flex", justifyContent: "space-around"}}>
                                    <Typography variant="h5">Quantity: </Typography>
                                    <Typography marginLeft={2} variant="h5">{newActivities[Number(params.id-1)].quantity_limit}</Typography>
                                </Box>
                            </Box>
                            {loggedInAdmin &&
                                <Box sx={{display: "flex", justifyContent: "space-evenly"}} marginTop={2}> 
                                        <Box marginLeft={3}> 
                                            <Button variant="outlined" style={{color: "primary"}} onClick={handleUpdate}>Update</Button>
                                        </Box>
                                        <Box marginLeft={2}>
                                            <Button variant="contained" color="error" onClick={handleDelete}>Delete</Button>
                                        </Box>
                                </Box>
                            }
                  
                            {(!organiserProfile && !loggedInAdmin) &&
                                <Box sx={{display: "flex", justifyContent: "space-evenly"}} marginTop={2}> 
                                    <Box marginLeft={3}> 
                                        <Button variant="outlined" style={{color: "primary"}} onClick={() => navigate("/messages")}>Enquiry</Button>
                                    </Box>
                                    <Box marginLeft={2}>
                                        <Button variant="contained" color="success" onClick={() => navigate("/payment")}>Register</Button>
                                    </Box>
                                </Box>
                            }
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