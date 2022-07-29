// import { useGlobalState } from '../utils/stateContext'
import messageList from "../data/msssageList.json"
import Message from './Message'
import MessageForm from "./MessageForm";

const Messages = () => {
    // const {store}= useGlobalState()
    // const {messageList} = store
    
    
    return (
        <>
          <MessageForm />
          {messageList.length ?
            <>
              {messageList.map(message => 
                <Message key={message.id} message={message}/>
              )} 
            </> 
            :
            <p>List of messages is empty</p>
          
          } 
            
        </>
    )

}

export default Messages
