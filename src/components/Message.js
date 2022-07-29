import { Container, Card, CardContent, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Message = ({message}) => {
    return (
        <Container className="message_container">
            <Card style={{width: 380, margin: "0 auto"}}>
                <CardContent>
                    <Link to={`/messages/user/${message.username}`}>
                        <Typography variant='p'>{message.username}</Typography>
                    </Link>
                    <Typography variant='p' margin={2}>{message.posted}</Typography>
                    <Link to={`/messages/${message.id}`} style={{textDecoration: 'none'}}>
                        <Typography variant='h5'>{message.text}</Typography>
                    </Link>
                </CardContent>
            </Card>
        </Container>
    )

}

export default Message