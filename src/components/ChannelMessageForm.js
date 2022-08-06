import { Button, Box, InputLabel, TextField } from "@mui/material";
import { useState } from "react";
//import { useNavigate } from "react-router-dom";
//import { createSentMessage } from "../services/sentMessagesServices";
import { useGlobalState } from "../utils/stateContext";
import ChannelsList from "./ChannelsList";
import { createChannelMessage } from "../services/channelMessagingServices";
import "../css/message.css";


const ChannelMessageForm = () => {
    const {store, dispatch} = useGlobalState()
    const {loggedInUser, messagingChannelId, channelMessageList} = store

    //const navigate = useNavigate()
    const initialFormData = {
        message: "",
        category_id: ""
    }
    const [formData, setFormData] = useState(initialFormData)
    
    const handleFormData = (e) => {
        setFormData({
            category_id: messagingChannelId!==1?(messagingChannelId-1):9,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.text === ""){
            console.log("empty message")
        }else {
            //formData.sender_user_id = senderId
         
            addMessage(formData)
            cleanMessage()
        }
        //navigate("../")
        //adds the message to the list  
    }
    
    const addMessage = (data) => {
        //console.log(channelMessageList)
        let newVar = channelMessageList
        createChannelMessage(data)
        .then(message =>{newVar.unshift(message)
            dispatch({
                data: newVar,
                type: "setChannelMessageList"
            })      
    })}

    const cleanMessage = () => {
        setFormData(initialFormData)
    }
 

    return (
        <Box className="channelMessageForm_container">
            <Box className="channelMessageForm_wrap">
                <form onSubmit={handleSubmit}>
                    <Box sx={{display: "flex", flexDirection: "column"}}  marginTop={2}>
                        <InputLabel sx={{fontSize: "30px", color: "#113d8d"}}>{`Hi ${loggedInUser},`}</InputLabel>
                        <ChannelsList/>
                        <Box marginTop={2}>
                            <TextField className="channelMessageForm_textField" required sx={{width: 320}} type="textarea" name="message" id="message" placeholder={"what would you like to say?"} value={formData.message} onChange={handleFormData}/>
                        </Box>
                    </Box>
                    <Box style={{display: "flex", justifyContent: "space-between"}} marginTop={2}>
                        <Button variant="contained" color="success" type="submit">Post message</Button>
                        <Button variant="contained" color="primary" onClick={cleanMessage}>Clean message</Button>
                    </Box>
                </form>
            </Box>
        </Box>
    )

}

export default ChannelMessageForm