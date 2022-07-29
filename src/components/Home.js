import { Box, Button, Card, CardMedia, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import home from "../assets/home.png";
import "../style.css"
import { useGlobalState } from "../utils/stateContext";

const Home = () => {
    const {store} = useGlobalState()
    const {loggedInUser} = store

    const navigate = useNavigate()

    return (
        <div className="home"> 
            <Card style={{position: "relative"}}>
                
                <Box className="home_heading" style={{position: "absolute", top: 30}}>
                    <Typography className="main_heading" variant="h3">Welcome to Sports 4 Us!</Typography>
                </Box>
                <CardMedia 
                className="home_card"
                component="img"
                image={home}
                alt="landing"
                />
                <Box className="home_intro" style={{position: "absolute", bottom: 50}}>
                    <Typography variant="h5">
                    Sports-4-Us is an ultimate website that helps people from all walks of life, to join and participate in a wide variety of sporting activities of their choice and at times flexible for them.
                    </Typography>
                </Box>
                <Box sx={{display: "flex"}} style={{position: "absolute", bottom: 40}}>
                    
                {!loggedInUser&&
                    <Box sx={{display: "flex"}}> 
                        <Box marginLeft={3}> 
                            <Button variant="contained" onClick={() => navigate("/signup")}>Sign up</Button>
                        </Box>
                        <Box marginLeft={2}>
                            <Button variant="outlined" color="success" onClick={() => navigate("/login")}>Log in</Button>
                        </Box>
                    </Box>}
                    <Box sx={{display: "flex"}} marginLeft={2} marginRight={2}>
                        <Button variant="text" color="secondary" onClick={() => navigate("/activities")}>Explorer all activities</Button>
                    </Box>
                </Box>
            </Card>
        </div>
    )

}

export default Home