import { AppBar, Toolbar, Typography, Tabs, Tab } from "@mui/material"

const Navigation = () => {
    
    return (
        <AppBar position="sticky">
            <Typography variant='h5'>LOGO</Typography>
            <Toolbar>
                <Tabs value={false}>
                    <Tab label="Home" value="/" />
                    <Tab label="Activities"  />
                    <Tab label="Members" />
                    <Tab label="Logout"  />
                    <Tab label="Login"  />
                    <Tab label="Signup" />
                </Tabs>
                
            </Toolbar>

        </AppBar>
                       
    )
}

export default Navigation