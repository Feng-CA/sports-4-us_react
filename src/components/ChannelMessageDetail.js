import { Link, useParams } from "react-router-dom" 
import { useGlobalState } from "../utils/stateContext"
import {Container, Box, Card, CardContent, Typography } from "@mui/material"
//import messageList from "../data/msssageList.json"
import {useNavigate} from "react-router-dom";
// import { getChannelMessages } from '../services/channelMessagingServices';
import { ArrowBack} from "@mui/icons-material";
import "../css/message.css"

const ChannelMessageDetail = () => {
    const {store} = useGlobalState()
    const {channelMessageList} = store
    const params = useParams()
    const navigate = useNavigate()


    let newMessageList
     if(typeof(channelMessageList) === "string") {
      newMessageList = JSON.parse(channelMessageList)
      } else {
        newMessageList = channelMessageList
      }

    const getChannelMessage = (id) => {
        return newMessageList.find(m => parseInt(m.id) === parseInt(id))
    }

    const message = getChannelMessage(params.messageId)//{text: "test message", user: "Test user"}
   
    
    return (
        <Container className="channelMessageDetail_container">
            <Box marginTop={3}>
              <ArrowBack onClick={() => navigate("../../../../messages/channelmessages")}/>
            </Box>
            <Box className="channelMessage_wrap" marginTop={6}>
                    { message ?
                        <Card style={{width: "380", margin: "0 auto", backgroundColor: "#cef5f7"}}>
                            <CardContent>
                                <Typography variant='p'>{message.sender}</Typography>
                                <Typography variant='p' margin={2}>{message.date} {message.time}</Typography>
                                <Typography variant='h5' marginTop={2}>{message.message}</Typography>
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

export default ChannelMessageDetail