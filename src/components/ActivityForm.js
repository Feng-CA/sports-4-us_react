import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
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
import { createActivity } from "../services/activitiesServices";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import { ExpandLess} from "@mui/icons-material";
import { ExpandMore } from "@mui/icons-material";

const ActivityForm = () => {
     const {store} = useGlobalState()
     const {users} = store
     const [open, setOpen] = useState(true)
    // const navigate = useNavigate()

    
    const initialFormData = {
        title: "",
        category_id: "",
        location: "",
        date_time: null,
        //image: null,
        cost: 0,
        quantity: 0,
        description: "",
        user_id: 4
    }
    const [formData, setFormData] = useState(initialFormData)
    // const [error, setError] = useState(null)
    const [value, setValue] = useState(new Date());
    // const [selectedImage, setSelectedImage] = useState(null);
    let newUsers = {}
    if(typeof(users) === "string") {
        newUsers = JSON.parse(users)
        } else {
          newUsers = users
        }
    
    useEffect(() => {
        setFormData(() => ({
            //date_time: value
            //image: selectedImage
        }))
    }, [value])

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formData)
        createActivity(formData)
         .then(response=>console.log(response))
      
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
        console.log(e.target.name)
        setFormData((formData) => ({
            ...formData,
            [e.target.name]: e.target.value
        }))
    }
    const senderClick = (e) => {        
          setOpen(!open);
          console.log(e.target.outerText)
          console.log((newUsers.find(({full_name})=>full_name===(e.target.outerText))).id)
      }
    
      const handleClick = () => {
        setOpen(!open);
        console.log("You have clicked")
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
                                defaultValue={"Melbourne"}
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

                                name="category_id"
                                id="category"
                                value={formData.category_id}
                                label="Category"
                                onChange={handleFormData}
                            >
                                <MenuItem value={1}>Cycling</MenuItem>
                                <MenuItem value={2}>Golf</MenuItem>
                                <MenuItem value={3}>Tennis</MenuItem>
                                <MenuItem value={4}>Soccer</MenuItem>
                                <MenuItem value={5}>Hiking</MenuItem>
                                <MenuItem value={6}>Cricket</MenuItem>
                                <MenuItem value={7}>Running</MenuItem>
                                <MenuItem value={8}>Basketball</MenuItem>
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
                        <TextField sx={{width: 152}} type="number" name="quantity" id="quantity" InputProps={{inputProps: {max: 100, min: 0}}} value={Number(formData.quantity)} onChange={handleFormData}/>
                    </Box>
                    <Box marginLeft={2}>
                        <InputLabel>Cost</InputLabel>
                        <TextField sx={{width: 152}}type="number" name="cost" id="cost" InputProps={{inputProps: {max: 100, min: 0}}} value={Number(formData.cost)} onChange={handleFormData}/>
                    </Box>
                </Box>

                {/*<Box marginTop={2}>
                    <FormControl required sx={{width: 320}}>
                            <InputLabel>Organiser</InputLabel>
                            {/*<Select
                                defaultValue={""}
                                name="user_id"
                                id="organiser_id"
                                value={formData.user_id}
                                label="Organiser"
                                onChange={handleFormData}
                        >*/}

            {/*****************************************************************/}
             <Box marginTop={2} sx = {{ border: 1, borderColor: 'grey.400',borderRadius: '4px', width: 320}}>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon className="sidebarListItem">
                      <PeopleIcon className="sidebarIcon" />
                    </ListItemIcon>
                    <ListItemText primary={"Select an Orgaiser"}/>
                    {open? <ExpandLess/> : <ExpandMore/>}
                </ListItemButton>

                            <Collapse in={open} timeout="auto" unmountOnExit>
                                    {newUsers.map(user =>(
                                    <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }} onClick={(e)=>senderClick(e)}>
                                            <ListItemIcon>
                                            <PersonIcon/>
                                            </ListItemIcon>
                                            <ListItemText primary={user.full_name} />
                                        </ListItemButton>
                                        
                                    </List>
                                        ))}
                                   </Collapse>
                </Box>
         {/*</Select>
                    </FormControl>
                </Box>

                {/*<Box marginTop={2}>
                    <InputLabel>Upload image</InputLabel>
                    {/*<Input sx={{width: 320}} type="file" name="image" id="image" value={selectedImage} onChange={(e)=> setSelectedImage(e.target.files[0])}/>
                    <Input sx={{width: 320}} type="file" name="image" id="image" onChange={(e)=> setSelectedImage(e.target.files[0])}/>
                </Box>*/}
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