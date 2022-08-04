import { Link, useParams } from "react-router-dom" 
import { useGlobalState } from "../utils/stateContext"
import { Button, Container, Box, Card, CardContent, Typography } from "@mui/material"
//import messageList from "../data/msssageList.json"
import { deleteSentMessage, getSentMessages } from "../services/sentMessagesServices"
import {useNavigate} from "react-router-dom";
// import { ArrowBack} from "./@mui/icons-material";
// import SideBar from "./SideBar";

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
        console.log(typeof(message.message_id))
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
        <Container className="messageDetail_container" >
            {/* <Box>
              <ArrowBack onClick={() => navigate("/member")}/>
            </Box> */}
            {/* <Box>
                <SideBar />
            </Box> */}
            <Box marginTop={3}>
                <Card style={{width: 380, margin: "0 auto"}}>
                    { message ?
                        <Card>
                            <CardContent>
                                <Typography variant='p'>{message.receiver}</Typography>
                                <Typography variant='p' margin={2}>{message.date} {message.time}</Typography>
                                <Typography variant='h5'>{message.message}</Typography>
                                <Box sx={{display: "flex"}} marginLeft={0}>
                                    <Button size="small" variant="contained" color="secondary" onClick={handleClick}>Delete Message</Button>
                                </Box>
                            
                            </CardContent>    
                        </Card>
                        :
                        <>
                            <p>Message not found</p>
                            <Link to="/messages">Go back to the main page</Link>
                        </>
                    }
                </Card>
            </Box>
            
        </Container>
    )

}

export default SentMessageDetail