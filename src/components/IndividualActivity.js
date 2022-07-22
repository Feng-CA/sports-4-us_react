import { useParams } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext"
import categories from "../data/categoryList.json";

const IndividualActivity = () => {
    const {store} = useGlobalState()
    const {activities, users} = store
    const params = useParams();
    
    return ( 
            <ul>
                <li>
                    Activity Id: {activities[Number(params.id-1)].id}  
                </li>
                <li>
                    Activity Category: {categories[Number(activities[Number(params.id-1)].category_id)-1].name}
                </li>
                <li>
                    Activity Title: {activities[Number(params.id-1)].title}
                </li>
                <li>
                    Activity Description: {activities[Number(params.id-1)].description}
                </li>
                <li>
                    Activity Date: {activities[Number(params.id-1)].date_time}
                </li>
                <li>
                    Activity Organiser: {`${users[Number(activities[Number(params.id-1)].user_id)-1].full_name}`}
                </li>

            </ul>
     );
}
 
export default IndividualActivity;