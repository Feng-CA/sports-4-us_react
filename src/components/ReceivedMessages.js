 import { useGlobalState } from '../utils/stateContext'
//import messageList from "../data/msssageList.json";
import ReceivedMessage from './ReceivedMessage';
import { useEffect, Navigate } from 'react';
import { getMessages } from '../services/messagesServices';
import { Box, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import "../css/message.css";
import "../css/message.css";


const ReceivedMessages = () => {
     const {store, dispatch}= useGlobalState()
     const {messageList, loggedInUser} = store
     let newMessageList;
     const navigate = useNavigate()


  useEffect(() => {

  getMessages()
    .then(response =>{
      sessionStorage.setItem("messagesList", JSON.stringify(response))
      dispatch({
        type: 'setMessagelist',
        data: response
    }) 
    })// eslint-disable-next-line
  },[]);

     if(typeof(messageList) === "string") {
      newMessageList = JSON.parse(messageList)
      } else {
        newMessageList = messageList
      }
    
    
    return (
       
        <Box className='receivedMessages_container'>
          <Box className='receivedMessages_wrap'>
            <Box className="receivedMessges_title">
              <Typography  variant="h6" margin={3}>Your received messages:</Typography>
            </Box>
          {newMessageList.length ?
            <>
              {newMessageList.map(message => (
                loggedInUser===message.receiver)&&
                <ReceivedMessage key={message.message_id} message={message} displayName={message.receiver}/>  
              )} 
            </> 
            :
            <p>List of messages is empty</p>
          
          } 
          </Box>
        </Box>      
    )

}

export default ReceivedMessages
