 import { useGlobalState } from '../utils/stateContext'
//import messageList from "../data/msssageList.json";
import ReceivedMessage from './ReceivedMessage';
import { useEffect } from 'react';
import { getMessages } from '../services/messagesServices';
// import SideBar from './SideBar';
import { Box, Typography } from '@mui/material';
import "../css/message.css";


const ReceivedMessages = () => {
     const {store, dispatch}= useGlobalState()
     const {receivedMessageList, loggedInUser} = store
     let newMessageList;


  useEffect(() => {

  getMessages()
    .then(response =>{
      sessionStorage.setItem("ReceivedMessagesList", JSON.stringify(response))
      dispatch({
        type: 'setReceivedMessagelist',
        data: response
    }) 
    })// eslint-disable-next-line
  },[]);

     if(typeof(receivedMessageList) === "string") {
      newMessageList = JSON.parse(receivedMessageList)
      } else {
        newMessageList = receivedMessageList
      }
    
    
    return (
       
        <Box className='receivedMessages_container'>
          {/* <Box className='sentMessages_sidebar'>
              <SideBar />
          </Box> */}
          <Box className='receivedMessages_wrap'>
            <Box className="receivedMessges_title">
              <Typography  variant="h6" margin={3}>Your received messages:</Typography>
            </Box>
          {newMessageList.length ?
            <>
              {newMessageList.map(message => (
                loggedInUser===message.receiver)&&
                <ReceivedMessage key={message.message_id} message={message} displayName={message.sender}/>  
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
