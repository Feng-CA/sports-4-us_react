import { Button, Container, Box, InputLabel, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createMessage } from "../services/messagesServices";
import { useGlobalState } from "../utils/stateContext";
import SendersList from "./SendersList";

const MessageForm = () => {
    const {store, dispatch} = useGlobalState()
    const {loggedInUser, receiverId} = store

    const navigate = useNavigate()
    const initialFormData = {
        message: "",
        receiver_user_id: ""
    }
    const [formData, setFormData] = useState(initialFormData)
    
    const handleFormData = (e) => {
        //console.log(e)
        setFormData({
            receiver_user_id: receiverId,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.text === ""){
            console.log("empty message")
        }else {
            //formData.sender_user_id = senderId
            console.log(e)
            console.log(formData)
            addMessage(formData)
            cleanMessage()
        }
        //adds the message to the list  
    }
    
    const addMessage = (data) => {
        
        createMessage(data)
        .then(message => {
            dispatch({
                type: "addMessage",
                data: message
                })
            navigate("/messages")
    })
    
    }

    const cleanMessage = () => {
        setFormData(initialFormData)
    }
    return (
        <Container className="messageForm_container" sx={{width: 380}} style={{display: "flex", justifyContent: "center"}}>
            <form onSubmit={handleSubmit}>
                <Box sx={{display: "flex", flexDirection: "column"}}  marginTop={2}>
                    <InputLabel>{`Hi ${loggedInUser},`}</InputLabel>
                    <SendersList/>
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

export default MessageForm