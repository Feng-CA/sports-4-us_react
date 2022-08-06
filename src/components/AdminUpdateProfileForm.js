import {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
import 'react-phone-input-2/lib/style.css'
import { getProfiles, updateProfile } from "../services/profilesServices";
import { useNavigate } from "react-router-dom";


const AdminUpdateProfileForm = () => {
    const {store, dispatch} = useGlobalState()
    const { users, profiles } = store
    const params = useParams()
    const navigate = useNavigate()
    let newProfiles;
    
    if(typeof(profiles) === "string") {
        newProfiles = JSON.parse(profiles)
    } else {
        newProfiles = profiles
    }

    const getProfile = (id) => {
        return newProfiles.find(p => p.id === parseInt(id))
    }

    let profile = getProfile(Number(params.profileId))

    console.log("profile", profile)


    const [interest, setInterest] = useState({
        cycling: profile.cycling,
        golf: profile.golf,
        tennis: profile.tennis,
        soccer: profile.soccer,
        hiking: profile.hiking,
        cricket: profile.cricket,
        running: profile.running,
        basketball: profile.basketball
    })
   
    let newUsers;
   
        if(typeof(users)==="string"){
            newUsers = JSON.parse(users)
        }else{
        newUsers=users
        }
        
    const { cycling, golf, tennis, soccer, hiking, cricket, running, basketball } = interest;
    //const currentUser = (JSON.parse(users).find(user => user.full_name === loggedInUser))
    //const currentUser = (JSON.parse(newUsers).find(user => user.full_name === loggedInUser))
    const profileUser = (newUsers[Number(params.profileId)-1])
    console.log("params",params)
    console.log("profileUser",profileUser)
    //const currentUser = users.find(user => user.full_name === loggedInUser)
    const [location, setLocation] = useState(profile.location)

    const initialFormData = {
        location: profile.location,
        contact_no: profile.contact_no,
        emergency_contact: profile.emergency_contact,
        emergency_contact_no: profile.emergency_contact_no,
        account_type: profile.account_id,
        cycling: profile.cycling,
        golf: profile.golf,
        tennis: profile.tennis,
        soccer: profile.soccer,
        hiking: profile.hiking,
        cricket: profile.cricket,
        running: profile.running,
        basketball: profile.basketball,
        interests: profile.interests
    }

    const [formData, setFormData] = useState(initialFormData)
    const [contactNo, setContactNo] = useState(initialFormData.contact_no)
    const [emergencyContactNo, setEmergencyContactNo] = useState(initialFormData.emergency_contact_no)
    const [emergencyContact, setEmergencyContact] = useState(initialFormData.emergency_contact)
    const [email, setEmail] = useState(profileUser.email)
    const [account_id, setAccountId] = useState(profile.account_id)

    const handleChange = (event) => {
        setInterest({
          ...interest,
          [event.target.name]: event.target.checked,
        });
      };

      const radioChange = (e) => {
        // console.log(e.target.value)
        setAccountId(e.target.value)
        // console.log(account_id) 
      };
    //   console.log(account_id)
    // const [error, setError] = useState(null)
    
    
    useEffect(() => {
        setFormData(() => ({
           
            interests: interest,
            contact_no: contactNo,
            emergency_contact_no: emergencyContactNo,
            emergency_contact: emergencyContact,
            cycling: cycling,
            golf: golf,
            tennis: tennis,
            soccer: soccer,
            hiking: hiking,
            cricket: cricket,
            running: running,
            basketball: basketball,
            location: location,
            account_id: account_id
        }))
        // eslint-disable-next-line
    }, [account_id, interest, contactNo, emergencyContactNo, emergencyContact, location, email, profile])
    
    console.log("before:", formData)

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("after:", formData)

        updateProfile(profile.id,formData)
        .then( response => profile = response) 
        console.log("after-submit current Profile:", profile)
            getProfiles()
                .then( response => {
                sessionStorage.setItem("profiles", JSON.stringify(response.data))
                dispatch({
                type: 'setProfiles',
                data: response.data
                })})
             navigate(`../profiles/${Number(profile.id)}`)


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

    //<Container className="profileForm_container" sx={{width: 380}}></Container>
    return (
       
        <Container className="profileForm_container" sx={{width: 380}}>
             <Box sx={{textAlign: "center"}} margin={3}>
                <Typography variant="h6">Update Profile</Typography>
            </Box>  
            <form onSubmit={handleSubmit}>
                <Box>
                    <InputLabel>Your Full Name</InputLabel>
                    <Box marginTop={1}>
                        <TextField required sx={{width: 320}} type="text" name="fullname" id="fullname" value={profileUser.full_name} disabled/>
                    </Box>
                </Box>
                <Box marginTop={1}>
                    <InputLabel>Your Email</InputLabel>
                    <Box marginTop={1}>
                        <TextField required sx={{width: 320}} type="email" name="email" id="email" value={profileUser.email} onChange={(e)=>setEmail(e.target.value)} disabled/>
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
                                defaultValue="Melbourne"
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
                            defaultValue={account_id === "Organiser"?2:1}
                            name="account_id"
                            onChange = {radioChange}
                            >
                            <FormControlLabel value= {1} control={<Radio />} label="Member"/>
                            <FormControlLabel value= {2} control={<Radio />} label="Organiser"/>
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
                                <Checkbox checked={cycling} onChange={handleChange} name="cycling" value={cycling}/>
                                }
                                label="Cycling"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={golf} onChange={handleChange} name="golf" value={golf}/>
                                }
                                label="Golf"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={tennis} onChange={handleChange} name="tennis" value={tennis}/>
                                }
                                label="Tennis"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={soccer} onChange={handleChange} name="soccer" value={soccer}/>
                                }
                                label="Soccer"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={hiking} onChange={handleChange} name="hiking" value={hiking}/>
                                }
                                label="Hiking"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={cricket} onChange={handleChange} name="cricket" value={cricket}/>
                                }
                                label="Cricket"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={running} onChange={handleChange} name="running" value={running}/>
                                }
                                label="Running"
                            />
                            <FormControlLabel
                                control={
                                <Checkbox checked={basketball} onChange={handleChange} name="basketball" value={basketball}/>
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

export default AdminUpdateProfileForm 