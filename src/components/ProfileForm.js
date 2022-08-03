import {useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";
import { Container } from "@mui/system";
import { Box, Button, TextField, Typography } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import PhoneInput from 'react-phone-input-2';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import 'react-phone-input-2/lib/style.css';
import { updateProfile } from "../services/profilesServices";
import { getProfiles } from "../services/profilesServices";
import { useNavigate } from "react-router-dom"; 


const ProfileForm = () => {
    const {store, dispatch} = useGlobalState()
    const { loggedInUser, users, profiles } = store
    const navigate = useNavigate()
    // const [interest, setInterest] = useState({
    //     cycling: false,
    //     golf: false,
    //     tennis: false,
    //     soccer: false,
    //     hiking: false,
    //     cricket: false,
    //     running: false,
    //     basketball: false
    // })
   
    let newUsers;
    let tempProfiles;
   
    if(typeof(users) === "string") {
        newUsers = JSON.parse(users);
    } else {
        newUsers = users;
    }
    if(typeof(profiles) === "string") {
        tempProfiles = JSON.parse(profiles);
    } else {
        tempProfiles = profiles;
    }
        
    // const { cycling, golf, tennis, soccer, hiking, cricket, running, basketball } = interest;
    //const currentUser = (JSON.parse(users).find(user => user.full_name === loggedInUser))
    //const currentUser = (JSON.parse(newUsers).find(user => user.full_name === loggedInUser))
    const currentUser = (newUsers.find(user => user.full_name === loggedInUser))
    let currentProfile = (tempProfiles.find(profile => profile.fullname === currentUser.full_name))

    console.log(currentUser)
    console.log("Current Profile", currentProfile)
    //const currentUser = users.find(user => user.full_name === loggedInUser)
    

    const initialFormData = {
        fullname: loggedInUser,
        email: currentUser.email,
        location: currentProfile.location,
        contact_no: currentProfile.contact_no,
        emergency_contact: currentProfile.emergency_contact,
        emergency_contact_no: currentProfile.emergency_contact_no,
        account_type: currentProfile.account_id,
        cycling: currentProfile.cycling,
        golf: currentProfile.golf,
        tennis: currentProfile.tennis,
        soccer: currentProfile.soccer,
        hiking: currentProfile.hiking,
        cricket: currentProfile.cricket,
        running: currentProfile.running,
        basketball: currentProfile.basketball
    }

    const [formData, setFormData] = useState(initialFormData)
    const [contactNo, setContactNo] = useState(initialFormData.contact_no)
    const [emergencyContactNo, setEmergencyContactNo] = useState(initialFormData.emergency_contact_no)
    const [emergencyContact, setEmergencyContact] = useState(initialFormData.emergency_contact)
    const [location, setLocation] = useState(initialFormData.location)
    const [cycling, setCycling] = useState(initialFormData.cycling)
    const [golf, setGolf] = useState(initialFormData.golf)
    const [tennis, setTennis] = useState(initialFormData.tennis)
    const [soccer, setSoccer] = useState(initialFormData.soccer)
    const [hiking, setHiking] = useState(initialFormData.hiking)
    const [cricket, setCricket] = useState(initialFormData.cricket)
    const [running, setRunning] = useState(initialFormData.running)
    const [basketball, setBasketball] = useState(initialFormData.basketball)




    // const [error, setError] = useState(null)
   
    useEffect(() => {
        setFormData(() => ({
            contact_no: contactNo,
            emergency_contact_no: emergencyContactNo,
            emergency_contact: emergencyContact,
            location: location,
            cycling: cycling,
            golf: golf,
            tennis: tennis,
            soccer: soccer,
            hiking: hiking,
            cricket: cricket,
            running: running,
            basketball: basketball,
        }))
        
        console.log("after-useEffct:", formData)
        // eslint-disable-next-line
    }, [contactNo, emergencyContact, emergencyContactNo, location, cycling, golf, tennis, soccer, hiking, cricket, running, basketball])
    
   
    
    console.log("before:", formData)
    console.log("temp Profiles",tempProfiles)
    console.log("Profiles",profiles)


    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("after:", formData)
        // let tempProfileVar = tempProfiles
        updateProfile(currentProfile.id,formData)
            .then( response => currentProfile = response) 
        console.log("after-submit current Profile:", currentProfile)
        getProfiles()
            .then( response => {
              sessionStorage.setItem("profiles", JSON.stringify(response.data))
              dispatch({
               type: 'setProfiles',
               data: response.data
            })})
           navigate(`../profiles/${Number(currentProfile.id)}`)
          
     
        
        
        // updateProfile(formData)
        // .then((profile) => {

        //     let errorMessage = "";
        //     if (profile.error){
        //         Object.keys(profile.error).forEach(key => {
        //             errorMessage = errorMessage.concat("", `${key} ${profile.error[key]}`)
        //         })
        //         setError(errorMessage)
        //     }
        //     else {    
        //         dispatch({
        //             type: "setProfile",
        //             data: profile
        //         })
        //         setFormData(initialFormData)
        //         navigate("/member/profile")     
        //     }  
        // })
        // .catch(error=> {console.log(error)})
    }

    
    return (
        <Container className="profileForm_container" sx={{width: 380}}>
             <Box sx={{textAlign: "center"}} margin={3}>
                <Typography variant="h6">Update Profile</Typography>
            </Box>  
            <form onSubmit={handleSubmit}>
                <Box>
                    <InputLabel>Your Full Name</InputLabel>
                    <Box marginTop={1}>
                        <TextField required sx={{width: 320}} type="text" name="fullname" id="fullname" value={formData.fullname} disabled/>
                    </Box>
                </Box>
                <Box marginTop={1}>
                    <InputLabel>Your Email</InputLabel>
                    <Box marginTop={1}>
                        <TextField required sx={{width: 320}} type="email" name="email" id="email" value={formData.email} disabled/>
                    </Box>
                </Box>
                <Box sx={{display: "flex"}} marginTop={2}> 
                    <Box >
                        <InputLabel>Contact Number</InputLabel>
                        {/* <PhoneInput name="contact_no" id="contact_no"  value={formData.contact_no} onChange={e=>console.log(e.target.value)}/> */}
                        <PhoneInput required country={'au'} value={contactNo} onChange={setContactNo}/>
                    </Box>
                </Box>

                <Box marginTop={2}>
                    <InputLabel>Emergency Contact</InputLabel>
                    <Box marginTop={1}>
                        <TextField required sx={{width: 320}} type="text" name="emergency_contact" id="emergency_contact" value={emergencyContact} onChange={(e)=>setEmergencyContact(e.target.value)}/>
                    </Box>
                </Box>
                <Box sx={{display: "flex"}} marginTop={2}> 
                    <Box>
                        <InputLabel>Emergency Contact Number</InputLabel>
                        <PhoneInput required country={'au'} value={emergencyContactNo} onChange={setEmergencyContactNo}/>
                    </Box>
                </Box>
                <Box sx={{display: "flex", justifyContent: "flex-start"}} marginTop={3}> 
                    <Box sx={{width:320 }}>
                        <FormControl required fullWidth>
                            <InputLabel>Location</InputLabel>
                            <Select
                                name="location"
                                id="location"
                                value={formData.location}
                                label="Location"
                                onChange={(e)=>setLocation(e.target.value)}
                            >
                                <MenuItem value={"Sydney"}>Sydney</MenuItem>
                                <MenuItem value={"Melbourne"}>Melbourne</MenuItem>
                                <MenuItem value={"Brisbane"}>Brisbane</MenuItem>
                                <MenuItem value={"Perth"}>Perth</MenuItem>
                                <MenuItem value={"Adelaide"}>Adelaide</MenuItem>
                                <MenuItem value={"Canberra"}>Canberra</MenuItem>
                                <MenuItem value={"Hobart"}>Hobart</MenuItem>
                                <MenuItem value={"Darwin"}>Darwin</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                <Box sx={{width:320 }} marginTop={2}>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Account Type</FormLabel>
                        <RadioGroup
                            row
                            //defaultValue="member"
                            defaultValue = {formData.account_type}
                            name="account_type"
                            >
                            <FormControlLabel value="Member" control={<Radio />} label="Member" disabled/>
                            <FormControlLabel value="Organiser" control={<Radio />} label="Organiser" disabled/>
                            <FormControlLabel value="Admin" control={<Radio />} label="Admin" disabled/>
                        </RadioGroup>
                    </FormControl>
                </Box>
                <Box sx={{ display: 'flex'}} marginTop={2}>
                    <FormControl sx={{ m: 0}} component="fieldset" variant="standard">
                        <FormLabel component="legend">Your interests</FormLabel>
                        <FormGroup>
                        <Box sx={{display: "flex", flexDirection: "row", flexWrap: "wrap"}} marginTop={2}> 
                            <FormControlLabel
                                control={
                                <Checkbox checked={cycling} onChange={(e)=>setCycling(e.target.checked)} name="cycling" value={cycling}/>
                                }
                                label="Cycling"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={golf} onChange={(e)=>setGolf(e.target.checked)} name="golf" value={golf}/>
                                }
                                label="Golf"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={tennis} onChange={(e)=>setTennis(e.target.checked)} name="tennis" value={tennis}/>
                                }
                                label="Tennis"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={soccer} onChange={(e)=>setSoccer(e.target.checked)} name="soccer" value={soccer}/>
                                }
                                label="Soccer"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={hiking} onChange={(e)=>setHiking(e.target.checked)} name="hiking" value={hiking}/>
                                }
                                label="Hiking"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={cricket} onChange={(e)=>setCricket(e.target.checked)} name="cricket" value={cricket}/>
                                }
                                label="Cricket"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={running} onChange={(e)=>setRunning(e.target.checked)} name="running" value={running}/>
                                }
                                label="Running"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={basketball} onChange={(e)=>setBasketball(e.target.checked)} name="basketball" value={basketball}/>
                                }
                                label="Basketball"
                            />
                        </Box>
                        </FormGroup>
                    </FormControl>
                </Box>                                           
               <Box sx={{display: "flex", justifyContent: "flex-end"}} marginTop={2}>
                    <Button variant="contained" type="submit" color="success" >Submit</Button>
               </Box>
            </form>
        </Container>
    )

}

export default ProfileForm 