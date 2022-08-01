export const reducer = (state, action) => {
    console.log(state, action.type, action.data)
    switch(action.type){
        
        case "setLoggedInUser": {
            //updates the loggedInUser value
            return {
                ...state,
                loggedInUser: action.data
            }
        }
        case "setLoggedAdmin": {
            //updates the loggedInAdmin value
            return {
                ...state,
                loggedInUser: action.data
            }
        }
        case "setActivities": {
            //updates the activities value
            return {
                ...state,
                activities: action.data
            }
        }
        case "setUsers": {
            //updates the users value
            return {
                ...state,
                users: action.data
            }
        }
        case "setProfiles": {
            //updates the users value
            return {
                ...state,
                profiles: action.data
            }
        }
        case "setToken": {
            //updates the token value
            return {
                ...state,
                token: action.data
            }
        }
        case "setMessagelist": {
            //updates the messages array
            console.log("it was here")
            return {
                ...state,
                messageList: action.data
            }
        }

        case "setSentMessagelist": {
            //updates the sent messages array
            console.log("it was in setSentMessagelist")
            return {
                ...state,
                sentMessageList: action.data
            }
        }

        case "setChannelMessageList": {
            //updates the messages array
            console.log("it was in setChannelMessageList")
            return {
                ...state,
                channelMessageList: action.data
            }
        }

        case "setReceiverId": {
            //updates the messages array
            return {
                ...state,
                receiverId: action.data
            }
        }

        case "setMessagingChannelId": {
            //sets Messaging Channel id
            return {
                ...state,
                messagingChannelId: action.data
            }
        }

        

        default: return state
    }

}