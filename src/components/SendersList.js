import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { useState } from "react";
import { ExpandLess} from "@mui/icons-material";
import { ExpandMore } from "@mui/icons-material";
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import { useGlobalState } from "../utils/stateContext";
const SendersList = () => {
    const {store, dispatch} = useGlobalState()
    const { users, receiverId } = store
    const [open, setOpen] = useState(false)
  
    let newUsersList
     if(typeof(users) === "string") {
        newUsersList = JSON.parse(users)
      } else {
        newUsersList = users
      }

    const handleClick = () => {
        setOpen(!open);
        console.log("You have clicked")
      }

      const senderClick = (e) => {

        dispatch({
          type: "setReceiverId",
          data: (users.find((x)=>x.full_name===e.target.outerText)).id
        })
        setOpen(!open);
      }

    return ( 
    <>
    <ListItemButton onClick={handleClick}>
                    <ListItemIcon className="sidebarListItem">
                      <PeopleIcon className="sidebarIcon" />
                    </ListItemIcon>
                    {receiverId?
                    <ListItemText primary={(users.find((user)=>user.id===receiverId)).full_name}/>
                    :<ListItemText primary="Message List"/>}
                    {open? <ExpandLess/> : <ExpandMore/>}
    </ListItemButton>
    
    <Collapse in={open} timeout="auto" unmountOnExit>
    
                <>
                {newUsersList.map(user =>(
                <List component="div" disablePadding>
                   
                      <ListItemButton sx={{ pl: 4 }} value ={user.id} onClick={(e)=>senderClick(e)}>
                        <ListItemIcon>
                          <PersonIcon/>
                        </ListItemIcon>
                        <ListItemText primary={user.full_name} />
                      </ListItemButton>
                    
                  </List>
                    ))}
                </>
                 
    </Collapse>

    </> );
}
 
export default SendersList;