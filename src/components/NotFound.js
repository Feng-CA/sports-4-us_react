import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <>
            <p>404 error</p>
            <p>Sorry, page not found</p>
            <Link to="/activities">Go back to activities page</Link>
        </>
    )

}

export default NotFound