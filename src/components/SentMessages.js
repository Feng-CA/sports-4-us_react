import { useGlobalState } from '../utils/stateContext'
//import messageList from "../data/msssageList.json";
import SentMessage from './SentMessage';
import { useEffect } from 'react';
import { getSentMessages } from '../services/sentMessagesServices';

const SentMessages = () => {
    const {store, dispatch}= useGlobalState()
    const {sentMessageList, loggedInUser} = store
    let newMessageList

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
       <>
         {console.log(loggedInUser)}
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
           
       </>
   )

}
export default SentMessages;