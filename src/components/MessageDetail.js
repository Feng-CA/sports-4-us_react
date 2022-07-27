import { Link, useParams } from "react-router-dom"
// import { useGlobalState } from "../utils/stateContext"
import { Container, Box, Card, CardContent, Typography } from "@mui/material"
import messageList from "../data/msssageList.json"


const MessageDetail = () => {
    // const {store} = useGlobalState()
    // const {messageList} = store
    const params = useParams()
    console.log(params)

    const getMessage = (id) => {
        return messageList.find(m => m.id === parseInt(id))
    }

    const message = getMessage(params.messageId)//{text: "test message", user: "Test user"}
    return (
        <Container className="message_container" >
            <Box marginTop={3}>
                <Card style={{width: 380, margin: "0 auto"}}>
                    { message ?
                        <Card>
                            <CardContent>
                                <Typography variant='p'>{message.username}</Typography>
                                <Typography variant='p' margin={2}>{message.posted}</Typography>
                                <Typography variant='h5'>{message.text}</Typography>
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

export default MessageDetail