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
import 'react-phone-input-2/lib/style.css'


const ProfileForm = () => {
    const {store} = useGlobalState()
    const { loggedInUser, users } = store
    // const navigate = useNavigate()
    const [interest, setInterest] = useState({
        cycling: false,
        golf: false,
        tennis: false,
        soccer: false,
        hiking: false,
        cricket: false,
        running: false,
        basketball: false
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
    const currentUser = (newUsers.find(user => user.full_name === loggedInUser))
    console.log(currentUser)
    //const currentUser = users.find(user => user.full_name === loggedInUser)
    const [location, setLocation] = useState()

    const initialFormData = {
        fullname: loggedInUser,
        email: currentUser.email,
        location: location,
        contact_no: "",
        emergency_contact: "",
        emergency_contact_no: "",
        account_type: "member",
        interests: []
    }

    const [formData, setFormData] = useState(initialFormData)
    const [contactNo, setContactNo] = useState()
    const [emergencyContactNo, setEmergencyContactNo] = useState()
    const [emergencyContact, setEmergencyContact] = useState()
    const [email, setEmail] = useState()

    const handleChange = (event) => {
        setInterest({
          ...interest,
          [event.target.name]: event.target.checked,
        });
      };

    // const [error, setError] = useState(null)
    
    
    useEffect(() => {
        setFormData(() => ({
            fullname: loggedInUser,
            email: email,
            interests: interest,
            contact_no: contactNo,
            emergency_contact_no: emergencyContactNo,
            emergency_contact: emergencyContact,
            location: location
        }))
        
    }, [interest, contactNo, emergencyContactNo, emergencyContact, location, email, loggedInUser])
    
    console.log("before:", formData)

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("after:", formData)
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
                        <TextField required sx={{width: 320}} type="email" name="email" id="email" value={formData.email} onChange={(e)=>setEmail(e.target.value)}/>
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
                            defaultValue="member"
                            name="account_type"
                            >
                            <FormControlLabel value="member" control={<Radio />} label="Member"/>
                            <FormControlLabel value="organiser" control={<Radio />} label="Organiser" disabled/>
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

export default ProfileForm 