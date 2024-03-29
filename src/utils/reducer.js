export const reducer = (state, action) => {
    
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
        case "setMemberActivities": {
            //updates the member activities value
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
        case "setReceivedMessagelist": {
            //updates the messages array
          
            return {
                ...state,
                ReceivedmessageList: action.data
            }
        }

        case "setSentMessagelist": {
            //updates the sent messages array
            
            return {
                ...state,
                sentMessageList: action.data
            }
        }

        case "setChannelMessageList": {
            //updates the messages array
        
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

        case "setBookingsList": {
            //sets Messaging Channel id
            return {
                ...state,
                bookingsList: action.data
            }
        }

        

        default: return state
    }

}