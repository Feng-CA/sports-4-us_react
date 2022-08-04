import { Box, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";
import running from "../assets/running.jpg";
import Sidebar from "./SideBar";
import { useEffect } from "react";
import { getProfiles } from "../services/profilesServices";



const ProfileDetail = () => {
    const {store, dispatch} = useGlobalState()
    const { loggedInUser, profiles } = store
    const navigate = useNavigate()

    const params = useParams()
    useEffect(() => {
        getProfiles()
            .then(response => {
              sessionStorage.setItem("profiles", JSON.stringify(response.data))
              dispatch({
                type: 'setProfiles',
               data: response.data
            })})
       // eslint-disable-next-line
    },[]);
   


    let newProfiles;
    
    if(typeof(profiles) === "string") {
        newProfiles = JSON.parse(profiles)
    } else {
        newProfiles = profiles
    }

    const getProfile = (id) => {
        return newProfiles.find(p => p.id === parseInt(id))
    }

    const profile = getProfile(params.profileId)

    // const golf = () => {
    //     if (profile.golf === true) return golf
    // }
    // const Soccer = () => {
    //     if (profile.soccer === true) return Soccer
    // }

    const adminProfile = newProfiles.find(profile => profile.isAdmin === true)

    let loggedInAdmin;
    if (adminProfile.fullname === loggedInUser) {
        loggedInAdmin = adminProfile.fullname
    } else {
        loggedInAdmin = null
    }
   
    const handleClick = () => {

    }

  

    return (
        <Box className="profiledetail_container">
                <Box>
                    <Sidebar />
                </Box>
                <Box className="profiledetail_wrap_container"> 
                { profile ?
                    <Card className="profiledetail_wrap" sx={{display: "flex", justifyContent: "space-evenly", flexDirection: "columen", flexWrap: "wrap"}} margin={3}>
                        <Box>
                            <CardMedia
                                className="profile_image"
                                component="img"
                                height="380"
                                image={running}
                                alt="activity"
                                />
                        </Box>
                        <Box className="profiledetail_content">
                            <Box sx={{display: "flex", justifyContent: "center"}} marginTop={2}>
                                <Typography variant="h4" marginTop={2}>My Profile</Typography>
                            </Box>
                            <CardContent>
                                <Box sx={{display: "flex", flexDirection: "row", justifyContent: "flex-start", flexWrap: "wrap"}} marginTop={2}>
                                    <Typography variant="h5" marginRight={1}>Full Name: </Typography>
                                    <Typography variant="h5">{profile.fullname}</Typography>
                                </Box>
                                <Box sx={{display: "flex", flexDirection: "row", justifyContent: "flex-start", flexWrap: "wrap"}} marginTop={2}>
                                    <Typography variant="h5" marginRight={1}>Location: </Typography>
                                    <Typography variant="h5">{profile.location}</Typography>
                                </Box>
                                <Box sx={{display: "flex", flexDirection: "row", justifyContent: "flex-start", flexWrap: "wrap"}} marginTop={2}>
                                    <Typography variant="h5" marginRight={1}>Contact: </Typography>
                                    <Typography variant="h5">{profile.contact_no}</Typography>
                                </Box>
                                <Box sx={{display: "flex", flexDirection: "row", justifyContent: "flex-start", flexWrap: "wrap"}} marginTop={2}>
                                    <Typography variant="h5" marginRight={1}>Emergency Contact: </Typography>
                                    <Typography variant="h5">{profile.emergency_contact}</Typography>
                                </Box>
                                <Box sx={{display: "flex", flexDirection: "row", justifyContent: "flex-start", flexWrap: "wrap"}} marginTop={2}>
                                    <Typography variant="h5" marginRight={1}>Emergency Contact Number: </Typography>
                                    <Typography variant="h5">{profile.emergency_contact_no}</Typography>
                                </Box>
                                <Box sx={{display: "flex", flexDirection: "row", justifyContent: "flex-start", flexWrap: "wrap"}} marginTop={2}>
                                    <Typography variant="h5" marginRight={1}>Interests:</Typography>
                                    {(profile.cycling === true) && <Typography marginRight={1} variant="h6">Cycling</Typography>}
                                    {(profile.golf === true) && <Typography marginRight={1} variant="h6">Golf</Typography>}
                                    {(profile.tennis === true) && <Typography marginRight={1} variant="h6">Tennis</Typography>}
                                    {(profile.soccer === true) && <Typography marginRight={1} variant="h6">Soccer</Typography>}
                                    {(profile.hiking === true) && <Typography marginRight={1} variant="h6">Hiking</Typography>}
                                    {(profile.cricket === true) && <Typography marginRight={1} variant="h6">Cricket</Typography>}
                                    {(profile.running === true) && <Typography marginRight={1} variant="h6">Running</Typography>}
                                    {(profile.basketball === true) && <Typography marginRight={1} variant="h6">Basketball</Typography>}
                                </Box>
                                <Box sx={{display: "flex", justifyContent: "flex-start"}} marginTop={2}>
                                    <Typography variant="h5" marginRight={1}>Account Type: </Typography>
                                    <Typography variant="h5">{profile.account_id}</Typography>
                                </Box>
                                <Box sx={{display: "flex", justifyContent: "flex-end"}} marginTop={2}> 
                                { loggedInAdmin ?
                                    <Box marginLeft={3}> 
                                        <Button variant="contained" color="primary" onClick={() => navigate(`/member/profiles/${profile.id}/adminupdate`)}>Edit</Button>
                                    </Box>
                                    :
                                    <Box marginLeft={3}> 
                                        <Button variant="contained" color="success" onClick={() => navigate(`/member/profiles/${profile.id}/update`)}>Update</Button>
                                    </Box>
                                }
                                { loggedInAdmin &&
                                    <Box marginLeft={3}> 
                                        <Button variant="contained" color="error" onClick={handleClick}>Delete</Button>
                                    </Box>
                                }
                                </Box>
                            </CardContent>
                        </Box>
                    </Card>
                    :
                    <>
                        <Box marginTop={3}>
                            <Typography variant="h5"> profile not found</Typography>
                        </Box>
                        <Box marginTop={3}>
                            <Link to="/login">Go back to the login page</Link>
                        </Box>
                    </>
                }
                </Box>
            {/* </Box> */}
        </Box>
    )
}

export default ProfileDetail