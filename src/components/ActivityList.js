import { useGlobalState } from "../utils/stateContext"
import { useParams } from "react-router-dom"
//import Card from '@mui/material/Card';
import {useNavigate } from "react-router-dom"


const ActivityList = () => {
    const {store} = useGlobalState()
    const {activities} = store
    const params = useParams();
    const navigate = useNavigate()
    console.log(typeof(params.id))

    const clickHandler =(e) =>{
        console.log(e)
        console.log(e.target.value)
        navigate(`/IndividualActivity/${Number(e.target.value)}`)
      }


    return ( 
        <ul>      
            {activities.map((activity)=>
            <li><button value={activity.id} onClick={(e)=>clickHandler(e)}>{activity.title}</button></li> )}    
        </ul>
     );
}
 
export default ActivityList;