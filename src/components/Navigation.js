import React, { useState } from 'react'
import { Avatar, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";
import { MenuOutlined, Close } from '@mui/icons-material';
import "../css/navigation.css";
import { Box } from '@mui/system';


const Navigation = () => {
    const {store, dispatch} = useGlobalState()
    const {loggedInUser} = store

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
                color: 'inherit',
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
                       
                        { loggedInUser &&  <li className="nav_option" onClick={closeMobileMenu}>
                            <Link className="nav_link"  id="purple" onClick={logout} to='/categories'>Logout</Link>
                        </li>}
                        { !loggedInUser &&  <li className="nav_option" onClick={closeMobileMenu}>
                            <Link className="nav_link" id="green" to='/login'>Login</Link>
                        </li>}      
                        {/* { loggedInUser &&  <li className="nav_option" onClick={closeMobileMenu}>
                            <Avatar {...stringAvatar(`${loggedInUser}`)}  />
                        </li>} */}
                </ul> 
            </nav>
            { loggedInUser &&  <Avatar className='nav_avatar' {...stringAvatar(`${loggedInUser}`)}  />}
        </Box>
                       
    )
}

export default Navigation
