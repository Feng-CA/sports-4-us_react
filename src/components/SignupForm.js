import { Button, InputLabel, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { signUp } from "./services/authservices"
import { useGlobalState } from "../utils/stateContext";
import {useNavigate} from "react-router-dom";


const SignupForm = () => {
    const {dispatch} = useGlobalState();
    //const{loggedInUser} = store;
    const navigate = useNavigate()
    
    const initialFormData = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: ""
    }
    const [formData, setFormData] = useState(initialFormData)
    const [error, setError] = useState(null)
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        
        console.log(formData)
        signUp(formData)
          .then((user) => {
            sessionStorage.setItem("first_name",user.first_name)
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
                    data: user.first_name
                })
                navigate("/")
                 
            }
            
        })
        .catch(e => {setError(e)})
        
        
    }

    const handleFormData = (e) => {
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
        console.log(formData)
    }
    return (
        <>
            <Typography variant='h4'>Register as a member</Typography>
            {error && <p>Oops!Something Has Gone Wrong, Please confirm that the Passwords do match.</p>}
            
            <form onSubmit={handleSubmit}>
                <div>
                    <InputLabel>Your First Name:</InputLabel>
                    <TextField type="text" name="first_name" id="first_name" placeholder="e.g., John Smith" value={formData.first_name} onChange={handleFormData}/>
                </div>
                <div>
                    <InputLabel>Your Last Name:</InputLabel>
                    <TextField type="text" name="last_name" id="last_name" placeholder="e.g., John Smith" value={formData.last_name} onChange={handleFormData}/>
                </div>
                <div>
                    <InputLabel>Your Email:</InputLabel>
                    <TextField type="email" name="email" id="email" placeholder="e.g., John.smith@email.com" value={formData.email} onChange={handleFormData}/>
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