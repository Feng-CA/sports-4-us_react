import { Link, useParams } from "react-router-dom" 
import { useGlobalState } from "../utils/stateContext"
import { Button, Container, Box, Card, CardContent, Typography } from "@mui/material"
//import messageList from "../data/msssageList.json"
import { deleteSentMessage, getSentMessages } from "../services/sentMessagesServices"
import {useNavigate} from "react-router-dom";
import { ArrowBack} from "@mui/icons-material";
import "../css/message.css"


const SentMessageDetail = () => {
     const {store, dispatch} = useGlobalState()
     const {sentMessageList} = store
    const params = useParams()
    const navigate = useNavigate()
    
    let newMessageList
     if(typeof(sentMessageList) === "string") {
      newMessageList = JSON.parse(sentMessageList)
      } else {
        newMessageList = sentMessageList
      }

    const getMessage = (id) => {
        return newMessageList.find(m => m.message_id === parseInt(id))
    }

    const handleClick = () =>{
       
        deleteSentMessage(message.message_id).then(response =>console.log(response))  
        getSentMessages()
        .then(response =>{
        sessionStorage.setItem("sentMessagesList", JSON.stringify(response))
        dispatch({
            type: 'setSentMessagelist',
            data: response
        }) 
    }) 
    
    
    navigate("../sentmessages")
    }

    const message = getMessage(params.messageId)//{text: "test message", user: "Test user"}
    return (
        <Container className="sentMessageDetail_container" >
            <Box marginTop={3}>
              <ArrowBack onClick={() => navigate("/messages/sentmessages")}/>
            </Box>
            <Box className="sentMessage_wrap" marginTop={6}>
        
                    { message ?
                        <Card style={{width: 380, margin: "0 auto", backgroundColor: "#cef5f7"}}>
                            <CardContent>
                                <Typography variant='p'>{message.receiver}</Typography>
                                <Typography variant='p' margin={2}>{message.date} {message.time}</Typography>
                                <Typography variant='h5' marginTop={2}>{message.message}</Typography>
                                <Box sx={{display: "flex", justifyContent: "flex-end", alignItems: "center"}} marginTop={1}>
                                    <Button size="small" variant="contained" color="secondary" onClick={handleClick}>Delete Message</Button>
                                </Box>
                            </CardContent>    
                        </Card>
                        :
                        <>
                            <Typography variant='p'>Message not found</Typography>
                            <Link to="/messages">Go back to the main page</Link>
                        </>
                    }
          
            </Box>
            
        </Container>
    )

}

export default SentMessageDetail