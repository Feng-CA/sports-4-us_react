import Activities from "../data/activitiesList.json"
import Activity from "./Activity";
// import { useGlobalState } from "../utils/stateContext";

const ActivitiesList = () => {
    // const {store} = useGlobalState()
    // const {selectedCategory} = store

    // const filteredList = () => {
    //     return ActivitiesList.filter((activity) => activity.category === selectedCategory)
    // }   

    return (

        <div>
           {/* <p>activity list</p> */}
            {/* {filteredList.map((activity)=> {
                <Activity key={activity.id} activity={activity} />
            })} */}
            {Activities.map((activity) => (
                <Activity key={activity.id} activity={activity} />
            ))}
        
        </div>
    )
}

export default ActivitiesList