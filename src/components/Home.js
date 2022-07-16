import { Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import home from "../assets/home.png";
import "../style.css"
const Home = () => {
    const navigate = useNavigate()

    return(
        <div className="home"> 
            <Typography variant="h5">Welcome to Sports 4 Us!</Typography>
            <img src={home} alt="landing"/>
            <Typography variant="h6">
            Sports-4-Us is an App that that helps people from all walks of life, to join and participate in a wide variety of sporting activities of their choice and at times flexible for them.
            </Typography>
            <Button variant="contained" onClick={() => navigate("/signup")}>Sign up</Button>
            <Button variant="contained" onClick={() => navigate("/login")}>Log in</Button>
            <Button variant="contained" onClick={() => navigate("/activities")}>Explorer all activities</Button>
        </div>
    )

}

export default Home