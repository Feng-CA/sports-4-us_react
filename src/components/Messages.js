 import { useGlobalState } from '../utils/stateContext'
//import messageList from "../data/msssageList.json";
import Message from './Message';
import MessageForm from "./MessageForm";
import { useEffect } from 'react';
import { getMessages } from '../services/messagesServices';


const Messages = () => {
     const {store, dispatch}= useGlobalState()
     const {messageList, loggedInUser} = store
     let newMessageList


  useEffect(() => {

    getMessages()
    .then(response =>{
      sessionStorage.setItem("messagesList", JSON.stringify(response))
      dispatch({
        type: 'setMessagelist',
        data: response
    }) 
    })
  },[]);

     if(typeof(messageList) === "string") {
      newMessageList = JSON.parse(messageList)
      } else {
        newMessageList = messageList
      }
    
    
    return (
        <>
          {<MessageForm />}
          {console.log(loggedInUser)}
          {newMessageList.length ?
            <>
              {newMessageList.map(message => (
                loggedInUser===message.receiver)&&
                <Message key={message.message_id} message={message}/>  
              )} 
            </> 
            :
            <p>List of messages is empty</p>
          
          } 
            
        </>
    )

}

export default Messages
