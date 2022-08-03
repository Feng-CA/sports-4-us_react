 import { useGlobalState } from '../utils/stateContext'
//import messageList from "../data/msssageList.json";
import Message from './Message';
import MessageForm from "./MessageForm";
import { useEffect, Navigate } from 'react';
import { getMessages } from '../services/messagesServices';
import { Box } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import "../css/message.css";


const Messages = () => {
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
        <>
          <Box>
              <ArrowBack onClick={() => navigate("/member")}/>
          </Box>
          {<MessageForm />}
          {newMessageList.length ?
            <>
              {newMessageList.map(message => (
                loggedInUser===message.receiver)&&
                <Message key={message.message_id} message={message} displayName={message.sender}/>  
              )} 
            </> 
            :
            <p>List of messages is empty</p>
          
          } 
            
        </>
    )

}

export default Messages
