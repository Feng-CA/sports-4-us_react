import { useNavigate, useParams } from "react-router-dom";
// import Card from "@mui/material/Card"
// import Activities from "../data/activitiesList.json"
// import Activity from "./Activity";
import { useGlobalState } from "../utils/stateContext";

const CategoriedActivityList = () => {
    const {store} = useGlobalState()
    const {activities} = store
    const params = useParams
    const navigate = useNavigate()
    console.log(params.id) 

    const handleClick = (e) => {
        console.log(e.target.value)
        navigate(`/categoriedlist/${Number(e.target.value)}`)
    }

    return (
        <ul>          
            {activities.map((activity) => (activity.category_id === Number(params.id))&&
            <li><button value={activity.id} onClick ={(e)=>handleClick(e)}>{activity.title}</button></li>
            )}        
       </ul>

        // <div>
          
        //     {Activities.map((activity) => (activity.category_id === Number(params.id))&&
        //     <Card onClick = {(e) => handleClick(e)}>
        //         <Activity key={activity.id} activity={activity} />
        //     </Card>
        //     )}
        
        // </div>
    )
}

export default CategoriedActivityList