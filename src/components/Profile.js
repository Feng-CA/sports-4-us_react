import { Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import running from "../assets/running.jpg";


const Profile = ({profile}) => {

    const navigate = useNavigate()
    

    return (
        <Box className="profile_container">
            <Card className="profile_card_container">
                <Box>
                    <CardMedia
                            className="profile_avatar"
                            component="avatar"
                            height="150"
                            image={running}
                            alt="avatar"
                            />
                </Box>
                <CardContent className="profile-info-container">
                    <Box className="profile-info"> 
                        <Typography variant="h5">{profile.fullname}</Typography>
                    
                        <Typography variant="p">{profile.location}</Typography>

                        <Typography variant="p" marginLeft={1}>{profile.account_id}</Typography>
                    </Box>  
                            
                    
                    <Box className="profile_action">
                        <Button size="small" variant="contained" color="success" onClick={() => navigate("/messages")}>Chat with Me</Button>
                    </Box> 
                </CardContent>  
            </Card>
        </Box>
    )

}

export default Profile