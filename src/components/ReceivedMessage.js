import {Box, Card, CardContent, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import "../css/message.css"


const ReceivedMessage = ({message, displayName}) => {
    return (
        <Box className="receivedMessage_container" marginTop={2}>
            
            <Card style={{width: "auto", margin: "0 auto", backgroundColor: "#cef5f7"}}>
                <CardContent>
                    <Box className="receivedMessagesCard">
                        <Box>
                            <Link to={`/messages/new`}>
                                <Typography variant='p'>{displayName}</Typography>
                            </Link>
                        </Box>
                        <Box marginLeft={2}>
                            <Typography variant='p'>{message.date} {message.time}</Typography>
                        </Box>
                    </Box>
                    <Box marginTop={2}>
                        <Link to={`/messages/receivedmessages/${message.message_id}`} style={{textDecoration: 'none'}}>
                            <Typography variant='h5'>{message.message}</Typography>
                        </Link>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}

export default ReceivedMessage