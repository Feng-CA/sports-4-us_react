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
import { Box, List, Typography } from "@mui/material";


const Sidebar = () => {
    return (
      <Container className="sidebar" >
        <Box className="sidebarWrapper">
          <Box className="sidebarMenu">
            <Typography variant="h6" className="sidebarTitle">Dashboard</Typography>
            <List className="sidebarList">
              <Link to="/member" className="dashboard_link">
                <li className="sidebarListItem active">
                    <LineStyleIcon className="sidebarIcon" />
                    My Panel
                </li>
              </Link>
              <Link to="/member/profile" className="dashboard_link">
                <li className="sidebarListItem">
                    <PermIdentifyIcon className="sidebarIcon" />
                    My Profile
                </li>
              </Link>
              <li className="sidebarListItem">
                <TimelineIcon className="sidebarIcon" />
                My Activities
              </li>
            </List>
          </Box>
          <Box className="sidebarMenu">
            <Typography variant="h6" className="sidebarTitle">All Members</Typography>
            <ul className="sidebarList">
              <Link to="/member/profiles" className="link">
                <li className="sidebarListItem">
                  <PeopleOutlineIcon className="sidebarIcon" />
                  Members profile
                </li>
              </Link>
            </ul>
          </Box>
          <Box className="sidebarMenu">
            <Typography variant="h6" className="sidebarTitle">Message Board</Typography>
            <List className="sidebarList">
                <Link to="/messages/mymessage" className="link">
                    <li className="sidebarListItem">
                        <DynamicFeedIcon className="sidebarIcon" />
                        Inbox
                    </li>
                </Link>
                <Link to="/messages/channel" className="link">
                    <li className="sidebarListItem">
                        <MailOutlineIcon className="sidebarIcon" />
                        Message Channel
                    </li>
                </Link>
                <Link to="/messages/direct" className="link">
                    <li className="sidebarListItem">
                        <ChatBubbleOutlineIcon className="sidebarIcon" />
                        Direct Message
                    </li>
                </Link>
            </List>
          </Box>
        </Box>
      </Container>
    );
  }
  
  export default Sidebar;