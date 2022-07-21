import { Card,  CardContent, Typography, Box, Button } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import Grid from "@mui/material/Grid";

const Activity = ({activity}) => {
    const navigate = useNavigate()

    // const handleEnquiry = () => {

    // }

    // const handlePayment = () => {
        
    // }

    return (
        <Grid item xs={8} sm={4} md={3} sx={{display: "flex", justifyContent: "center"}} marginTop={3}>

            <Card sx={{ maxWidth: 500 }}>
                <CardContent>
                    <Link to={`/activities/${activity.id}`}>
                    <Box sx={{display: "flex", justifyContent: "center"}}>
                            <Typography variant="p">{activity.date_time}</Typography>
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "center"}}>
                            <Typography variant="h5">{activity.title}</Typography>
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "center"}}>
                            <Typography variant="p">{activity.location}</Typography>
                    </Box>
                    {/* <Box sx={{display: "flex", justifyContent: "center"}}>
                        <Button variant="contained" color="secondary" marginLeft={3} onClick={() => navigate("/messages")}>Enquiry</Button>
                        <Button variant="contained" color="success" marginLeft={3} onClick={() => navigate("/payments")}>Register</Button>
                    </Box> */}

                    </Link>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default Activity