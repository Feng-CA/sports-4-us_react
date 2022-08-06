import { Card, CardContent, Typography, Box } from "@mui/material"
import { Link } from "react-router-dom";
import "../css/message.css";


const ChannelMessage = ({message, displayName}) => {

    return (
        <Box className="channelMessage_container" marginTop={2}>
            <Card style={{width: "auto", margin: "0 auto", backgroundColor: "#cef5f7"}}>
                <CardContent>
                    <Box className="channelMessagesCard">
                        <Box>
                            <Link to="/messages/new">
                                <Typography variant='p'>{displayName}</Typography>
                            </Link>
                        </Box>
                        <Box marginLeft={2}>
                            <Typography variant='p' margin={2}>{message.date} {message.time}</Typography>
                        </Box>
                    </Box>
                    <Box marginTop={2}>
                        <Link to={`../../messages/channelmessages/messages/${message.id}`} style={{textDecoration: 'none'}}>
                            <Typography variant='h5'>{message.message}</Typography>
                        </Link>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )

}

export default ChannelMessage