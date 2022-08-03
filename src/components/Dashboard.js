import Sidebar from './SideBar';
import { Box, Typography } from '@mui/material';
import ReceivedMessages from './ReceivedMessages';
// import ChannelMessages from './ChannelMessage';

const Dashboard = () => {

    return (
        <Box className="dashboard_container">
            <Box sx={{display: "flex", flexDirection: "raw"}} marginLeft={1}> 
                <Sidebar />
                <Box sx={{display: "flex", flexDirection: "column"}} marginTop={2}> 
                    <Box sx={{display: "flex", justifyContent: "center"}} marginTop={3}>
                        <Typography variant="h5" component="div">
                        Check out what is going on here...
                        </Typography>
                    </Box>
                    <Box sx={{display: "flex", felxDirection: "column", textAlign: "left", justifyItems: "flex-start",   flexWrap: "wrap"}} marginTop={3}>
                        <ReceivedMessages /> 
                        {/* <ChannelMessages />  */}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
} 

export default Dashboard