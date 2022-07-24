import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";
import { Container } from "@mui/system";
import { Button, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
// import { createActivity } from "../services/activitiesServices";


const ActivityForm = () => {
    const {store, dispatch} = useGlobalState()
    // const { activities } = store
    const navigate = useNavigate()

    const [value, setValue] = useState(new Date());

    const initialFormData = {
        title: "",
        category: "",
        location: "",
        date_time: null,
        image: null,
        cost: 0,
        quantity: 0,
        description: ""
    }
    const [formData, setFormData] = useState(initialFormData)
    const [error, setError] = useState(null)

    // console.log(formData)
    // console.log(value)
    
    useEffect(() => {
        setFormData(() => ({
            date_time: value
        }))
    }, [value])

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formData)
        // createActivity(formData)
        // .then((activities) => {

        //     let errorMessage = "";
        //     if (activities.error){
        //         Object.keys(activities.error).forEach(key => {
        //             errorMessage = errorMessage.concat("", `${key} ${activities.error[key]}`)
        //         })
        //         setError(errorMessage)
        //     }
        //     else {    
        //         dispatch({
        //             type: "setActivities",
        //             data: activities
        //         })
        //         setFormData(initialFormData)
        //         navigate("/activities")     
        //     }  
        // })
        // .catch(error=> {console.log(error)})
    }

    const handleFormData = (e) => {
        setFormData((formData) => ({
            ...formData,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <Container className="activityForm_container" sx={{width: 380}}>
             <Box sx={{textAlign: "center"}} margin={3}>
                <Typography variant="h6">Create / Update Activity</Typography>
            </Box>  
            <form onSubmit={handleSubmit}>
                <Box className="activityForm_title">
                    <InputLabel>Title</InputLabel>
                    <Box className="activityForm_textfield">
                        <TextField required sx={{width: 320}} type="text" name="title" id="title" value={formData.title} onChange={handleFormData}/>
                    </Box>
                </Box>
                <Box sx={{display: "flex", justifyContent: "flex-start"}} marginTop={3}> 
                    <Box sx={{ width: 150 }}>
                        <FormControl required fullWidth>
                            <InputLabel>Location</InputLabel>
                            <Select
                                name="location"
                                id="location"
                                value={formData.location}
                                label="Location"
                                onChange={handleFormData}
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
                    <Box sx={{ width: 150 }} marginLeft={3}>
                        <FormControl required fullWidth>
                            <InputLabel>Category</InputLabel>
                            <Select

                                name="category"
                                id="category"
                                value={formData.category}
                                label="Category"
                                onChange={handleFormData}
                            >
                                <MenuItem value={"Cycling"}>Cycling</MenuItem>
                                <MenuItem value={"Golf"}>Golf</MenuItem>
                                <MenuItem value={"Tennis"}>Tennis</MenuItem>
                                <MenuItem value={"Soccer"}>Soccer</MenuItem>
                                <MenuItem value={"Hiking"}>Hiking</MenuItem>
                                <MenuItem value={"Cricket"}>Cricket</MenuItem>
                                <MenuItem value={"Running"}>Running</MenuItem>
                                <MenuItem value={"Basketball"}>Basketball</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
                <Box marginTop={3} sx={{width: 380}}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DateTimePicker
                            renderInput={(props) => <TextField {...props}  sx={{width: 320}}/>}
                            label="DateTimePicker"
                            name="date_time"
                            value={formData.date_time}
                            onChange={(newValue) => {
                            setValue(newValue)
                            }}
                        />
                    </LocalizationProvider>
                </Box>
                <Box sx={{display: "flex"}} marginTop={2}> 
                    <Box>
                        <InputLabel>Quantity</InputLabel>
                        <TextField sx={{width: 152}} type="number" name="quantity" id="quantity" InputProps={{inputProps: {max: 100, min: 0}}} value={formData.quantity} onChange={handleFormData}/>
                    </Box>
                    <Box marginLeft={2}>
                        <InputLabel>Cost</InputLabel>
                        <TextField sx={{width: 152}}type="number" name="cost" id="cost" InputProps={{inputProps: {max: 100, min: 0}}} value={formData.cost} onChange={handleFormData}/>
                    </Box>
                </Box>
                <Box marginTop={2}>
                    <InputLabel>Description</InputLabel>
                    <TextField required sx={{width: 320}} type="textarea" name="description" id="description" value={formData.description} onChange={handleFormData}/>
                </Box>
               <Box sx={{display: "flex", justifyContent: "center"}} marginTop={2}>
                    <Button variant="contained" type="submit" color="success" >Submit</Button>
               </Box>
            </form>
        </Container>
    )

}

export default ActivityForm 