import { Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import running from "../assets/running.jpg";


const Profile = ({profile}) => {

    const navigate = useNavigate()
    

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
                        <Typography variant="h5">{profile.fullname}</Typography>
                        <Typography variant="p">{profile.location}</Typography>
                        <Typography variant="p" marginLeft={2}>{profile.account_id}</Typography>
                    </Box>
                    <Box className="profile_action" marginTop={1}>
                        <Button size="small" variant="outlined" onClick={() => navigate("/messages")}>Chat with Me</Button>
                    </Box> 
                </CardContent>  
            </Card>

    )

}

export default Profile