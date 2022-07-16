import {Button, Typography} from "@mui/material"
import home from "../assets/home.png"
import "../styles.css"
const Home = () => {
    return(
        <div className="home"> 
            <Typography variant="h4">Welcome to Sports 4 Us!</Typography>
            <img src={home} alt="landing"/>
            <Button variant="contained" type="submit">Sign up</Button>
            <Button variant="contained" type="submit">Log in</Button>
            <Button variant="contained" type="submit">Explore all activities</Button>
        </div>
    )

}

export default Home