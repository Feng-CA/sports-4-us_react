import { Link, useParams } from "react-router-dom" 
import { useGlobalState } from "../utils/stateContext"
import {Button, Container, Box, Card, CardContent, Typography } from "@mui/material"
import { deleteReceivedMessage } from "../services/messagesServices"
//import messageList from "../data/msssageList.json"
import {useNavigate} from "react-router-dom";
import { getReceivedMessages } from "../services/messagesServices";
import { ArrowBack} from "@mui/icons-material";
import "../css/message.css"

const ReceivedMessageDetail = () => {
    const {store,dispatch} = useGlobalState()
    const {receivedMessageList} = store
    const params = useParams()
    const navigate = useNavigate()
    
    let newMessageList
     if(typeof(receivedMessageList) === "string") {
      newMessageList = JSON.parse(receivedMessageList)
      } else {
        newMessageList = receivedMessageList
      }

    const getMessage = (id) => {
        return newMessageList.find(m => m.message_id === parseInt(id))
    }
    const handleClick = () =>{
    
        deleteReceivedMessage(message.message_id).then(response =>console.log(response))  
        getReceivedMessages()
            .then(response =>{
            sessionStorage.setItem("receivedMessageList", JSON.stringify(response))
            dispatch({
            type: 'setReceivedMessagelist',
            data: response
    }) 
    })
        
        navigate("../../../messages/receivedmessages")
    }

    const message = getMessage(params.messageId)//{text: "test message", user: "Test user"}
    return (
        <Container className="receivedMessageDetail_container">
            <Box marginTop={3}>
              <ArrowBack onClick={() => navigate("/messages/receivedmessages")}/>
            </Box>
            <Box className="receivedMessage_wrap" marginTop={6}>
                    { message ?
                        <Card style={{width: "380", margin: "0 auto", backgroundColor: "#cef5f7"}}>
                            <CardContent>
                                <Typography variant='p'>{message.sender}</Typography>
                                <Typography variant='p' margin={2}>{message.date} {message.time}</Typography>
                                <Typography variant='h5' marginTop={2}>{message.message}</Typography>
                                <Box sx={{display: "flex", justifyContent: "flex-end", alignItems: "center"}} marginTop={1}>
                                    <Button size="small" variant="contained" color="secondary" onClick={({e})=>handleClick(e)} >Delete Message</Button>
                                </Box>
                            </CardContent>    
                        </Card>
                        :
                        <>
                            <Typography variant="h5">Message not found</Typography>
                            <Link to="/messages">Go back to the main page</Link>
                        </>
                    }
            </Box>
            
        </Container>
    )

}

export default ReceivedMessageDetail