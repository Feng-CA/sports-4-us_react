import { useGlobalState } from '../utils/stateContext'
//import messageList from "../data/msssageList.json";
import SentMessage from './SentMessage';
import { useEffect } from 'react';
import { getSentMessages } from '../services/sentMessagesServices';
import SideBar from './SideBar';
import { Box, Typography } from '@mui/material';
import "../css/message.css";


const SentMessages = () => {
    const {store, dispatch}= useGlobalState()
    const {sentMessageList, loggedInUser} = store
    let newMessageList;

//Use effect to get sent messages from table
 useEffect(() => {

   getSentMessages()
   .then(response =>{
     sessionStorage.setItem("sentMessagesList", JSON.stringify(response))
     dispatch({
       type: 'setSentMessagelist',
       data: response
   }) 
   })// eslint-disable-next-line
 },[]);

    if(typeof(sentMessageList) === "string") {
     newMessageList = JSON.parse(sentMessageList)
     } else {
       newMessageList = sentMessageList
     }
   
   
   return (
       <Box className='sentMessages_container'>
          <Box className='sentMessages_sidebar'>
              <SideBar />
          </Box>
          <Box className='sentMessages_wrap'>
            <Box className="sentMessges_title">
              <Typography  variant="h6" margin={3}>Your sent messages:</Typography>
            </Box>
            {newMessageList.length ?
              <>
                {newMessageList.map(message => (
                  loggedInUser===message.sender)&&
                  <SentMessage key={message.message_id} message={message} displayName = {message.receiver}/>  
                  )} 
              </> 
              :
              <p>List of messages is empty</p>
              
              } 
          </Box>
           
       </Box>
   )

}
export default SentMessages;