import { AppBar, Toolbar, Typography, Tabs, Tab } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"
import { useGlobalState } from "../utils/stateContext"
import { Sports } from '@mui/icons-material';


const Navigation = () => {
    const {store, dispatch} = useGlobalState()
    const {loggedInUser} = store
    
    const navigate = useNavigate()

    const logout = (e) => {
        e.preventDefault()
        sessionStorage.removeItem("full_name")
        sessionStorage.removeItem("profiles")
        sessionStorage.clear()
        dispatch({
            type: "setLoggedInUser",
            data: null 
        })
      
        navigate("/activities")
    }
    return (
        <AppBar position="sticky" color="transparent">
            <Toolbar>
                <Sports sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    LOGO
                </Typography>
                <Tabs value={false}>
                    <Tab label="Home" component={Link} to="/" />
                    <Tab label="Activities" component={Link} to="/categories"/>
                    { loggedInUser && <Tab label="Member" component={Link} to="/member" />}
                    <Tab label="Contact" component={Link} to="/contact"/>
                    { loggedInUser && <Tab label="Logout" onClick={logout} component={Link} to="/activities" />}
                    { !loggedInUser && <Tab label="Login" component={Link} to="/login" />}      
                </Tabs>
                
            </Toolbar>

        </AppBar>
                       
    )
}

export default Navigation