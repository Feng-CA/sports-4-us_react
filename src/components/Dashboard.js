import Sidebar from './SideBar';
import { Box, Typography } from '@mui/material';
import Messages from './Messages';

const Dashboard = () => {

    return (
        <Box className="dashboard_container">
            <Box sx={{display: "flex", flexDirection: "raw"}} marginTop={2}> 
                <Sidebar />
                <Box sx={{display: "flex", flexDirection: "column"}} marginTop={2}> 
                    <Box sx={{display: "flex", justifyContent: "center"}} marginTop={3}>
                        <Typography variant="h5" component="div">
                        Check out what is going on here...
                        </Typography>
                    </Box>
                    <Box sx={{display: "flex", felxDirection: "column", textAlign: "left", justifyItems: "flex-start",   flexWrap: "wrap"}} marginTop={3}>
                        <Messages /> 
                    </Box>
                </Box>
            </Box>
        </Box>
    )
} 

export default Dashboard