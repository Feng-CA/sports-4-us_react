import Sidebar from "./SideBar";
import { Box, Typography } from "@mui/material"
import { useGlobalState } from "../utils/stateContext"
import Profile from "./Profile";


const Profiles = () => {
    const {store}= useGlobalState()
    const {profiles} = store
    
    let newProfiles;
    
    if(typeof(profiles) === "string") {
        newProfiles = JSON.parse(profiles)
    }else{
        newProfiles = profiles
    }
    
    
    return (
        <Box className="profiles_container">
            <Box className="profiles_sidebar">
                <Sidebar />
            </Box>
            <Box className="profiles_wrap_container"> 
                {newProfiles.length ?
                    <Box>
                    {newProfiles.map(profile => 
                        <Profile key={profile.id} profile={profile}/>
                    )} 
                    </Box> 
                    :
                    <Typography variant="h5" marginLeft={5}>List of profiles is empty</Typography>
                }
            </Box>
    
        </Box>
    )

}

export default Profiles