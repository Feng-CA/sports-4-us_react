import { Container, Box, Card, CardContent, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import "../css/message.css"

const SentMessage = ({message, displayName}) => {
    return (
        <Box className="message_container" marginTop={2}>
            
            <Card style={{width: "auto", margin: "0 auto"}}>
                <CardContent>
                    <Box className="messagesCard">
                        <Box>
                            <Link to={`/messages/user/${displayName}`}>
                                <Typography variant='p'>{displayName}</Typography>
                            </Link>
                        </Box>
                        <Box marginLeft={2}>
                            <Typography variant='p'>{message.date} {message.time}</Typography>
                        </Box>
                    </Box>
                    <Box marginTop={2}>
                        <Link to={`/messages/sentmessages/${message.message_id}`} style={{textDecoration: 'none'}}>
                            <Typography variant='h5'>{message.message}</Typography>
                        </Link>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )

}

export default SentMessage