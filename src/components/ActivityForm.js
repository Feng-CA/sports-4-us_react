import { useGlobalState } from "../utils/stateContext"
import { useParams } from "react-router-dom"
import {useNavigate } from "react-router-dom"
//This form lists all the activities in a particular sporting category
//By clicking each category you can also navigate to the individual category page.
const ActivityForm = () => {
    const {store} = useGlobalState()
    const {activities} = store
    console.log(store)
    const params = useParams();
    const navigate = useNavigate()
    //Clickhandler can navigate to the individual category page.
    //e.target.value will provide the activity Id number to access details of the activity.
    const clickHandler =(e) =>{
        navigate(`/IndividualActivity/${Number(e.target.value)}`)
      }
    return ( 
        <ul>          
          {activities.map((activity)=>(activity.category_id===Number(params.id))&&
          <li><button value={activity.id} onClick ={(e)=>clickHandler(e)}>{activity.title}</button></li>
          )}        
        </ul>
     );
}
 
export default ActivityForm;