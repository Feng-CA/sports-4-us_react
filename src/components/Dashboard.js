import Sidebar from './SideBar';
import { Box, Typography } from '@mui/material';
import FullActivityList from './FullActivityList'
import "../style.css";
import { getProfiles } from '../services/profilesServices';
import { useGlobalState } from "../utils/stateContext";
import { useEffect } from 'react';
import MemberActivities from './MemberActivities';
import OrganiserActivitiesList from './OrganiserActivityList';


const Dashboard = () => {

    const {dispatch, store} = useGlobalState();
    const {profiles, loggedInUser} = store

    useEffect(() => {
        console.log("At UseEffect", profiles)
        getProfiles()
        .then( response => {
            sessionStorage.setItem("profiles", JSON.stringify(response.data))
            
            dispatch({
              type: 'setProfiles',
             data: response.data
          })
          }) 
    },
    // eslint-disable-next-line
    []);
    
        let newProfiles;
    
        if(typeof(profiles) === "string") {
            newProfiles = JSON.parse(profiles)
        } else {
            newProfiles = profiles
        }
    const profile = newProfiles.find(profil => profil.fullname === loggedInUser)
    console.log("profile:", profile)
    
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
                    {/* <Box sx={{display: "flex", felxDirection: "column", textAlign: "left", justifyItems: "flex-start",   flexWrap: "wrap"}} marginTop={3}> */}
                    {profile&&<Box>
                        {profile.account_id === "Member" &&
                        <MemberActivities />}
                        {profile.account_id === "Organiser" &&
                        <OrganiserActivitiesList />}
                        {profile.isAdmin &&
                        <FullActivityList />}
                    </Box>}
                </Box>
            </Box>
        </Box>
    )
} 

export default Dashboard