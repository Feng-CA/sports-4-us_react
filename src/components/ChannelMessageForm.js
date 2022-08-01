import { Button, Container, Box, InputLabel, TextField } from "@mui/material";
import { useState } from "react";
//import { useNavigate } from "react-router-dom";
//import { createSentMessage } from "../services/sentMessagesServices";
import { useGlobalState } from "../utils/stateContext";
import ChannelsList from "./ChannelsList";
import { createChannelMessage } from "../services/channelMessagingServices";



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
            //console.log(e)
            console.log(formData)
            addMessage(formData)
            cleanMessage()
        }
        //navigate("../")
        //adds the message to the list  
    }
    
    const addMessage = (data) => {
        console.log(channelMessageList)
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
        <Container className="messageForm_container" sx={{width: 380}} style={{display: "flex", justifyContent: "center"}}>
            <form onSubmit={handleSubmit}>
                <Box sx={{display: "flex", flexDirection: "column"}}  marginTop={2}>
                    <InputLabel>{`Hi ${loggedInUser},`}</InputLabel>
                    <ChannelsList/>
                    <Box marginTop={2}>
                        <TextField required sx={{width: 320}} type="textarea" name="message" id="message" placeholder={"what would you like to say?"} value={formData.message} onChange={handleFormData}/>
                    </Box>
                </Box>
                <Box style={{display: "flex", justifyContent: "flex-start"}}>
                    <Button variant="text" type="submit">Post message</Button>
                    <Button variant="text" onClick={cleanMessage}>Clean message</Button>
                </Box>
            </form>
        </Container>
    )

}

export default ChannelMessageForm