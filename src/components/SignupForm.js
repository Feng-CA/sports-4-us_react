import { Button, InputLabel, TextField, Typography } from "@mui/material"
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
            .catch(e => {console.log(e)})
        
        
    }

    const handleFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }
    return (
        <>
            <Typography variant='h4'>Register as a member</Typography>
            {error && <p>Oops!Something Has Gone Wrong, Please confirm that the Passwords do match.</p>}

            <form onSubmit={handleSubmit}>
                <div>
                    <InputLabel>Your Full Name:</InputLabel>
                    <TextField type="text" name="fullname" id="fullname" placeholder="e.g., John Smith" value={formData.full_name} onChange={handleFormData}/>
                </div>
                <div>
                    <InputLabel>Your Email:</InputLabel>
                    <TextField type="text" name="email" id="email" placeholder="e.g., John.smith@email.com" value={formData.email} onChange={handleFormData}/>
                </div>
                <div>
                    <InputLabel htmlFor="password">Password:</InputLabel>
                    <TextField type="password" name="password" id="password" placeholder="minimum 8 characters" value={formData.password} onChange={handleFormData}/>
                </div>
                <div>
                    <InputLabel htmlFor="password">Password confirmation:</InputLabel>
                    <TextField type="password" name="password_confirmation" id="password_confirmation" placeholder="minimum 8 characters" value={formData.password_confirmation} onChange={handleFormData}/>
                </div>
               
                <Button variant="contained" type="submit">Sign up</Button>
            </form>
        </>
    )

}

export default SignupForm