import { Button, Box, InputLabel, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createMessage } from "../services/messagesServices";
import { createSentMessage } from "../services/sentMessagesServices";
import { useGlobalState } from "../utils/stateContext";
import SendersList from "./SendersList";
import SideBar from "./SideBar";
import "../css/message.css";


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
                type: "setReceivedMessagelist",
                data: message
                })
          
    })

    createSentMessage(data)
    .then(message => {console.log(message)
        dispatch({
            type: "setSentMessagelist",
            data: message
            })
        navigate("../../messages/sentmessages")
    })}

   

    const cleanMessage = () => {
        setFormData(initialFormData)
    }
    return (
        <Box className='messageForm_container'>
            <Box className='messageForm_sidebar'>
                <SideBar />
            </Box>
            <Box className="messageForm_wrap">
                <form onSubmit={handleSubmit}>
                    <Box sx={{display: "flex", flexDirection: "column"}}  marginTop={2}>
                        <InputLabel className="messageForm_heading">{`Hi ${loggedInUser},`}</InputLabel>
                        <SendersList/>
                        <Box marginTop={2}>
                            <TextField className="messageForm_textField" required sx={{width: 320}} type="textarea" name="message" id="message" placeholder={"what would you like to say?"} value={formData.message} onChange={handleFormData}/>
                        </Box>
                    </Box>
                    <Box style={{display: "flex", justifyContent: "space-between"}} marginTop={2}>
                        <Box>
                            <Button variant="contained" color="success" type="submit">Post message</Button>
                        </Box>
                        <Box>
                            <Button variant="contained" color="primary" onClick={cleanMessage} marginleft={2}>Clean message</Button>
                        </Box>
                    </Box>
                </form>
            </Box>
        </Box>
    )

}

export default MessageForm