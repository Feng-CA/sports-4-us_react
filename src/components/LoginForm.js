import { Button, InputLabel, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";
import { signIn } from "../services/authservices"

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
            sessionStorage.setItem("full_name",user.full_name)
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
        <>  
            <Typography variant="h6">Welcome back!</Typography>
            {error && <p>Wrong Email/Password</p>} 
            {/* {error && <p>{error}</p>} */}
            <form onSubmit={handleSubmit}>
                <div>
                    <InputLabel>Email:</InputLabel>
                    <TextField type="email" name="email" id="email" placeholder="example@email.com" value={formData.email} onChange={handleFormData}/>
                </div>
                <div>
                    <InputLabel htmlFor="password">Password:</InputLabel>
                    <TextField type="password" name="password" id="password" placeholder="********" value={formData.password} onChange={handleFormData}/>
                </div>
               
                <Button variant="contained" type="submit" color="success">Login</Button>
            </form>
            <div>
                <p>Not a member yet?</p>
                <Button variant="contained" onClick={() => navigate("/signup")}>Sign up</Button>
            </div>
        </>
    )

}

export default LoginForm