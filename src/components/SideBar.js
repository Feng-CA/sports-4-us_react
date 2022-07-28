import { useState } from "react";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import PermIdentifyIcon from "@mui/icons-material/PermIdentity";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import { Link } from "react-router-dom";
import { Container } from "@mui/system";
import '../css/sidebar.css'
import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { ExpandLess, StarBorder } from "@mui/icons-material";
import { ExpandMore } from "@mui/icons-material";


const Sidebar = () => {
    const [open, setOpen] = useState()

    const handleClick = () => {
      setOpen(!open);
    }

    return (
      <Container className="sidebar" >
        <Box className="sidebarWrapper">
          <Box className="sidebarMenu">
            <Typography variant="h6" className="sidebarTitle">Dashboard</Typography>
            <List className="sidebarList">
              <Link to="/member" className="dashboard_link">
                <ListItemButton>
                  <ListItemIcon className="sidebarListItem active">
                    <LineStyleIcon className="sidebarIcon" />  
                  </ListItemIcon>
                  <ListItemText primary="Panel"/>
                </ListItemButton>
              </Link>
              <Link to="/member/profile" className="dashboard_link">
                <ListItemButton>
                  <ListItemIcon className="sidebarListItem">
                    <PermIdentifyIcon className="sidebarIcon" />
                  </ListItemIcon>
                  <ListItemText primary="Profile"/>
                </ListItemButton>
              </Link>
              <Link to="/activities" className="dashboard_link">
                <ListItemButton>
                  <ListItemIcon className="sidebarListItem">
                    <TimelineIcon className="sidebarIcon" />
                  </ListItemIcon>
                  <ListItemText primary="Activities"/>
                </ListItemButton>
              </Link>
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
                  <ListItemText primary="Profiles"/>
                </ListItemButton>
              </Link>
            </List>
          </Box>
          <Box className="sidebarMenu">
            <Typography variant="h6" className="sidebarTitle">Message Board</Typography>
            <List className="sidebarList">
                <Link to="/messages/myinbox" className="link">
                  <ListItemButton>
                    <ListItemIcon className="sidebarListItem">
                      <DynamicFeedIcon className="sidebarIcon" />
                    </ListItemIcon>
                    <ListItemText primary="Inbox"/>
                  </ListItemButton>
                </Link>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon className="sidebarListItem">
                      <MailOutlineIcon className="sidebarIcon" />
                    </ListItemIcon>
                    <ListItemText primary="Channels"/>
                    {open? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="General" />
                    </ListItemButton>
                  </List>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Cycling" />
                    </ListItemButton>
                  </List>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Golf" />
                    </ListItemButton>
                  </List>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Tennis" />
                    </ListItemButton>
                  </List>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Soccer" />
                    </ListItemButton>
                  </List>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Hiking" />
                    </ListItemButton>
                  </List>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Cricket" />
                    </ListItemButton>
                  </List>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Running" />
                    </ListItemButton>
                  </List>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary="Basketball" />
                    </ListItemButton>
                  </List>
                </Collapse>
              
                <Link to="/messages/direct" className="link">
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