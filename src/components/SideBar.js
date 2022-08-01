import { useState } from "react";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import PermIdentifyIcon from "@mui/icons-material/PermIdentity";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import { Link} from "react-router-dom";
import { Container } from "@mui/system";
import { useGlobalState } from "../utils/stateContext";
import '../css/sidebar.css'
import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { ExpandLess, StarBorder } from "@mui/icons-material";
import { ExpandMore } from "@mui/icons-material";
import SendIcon from '@mui/icons-material/Send';


const Sidebar = () => {
    const {store,dispatch} = useGlobalState()
    const { loggedInUser, profiles } = store
    const [open, setOpen] = useState(false)
    const channels = ["General", "Cycling", "Golf", "Tennis", "Soccer", "Hiking", "Cricket", "Running", "Basketball"]

    //const navigate = useNavigate
    console.log(profiles)
    // get loggedInUser profile
    let newProfiles;
   
        if(typeof(profiles) === "string") {
            newProfiles = JSON.parse(profiles)
        } else {
            newProfiles = profiles
        }
    
    const profile = newProfiles.find(profile => profile.fullname === loggedInUser)
   
    // sets loggedInAdmin value
    const adminProfile = newProfiles.find(profile => profile.isAdmin === true)
  
    let loggedInAdmin;
    if (adminProfile.fullname === loggedInUser) {
        loggedInAdmin = adminProfile.fullname
    } else {
        loggedInAdmin = null
    }


    const handleClick = () => {
      setOpen(!open);
    }

    const handleChanelClick = (e)=>{
        console.log(channels.indexOf(e.target.outerText))
        sessionStorage.setItem("messagingChannelId",(channels.indexOf(e.target.outerText)+1) )
        dispatch({
          type: 'setMessagingChannelId',
          data: (channels.indexOf(e.target.outerText)+1)
        })
    }

    return (
      <Container className="sidebar" >
        <Box className="sidebarWrapper">
          <Box className="sidebarMenu">
            <Typography variant="h6" className="sidebarTitle">Dashboard</Typography>
            <List className="sidebarList">
              <Link to="/member/dashboard" className="dashboard_link">
                <ListItemButton>
                  <ListItemIcon className="sidebarListItem active">
                    <LineStyleIcon className="sidebarIcon" />  
                  </ListItemIcon>
                  <ListItemText primary="Panel"/>
                </ListItemButton>
              </Link>
              <Link to={`/member/profiles/${profile.id}`} className="dashboard_link">
                <ListItemButton>
                  <ListItemIcon className="sidebarListItem">
                    <PermIdentifyIcon className="sidebarIcon" />
                  </ListItemIcon>
                  <ListItemText primary="My Profile"/>
                </ListItemButton>
              </Link>
              { loggedInAdmin ?
              <Link to="/activities/new" className="dashboard_link">
                <ListItemButton>
                  <ListItemIcon className="sidebarListItem">
                    <TimelineIcon className="sidebarIcon" />
                  </ListItemIcon>
                  <ListItemText primary="Create Activities"/>
                </ListItemButton>
              </Link>
              :
              <Link to="/activities" className="dashboard_link">
                <ListItemButton>
                  <ListItemIcon className="sidebarListItem">
                    <TimelineIcon className="sidebarIcon" />
                  </ListItemIcon>
                  <ListItemText primary="My Activities"/>
                </ListItemButton>
              </Link>
              }
            </List>
          </Box>
          <Box className="sidebarMenu">
            <Typography variant="h6" className="sidebarTitle">All Members</Typography>
            <List className="sidebarList">
              <Link to="/member/profiles" className="link">
                <ListItemButton>
                  <ListItemIcon className="sidebarListItem">
                    <PeopleOutlineIcon className="sidebarIcon" />
                  </ListItemIcon>
                  <ListItemText primary="Member Profiles"/>
                </ListItemButton>
              </Link>
            </List>
          </Box>
          <Box className="sidebarMenu">
            <Typography variant="h6" className="sidebarTitle">Message Board</Typography>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon className="sidebarListItem">
                      <MailOutlineIcon className="sidebarIcon" />
                    </ListItemIcon>
                    <ListItemText primary="Channels"/>
                    {open? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>

                  <List component="div" disablePadding>
                    <Link to="/messages/channelmessages" className="link">
                      <ListItemButton sx={{ pl: 4 }} value = "8" onClick={(e)=>handleChanelClick(e)}>
                        <ListItemIcon>
                          <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="General" />
                      </ListItemButton>
                    </Link>
                  </List>

                  <List component="div" disablePadding>
                  <Link to="/messages/channelmessages" className="link">
                    <ListItemButton sx={{ pl: 4 }} onClick={(e)=>handleChanelClick(e)}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Cycling" />
                    </ListItemButton>
                    </Link>
                  </List>

                  <List component="div" disablePadding>
                  <Link to="/messages/channelmessages" className="link">
                  <ListItemButton sx={{ pl: 4 }} onClick={(e)=>handleChanelClick(e)}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Golf" />
                    </ListItemButton>
                    </Link>
                  </List>
                  <List component="div" disablePadding>
                  <Link to="/messages/channelmessages" className="link">
                  <ListItemButton sx={{ pl: 4 }} onClick={(e)=>handleChanelClick(e)}>
                  <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Tennis" />
                    </ListItemButton>
                    </Link>
                  </List>

                  <List component="div" disablePadding>
                  <Link to="/messages/channelmessages" className="link">
                    <ListItemButton sx={{ pl: 4 }} onClick={(e)=>handleChanelClick(e)}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Soccer" />
                    </ListItemButton>
                    </Link>
                  </List>

                  <List component="div" disablePadding>
                  <Link to="/messages/channelmessages" className="link">
                    <ListItemButton sx={{ pl: 4 }} onClick={(e)=>handleChanelClick(e)}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Hiking" />
                    </ListItemButton>
                    </Link>
                  </List>

                  <List component="div" disablePadding>
                  <Link to="/messages/channelmessages" className="link">
                    <ListItemButton sx={{ pl: 4 }} onClick={(e)=>handleChanelClick(e)}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Cricket" />
                    </ListItemButton>
                    </Link>
                  </List>

                  <List component="div" disablePadding>
                  <Link to="/messages/channelmessages" className="link">
                    <ListItemButton sx={{ pl: 4 }} onClick={(e)=>handleChanelClick(e)}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Running" />
                    </ListItemButton>
                    </Link>
                  </List>

                  <List component="div" disablePadding>
                  <Link to="/messages/channelmessages" className="link">
                    <ListItemButton sx={{ pl: 4 }} onClick={(e)=>handleChanelClick(e)}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Basketball" />
                    </ListItemButton>
                    </Link>
                  </List>

                </Collapse>
                <List className="sidebarList">
                <Link to="/messages" className="link">
                  <ListItemButton>
                    <ListItemIcon className="sidebarListItem">
                      <DynamicFeedIcon className="sidebarIcon" />
                    </ListItemIcon>
                    <ListItemText primary="Inbox"/>
                  </ListItemButton>
                </Link>

                <Link to="/messages/sentmessages" className="link">
                  <ListItemButton>
                      <ListItemIcon className="sidebarListItem">
                        <SendIcon className="sidebarIcon" /> 
                      </ListItemIcon>
                      <ListItemText primary="Sent Messages"/>
                    </ListItemButton>
                </Link>
                <Link to="/messages/new" className="link">
                  <ListItemButton>
                      <ListItemIcon className="sidebarListItem">
                        <ChatBubbleOutlineIcon className="sidebarIcon" /> 
                      </ListItemIcon>
                      <ListItemText primary="Direct Message"/>
                    </ListItemButton>
                </Link>
              
                
            </List>
          </Box>
        </Box>
      </Container>
    );
  }
  
  export default Sidebar;