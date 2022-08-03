import { Container, Card, CardContent, Typography } from "@mui/material"
import { Link } from "react-router-dom";

const SentMessage = ({message, displayName}) => {
    return (
        <Container className="message_container">
            <Card style={{width: 380, margin: "0 auto"}}>
                <CardContent>
                    <Link to={`/messages/user/${displayName}`}>
                        <Typography variant='p'>{displayName}</Typography>
                    </Link>
                    <Typography variant='p' margin={2}>{message.date} {message.time}</Typography>
                    <Link to={`/messages/sentmessages/${message.message_id}`} style={{textDecoration: 'none'}}>
                        <Typography variant='h5'>{message.message}</Typography>
                    </Link>
                </CardContent>
            </Card>
        </Container>
    )

}

export default SentMessage