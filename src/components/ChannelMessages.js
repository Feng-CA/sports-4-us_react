import { useGlobalState } from '../utils/stateContext'
//import messageList from "../data/msssageList.json";
import ChannelMessage from './ChannelMessage';
import ChannelMessageForm from './ChannelMessageForm';
import { useEffect } from 'react';
import { getChannelMessages } from '../services/channelMessagingServices';
import { ContactlessOutlined } from '@mui/icons-material';


const ChannelMessages = () => {
     const {store, dispatch}= useGlobalState()
     const {channelMessageList, messagingChannelId} = store
     let newMessageList
     const channels = ["General", "Cycling", "Golf", "Tennis", "Soccer", "Hiking", "Cricket", "Running", "Basketball"]


  useEffect(() => {

  getChannelMessages()
    .then(response =>{
      sessionStorage.setItem("channelMessageList", JSON.stringify(response))
      dispatch({
        type: 'setchannelMessageList',
        data: response
    }) 
    })
  },[]);

     if(typeof(channelMessageList) === "string") {
      newMessageList = JSON.parse(channelMessageList)
      } else {
        newMessageList = channelMessageList
      }
    //console.log(channels[messagingChannelId-1])
    console.log(newMessageList)
    console.log((channelMessageList.length))

    return (
        <>
          {<ChannelMessageForm />}
          {newMessageList.length ?
            <>
              {newMessageList.map(message => (
                
                channels[messagingChannelId-1]===(message.channel))&& 
                <ChannelMessage key={message.id} message={message} displayName={message.sender}/>  
              )} 
            </> 
            :
            <p>List of messages is empty</p>
          }   
        </>
    )

}

export default ChannelMessages
