import { Box, Card, CardMedia, CardContent, Typography, Button } from "@mui/material"
import { Container } from "@mui/system"
import { Link, useNavigate } from "react-router-dom"
import { useGlobalState } from "../utils/stateContext"
import running from "../assets/running.jpg";



const ProfileDetail = () => {
    const {store} = useGlobalState()
    const { loggedInUser, profiles } = store
    const navigate = useNavigate()

    let newProfiles;
   
        if(typeof(profiles) === "string") {
            newProfiles = JSON.parse(profiles)
        }else{
        newProfiles = profiles
        }

    const profile = newProfiles.find(profile => profile.fullname === loggedInUser)
    // const profile = profiles.find(profile => profile.fullname === loggedInUser)
    
   

    return (
        <Container className="profiledetail_container" maxWidth="lg">

            { profile ?
                <Card sx={{display: "flex", justifyContent: "space-evenly", flexDirection: "columen", flexWrap: "wrap"}} margin={3}>
                    <Box>
                        <CardMedia
                            className="profile_image"
                            component="img"
                            height="380"
                            image={running}
                            alt="activity"
                            />
                    </Box>
                    <Box className="profiledetail_content">
                        <Box sx={{display: "flex", justifyContent: "center"}} marginTop={2}>
                            <Typography variant="h4" marginTop={2}>My Profile</Typography>
                        </Box>
                        <CardContent>
                            <Box sx={{display: "flex", justifyContent: "flex-start"}} marginTop={2}>
                                <Typography variant="h5" marginRight={1}>Full Name: </Typography>
                                <Typography variant="h5">{profile.fullname}</Typography>
                            </Box>
                            <Box sx={{display: "flex", justifyContent: "flex-start"}} marginTop={2}>
                                <Typography variant="h5" marginRight={1}>Location: </Typography>
                                <Typography variant="h5">{profile.location}</Typography>
                            </Box>
                            <Box sx={{display: "flex", justifyContent: "flex-start"}} marginTop={2}>
                                <Typography variant="h5" marginRight={1}>Contact: </Typography>
                                <Typography variant="h5">{profile.contact_no}</Typography>
                            </Box>
                            <Box sx={{display: "flex", justifyContent: "flex-start"}} marginTop={2}>
                                <Typography variant="h5" marginRight={1}>Emergency Contact: </Typography>
                                <Typography variant="h5">{profile.emergency_contact}</Typography>
                            </Box>
                            <Box sx={{display: "flex", justifyContent: "flex-start"}} marginTop={2}>
                                <Typography variant="h5" marginRight={1}>Emergency Contact Number: </Typography>
                                <Typography variant="h5">{profile.emergency_contact_no}</Typography>
                            </Box>
                            <Box sx={{display: "flex", justifyContent: "flex-start"}} marginTop={2}>
                                <Typography variant="h5" marginRight={1}>Account Type: </Typography>
                                <Typography variant="h5">{profile.account_id}</Typography>
                            </Box>
                            <Box sx={{display: "flex", justifyContent: "flex-end"}} marginTop={2}> 
                                <Box marginLeft={3}> 
                                    <Button variant="contained" style={{color: "primary"}} onClick={() => navigate("/member/profile/update")}>Update</Button>
                                </Box>
                            </Box>
                        </CardContent>
                    </Box>
                </Card>
                :
                <>
                    <Box marginTop={3}>
                        <Typography variant="h5"> profile not found</Typography>
                    </Box>
                    <Box marginTop={3}>
                        <Link to="/login">Go back to the login page</Link>
                    </Box>
                </>
            }
        </Container>
    )
}

export default ProfileDetail