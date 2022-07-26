import { Box, Button, Container, InputLabel, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";
import { signIn } from "../services/authServices";

const LoginForm = () => {
    const {dispatch} = useGlobalState()
    const navigate = useNavigate()

    const initialFormData = {
        email: "",
        password: ""
    }
    const [formData, setFormData] = useState(initialFormData)
    const [error, setError] = useState(null)

    const handleSubmit = (e) =>{
        e.preventDefault()
        signIn(formData)
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
                navigate("/activities")     
            }  
        })
        .catch(e => {console.log(e)})
    }

    const handleFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }
    return (
        <Container className="login_container">
            <Box className="login_form">
                <Typography variant="h5">Welcome back!</Typography>
                {error && <Typography>No match that Email and/or Password</Typography>}
                <form onSubmit={handleSubmit}>
                    <Box marginTop={2}>
                        <Box marginBottom={2}>
                            <InputLabel>Email:</InputLabel>
                        </Box>
                        <TextField style={{width: 280}} type="email" name="email" id="email" placeholder="example@email.com" value={formData.email} onChange={handleFormData} required/>
                    </Box>
                    <Box marginTop={2}>
                        <Box marginBottom={2}>
                            <InputLabel htmlFor="password">Password:</InputLabel>
                        </Box>
                        <TextField style={{width: 280}} type="password" name="password" id="password" placeholder="********" value={formData.password} onChange={handleFormData} required/>
                    </Box>
                    <Box marginTop={3}>
                        <Button variant="outlined" type="submit" color="success">Login</Button>
                    </Box>
                </form>
                <Box>
                    <Box marginTop={2}>
                        <Typography variant="h6">Not a member yet?</Typography>
                    </Box>
                    <Box marginTop={2}>
                        <Button variant="outlined" onClick={() => navigate("/signup")}>Sign up</Button>
                    </Box>
                </Box>
            </Box>
        </Container>
    )

}

export default LoginForm