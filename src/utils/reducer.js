export const reducer = (state, action) => {
    //console.log(state)
    //console.log(action)

    switch(action.type){
        
        case "setLoggedInUser": {
            //updates the loggedInUser value
            return {
                ...state,
                loggedInUser: action.data
            }
        }
        case "setActivities": {
            //updates the loggedInUser value
            return {
                ...state,
                activities: action.data
            }
        }

        case "setCategoryItem": {
            //updates the loggedInUser value
            return {
                ...state,
                categoryItem: action.data
            }
        }
        case "setUsers": {
            //updates the loggedInUser value
            return {
                ...state,
                users: action.data
            }
        }
       
        default: return state
    }

}