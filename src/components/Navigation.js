import React, { useState } from 'react'
import { Avatar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";
import { MenuOutlined, Close } from '@mui/icons-material';
import { Box } from '@mui/system';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import "../css/navigation.css";



const Navigation = () => {
    const {store, dispatch} = useGlobalState()
    const {loggedInUser, profiles} = store

    const [active, setActive] = useState(false)

    const showMenu = () => {
        setActive(!active)
    }

    const closeMobileMenu = () => setActive(false)
    
    const navigate = useNavigate()

    const logout = (e) => {
        e.preventDefault()
        sessionStorage.removeItem("full_name")
        sessionStorage.removeItem("token")
        sessionStorage.removeItem("messagingChannelId")

        //sessionStorage.clear()
        dispatch({
            type: "setLoggedInUser",
            data: null 
        })
        dispatch({
            type: "setToken",
            data: null 
        })
        dispatch({
            type: "setReceiverId",
            data: null 
        })
      
        navigate("/categories")
    }
console.log("loggedinUser", loggedInUser)
console.log("profiles", profiles)

    function stringToColor(string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
      }
      
    function stringAvatar(name) {
    return {
        sx: {
        bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
    }
let profile = {
  id: 12,
  fullname: "",
  location: null,
  contact_no: null,
  emergency_contact: null,
  emergency_contact_no: null,
  cycling: null,
  golf: null,
  tennis: null,
  soccer: null,
  hiking: null,
  cricket: null,
  running: null,
  basketball: null,
  account_id: "member",
  isAdmin: null
}

let loggedInAdmin

if(loggedInUser){
    let newProfiles;

    if(typeof(profiles) === "string") {
        newProfiles = JSON.parse(profiles)
    } else {
        newProfiles = profiles
    }

    profile = newProfiles.find(profil => profil.fullname === loggedInUser)

    console.log("profile:", profile)

    // sets loggedInAdmin value
    const adminProfile = newProfiles.find(profile => profile.isAdmin === true)
    
    //let loggedInAdmin;

    if (adminProfile.fullname === loggedInUser) {
      loggedInAdmin = adminProfile.fullname
    } else {
      loggedInAdmin = null
    }
  }
    // right side dropdown menu
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
    
    const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    };


    return (
        <Box className= "navbar">
            {/* <Sports sx={{ display: { xs: 'none', md: 'flex'}}} /> */}
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
                color: '#fff',
                textDecoration: 'none',
                alignItems: "center"
                }}
            >
                SPORTS~4~US
            </Typography>
            <Box className='menu-icon'>
                <MenuOutlined className="menu" onClick={showMenu}/>
            </Box>
            <nav className={active ? 'slider active' : 'slider'}>
                <ul className="slider_wrap">
                    <div className="closed">
                        <Close className="close" onClick={showMenu}/>
                    </div>
                  
                        <li className="nav_option" onClick={closeMobileMenu}>
                            <Link className="nav_link" to='/home'>Home</Link>
                        </li>
                        <li className="nav_option" onClick={closeMobileMenu}>
                            <Link className="nav_link"  to='/categories'>Activities</Link>
                        </li>
                        { loggedInUser && <li className="nav_option" onClick={closeMobileMenu}>
                            <Link className="nav_link"  to='/member'>Member</Link>
                        </li>}
                        <li className="nav_option" onClick={closeMobileMenu}>
                            <Link className="nav_link"  to='/contact'>Contact</Link>
                        </li>
                       
                        {/* { loggedInUser &&  <li className="nav_option" onClick={closeMobileMenu}>
                            <Link className="nav_link"  id="purple" onClick={logout} to='/categories'>Logout</Link>
                        </li>} */}
                        { !loggedInUser &&  <li className="nav_option" onClick={closeMobileMenu}>
                            <Link className="nav_link" id="green" to='/login'>Login</Link>
                        </li>}      
                        
                </ul> 
            </nav>
          {loggedInUser&&
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open Sidebar">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                 { loggedInUser &&  <Avatar className='nav_avatar' {...stringAvatar(`${loggedInUser}`)}  />}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
             
                <MenuItem onClick={handleCloseUserMenu} >
                  <Typography textAlign="center" onClick={() => navigate(`/member/profiles/${profile.id}`)}>My Profile</Typography>
                </MenuItem>
                { !loggedInAdmin &&
                <MenuItem  onClick={handleCloseUserMenu} >
                  <Typography textAlign="center" onClick={() => navigate("/activities/member")}>My Activities</Typography>
                </MenuItem>}
                {console.log(profile)}
                { profile&&(profile.account_id === "Organiser") &&
                <MenuItem  onClick={handleCloseUserMenu} >
                  <Typography textAlign="center" onClick={() => navigate("/activities/organiser")}>Organised Activities</Typography>
                </MenuItem>}
                { loggedInAdmin &&
                <MenuItem  onClick={handleCloseUserMenu} >
                  <Typography textAlign="center" onClick={() => navigate("/activities/organiser")}>Create Activities</Typography>
                </MenuItem>}
                <MenuItem  onClick={handleCloseUserMenu} >
                  <Typography textAlign="center" onClick={() => navigate("/member/profiles")}>All Members</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseUserMenu} >
                  <Typography textAlign="center" onClick={() => navigate("/messages")}>Inbox Messages</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu} >
                  <Typography textAlign="center" onClick={() => navigate("/messages/channelmessages")}>Channel Messages</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseUserMenu} >
                  <Typography textAlign="center" onClick={() => navigate("/messages/new")}>New Message</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseUserMenu} >
                  <Typography textAlign="center" onClick={() => navigate("/messages/sentmessages")}>Sent Messages</Typography>
                </MenuItem>
                <MenuItem  onClick={handleCloseUserMenu} >
                  <Typography textAlign="center" color="#03c2fc" onClick={logout} to='/categories'>Log out</Typography>
                </MenuItem>
             
            </Menu>
          </Box>}
        </Box>
                       
    )
}

export default Navigation
