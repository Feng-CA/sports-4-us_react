import { Box, Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import home from "../assets/home.png";
import "../style.css"

const Home = () => {
    const navigate = useNavigate()

    return(
        <Box className="home">
            <Box>
                <Typography variant="h5" align="center">Welcome to Sports 4 Us!</Typography>
            </Box>
            <Box>
                <img src={home} alt="landing"/>
            </Box>
            <Typography variant="h6">
            Sports-4-Us is an App that that helps people from all walks of life, to join and participate in a wide variety of sporting activities of their choice and at times flexible for them.
            </Typography>
            <Box sx={{display: "flex", justifyContent: "space-around"}}>
                <Box sx={{display: "flex", justifyContent: "flex-start"}}> 
                    <Box marginLeft={5}> 
                        <Button variant="contained" onClick={() => navigate("/signup")}>Sign up</Button>
                    </Box>
                    <Box marginLeft={2}>
                        <Button variant="contained" color="success" onClick={() => navigate("/login")}>Log in</Button>
                    </Box>
                </Box>
                <Box marginLeft={2}>
                    <Button variant="contained" color="secondary" onClick={() => navigate("/activities")}>Explorer all activities</Button>
                </Box>
            </Box>
        </Box>
    )

}

export default Home