import React, { useState } from 'react'
// import { AppBar, Toolbar, Typography, Tabs, Tab, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";
import { MenuOutlined, Close, Sports } from '@mui/icons-material';
import "../css/navigation.css";


const Navigation = () => {
    const {store, dispatch} = useGlobalState()
    const {loggedInUser} = store

    const [active, setActive] = useState(false)

    const showMenu = () => {
        setActive(!active)
    }
    
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
        dispatch({
            type: "setToken",
            data: null 
        })
      
        navigate("/categories")
    }
    return (
        <div className= "navbar">
            <div className='menu-icon'>
                {/* <MenuOutlined className="menu" /> */}
                <MenuOutlined className="menu" onClick={showMenu}/>
            </div>
            <nav className={active ? 'slider active' : 'slider'}>
                <ul className="slider_wrap">
                    <div className="closed">
                        {/* <Close className="close"/> */}
                        <Close className="close" onClick={showMenu}/>
                    </div>
                  
                        <li>
                            <Link to='/home'>Home</Link>
                        </li>
                        <li>
                            <Link to='/categories'>Activities</Link>
                        </li>
                        { loggedInUser && <li>
                            <Link to='/member'>Member</Link>
                        </li>}
                        <li>
                            <Link to='/contact'>Contact</Link>
                        </li>
                       
                        { loggedInUser &&  <li>
                            <Link className="purple" onClick={logout} to='/categories'>Logout</Link>
                        </li>}
                        { !loggedInUser &&  <li>
                            <Link className="green" to='/login'>Login</Link>
                        </li>}      
            
                </ul>
                
            </nav>

        </div>
                       
    )
}

export default Navigation
