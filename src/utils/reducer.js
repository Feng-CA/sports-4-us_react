export const reducer = (state, action) => {
    //console.log(state)
    //console.log(action)

    switch(action.type){
        
        case "setSelectedCategory": {
            //updates the category value
            return {
                ...state,
                selectedCategory: action.data
            }
        }
        case "setLoggedInUser": {
            //updates the loggedInUser value
            return {
                ...state,
                loggedInUser: action.data
            }
        }
       
        default: return state
    }

}