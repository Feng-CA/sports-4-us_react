import { Container } from '@mui/system';
import Sidebar from './SideBar';
import Box from '@mui/material/Box';
import Messages from './Messages'

const Dashboard = () => {

    return (
        <Container className="dashboard_container" sx={{width: '100%'}}>
            <Box sx={{display: "flex", flexDirection: "raw"}} marginTop={2}> 
                <Sidebar />
                <Box sx={{display: "flex", felxDirection: "column", textAlign: "left", justifyItems: "flex-start",   flexWrap: "wrap"}} marginTop={3}>
                    <Messages /> 
                </Box> 
               
            </Box>
        </Container>
    )
} 

export default Dashboard