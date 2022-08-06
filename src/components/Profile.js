import { Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import running from "../assets/running.jpg";
import { useGlobalState } from "../utils/stateContext";


const Profile = ({profile}) => {
    const {store} = useGlobalState()
    const { loggedInUser, profiles } = store

    const navigate = useNavigate()

    let newProfiles;
    
    if(typeof(profiles) === "string") {
        newProfiles = JSON.parse(profiles)
    } else {
        newProfiles = profiles
    }

    const adminProfile = newProfiles.find(profile => profile.isAdmin === true)

    let loggedInAdmin;
    if (adminProfile.fullname === loggedInUser) {
        loggedInAdmin = adminProfile.fullname
    } else {
        loggedInAdmin = null
    }
    

    return (
       
            <Card className="profile_card_container">
                <Box className="profile_avatar_container">
                    <CardMedia
                            className="profile_avatar"
                            component="avatar"                           
                            image={running}
                            alt="avatar"
                            />
                </Box>
                <CardContent className="profile-info-container">
                    <Box className="profile-info"> 
                        <Typography variant="h5" marginBottom={1}>{profile.fullname}</Typography>
                        <Typography variant="p">{profile.location}</Typography>
                        <Typography variant="p" marginLeft={2}>{profile.account_id}</Typography>
                    </Box>
                    <Box className="profile_action">
                        <Box marginTop={1}>
                            <Button size="small" variant="contained" color="success" onClick={() => navigate("/messages/new")}>Chat with Me</Button>
                        </Box>
                        <Box marginLeft={2} marginTop={1}>
                            {loggedInAdmin &&
                            <Button size="small" variant="outlined" onClick={() => navigate(`/member/profiles/${profile.id}`)}>Detail</Button>
                            }
                        </Box>
                    </Box> 
                </CardContent>  
            </Card>

    )

}

export default Profile