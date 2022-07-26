import { Container, Box, Button, InputLabel, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { signUp } from "../services/authServices"
import { useGlobalState } from "../utils/stateContext";
import {useNavigate} from "react-router-dom";

const SignupForm = () => {
    const {dispatch} = useGlobalState();
    const navigate = useNavigate()
    
    const initialFormData = {
        full_name: "",
        email: "",
        password: "",
        password_confirmation: ""
    }
    const [formData, setFormData] = useState(initialFormData)
    const [error, setError] = useState(null)

    const handleSubmit = (e) =>{
        e.preventDefault()
              
        signUp(formData)
            .then((user) => {
                sessionStorage.setItem("full_name", user.full_name)
                let errorMessage = "";
                if (user.error){
                
                    Object.keys(user.error).forEach(key => {
                        errorMessage = errorMessage.concat("", `${key} ${user.error[key]}`)
                    })
                    setError(errorMessage)
                }
                else {
                    dispatch({
                        type: "setLoggedInUser",
                        data: user.full_name
                    })
                    setFormData(initialFormData)
                    navigate("/") 
                }   
            })
            .catch(e => {setError(e)})
        
        
    }

    const handleFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }
    return (
        <Container className="signup_container">
            <Box className="login_form">
                <Typography variant='h5'>Register Membership</Typography>
                {error && <Typography variant="h5">Oops!Something Has Gone Wrong, Please confirm that the Passwords do match.</Typography>}
                <form onSubmit={handleSubmit}>
                    <Box marginTop={2}>
                        <Box marginBottom={2}>
                            <InputLabel>Your Full Name:</InputLabel>
                        </Box>
                        <TextField style={{width: 280}} type="text" name="full_name" id="full_name" placeholder="e.g., John Smith" value={formData.full_name} onChange={handleFormData} required/>
                    </Box>
                    <Box marginTop={2}>
                        <Box marginBottom={2}>
                            <InputLabel>Your Email:</InputLabel>
                        </Box>
                        <TextField style={{width: 280}} type="email" name="email" id="email" placeholder="e.g., John.smith@email.com" value={formData.email} onChange={handleFormData} required/>
                    </Box>
                    <Box marginTop={2}>
                        <Box marginBottom={2}>
                            <InputLabel htmlFor="password">Password:</InputLabel>
                        </Box>
                        <TextField style={{width: 280}} type="password" name="password" id="password" placeholder="minimum 8 characters" value={formData.password} onChange={handleFormData} required/>
                    </Box>
                    <Box marginTop={2}>
                        <Box marginBottom={2}>
                            <InputLabel htmlFor="password">Password confirmation:</InputLabel>
                        </Box>
                        <TextField style={{width: 280}} type="password" name="password_confirmation" id="password_confirmation" placeholder="minimum 8 characters" value={formData.password_confirmation} onChange={handleFormData} required/>
                    </Box>
                    <Box marginTop={3}>
                        <Button variant="contained" type="submit">Sign up</Button>
                    </Box>
                </form>
            </Box>
        </Container>
    )

}

export default SignupForm