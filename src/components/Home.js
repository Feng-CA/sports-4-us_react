import { Box, Button, Card, CardMedia, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import home from "../assets/home.jpg";
import { useGlobalState } from "../utils/stateContext";

const Home = () => {
    const {store} = useGlobalState() 
    const {loggedInUser} = store

    const navigate = useNavigate()

    return (
        <div className="home"> 
            <Card style={{position: "relative"}}>
                
                <Box className="home_heading">
                    <Typography className="main_heading" variant="p">Welcome to Sports 4 Us!</Typography>
                </Box>
                <CardMedia 
                className="home_card"
                component="img"
                image={home}
                alt="landing"
                />
                <Box className="home_intro">
                    <Typography variant="p">
                    Sports-4-Us is an ultimate website that helps people from all walks of life, to join and participate in a wide variety of sporting activities of their choice and at times flexible for them.
                    </Typography>
                </Box>
                <Box className="home_actions">
                    
                {!loggedInUser &&
                    <Box className="home_buttons" sx={{display: "flex"}} marginTop={2}> 
                        <Box marginLeft={3}> 
                            <Button className="home_button" variant="contained" onClick={() => navigate("/signup")}>Sign up</Button>
                        </Box>
                        <Box marginLeft={2}>
                            <Button className="home_button" variant="contained" color="success" onClick={() => navigate("/login")}>Log in</Button>
                        </Box>
                    </Box>
                }
                    <Box className="home_explorer" sx={{display: "flex"}} marginLeft={8} marginTop={2}>
                        <Button className="home_button" size="medium" variant="contained" color="secondary" onClick={() => navigate("/categories")}>Explorer all activities</Button>
                    </Box>
                </Box>
            </Card>
        </div>
    )

}

export default Home