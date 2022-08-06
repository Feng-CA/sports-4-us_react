import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";

const NotFound = () => {
    return (
        <Container className="notfound_container">
            <Typography variant="h4" marginTop={3}>404 error</Typography>
            <Typography variant="h5" marginTop={1} marginBottom={1}>Sorry, page not found</Typography>
            <Link to="/categories">Go back to activities page</Link>
        </Container>
    )

}

export default NotFound