import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useState } from "react";
import { ExpandLess} from "@mui/icons-material";
import { ExpandMore } from "@mui/icons-material";
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import { useGlobalState } from "../utils/stateContext";
const ChannelsList = () => {
    const {store, dispatch} = useGlobalState()
    const { messagingChannelId } = store
    const [open, setOpen] = useState(false)
    const channels = ["General", "Cycling", "Golf", "Tennis", "Soccer", "Hiking", "Cricket", "Running", "Basketball"]

    const handleClick = () => {
        setOpen(!open);
        console.log("You have clicked")
      }

      const senderClick = (e) => {
          dispatch({
            type: "setMessagingChannelId",
            data: (channels.indexOf(e.target.outerText)+1)
          })        
          setOpen(!open);
      }

    return ( 
    <>
    <ListItemButton onClick={handleClick}>
                    <ListItemIcon className="sidebarListItem">
                      <PeopleIcon className="sidebarIcon" />
                    </ListItemIcon>
                    <ListItemText primary={channels[messagingChannelId-1]}/>
                    {open? <ExpandLess/> : <ExpandMore/>}
    </ListItemButton>
    
    <Collapse in={open} timeout="auto" unmountOnExit>
    
                <>
                {channels.map(channel =>(
                <List component="div" disablePadding>
                   
                      <ListItemButton sx={{ pl: 4 }} onClick={(e)=>senderClick(e)}>
                        <ListItemIcon>
                          <PersonIcon/>
                        </ListItemIcon>
                        <ListItemText primary={channel} />
                      </ListItemButton>
                    
                  </List>
                    ))}
                </>
                 
    </Collapse>

    </> );
}
 
export default ChannelsList;