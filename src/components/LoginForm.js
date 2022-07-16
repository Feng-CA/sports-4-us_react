import { Button, InputLabel, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";

const LoginForm = () => {
    const {dispatch} = useGlobalState()
    const navigate = useNavigate()

    const initialFormData = {
        email: "",
        password: ""
    }
    const [formData, setFormData] = useState(initialFormData)
    // const [error, setError] = useState(null)

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch({
                type: "setLoggedInUser",
                data: formData.email
        })
        setFormData(initialFormData)
        navigate("/activities")   
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
               
                <Button variant="contained" type="submit">Login</Button>
            </form>
            <div>
                <h6>Not a member yet?</h6>
                <Link to="/signup">Sign up</Link>
            </div>
        </>
    )

}

export default LoginForm