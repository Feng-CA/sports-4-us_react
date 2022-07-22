import React, {useEffect, useReducer} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Activities from './Activities';
import Contact from './Contact';
import LoginForm from './LoginForm';
import Navigation from './Navigation';
import Notfound from './NotFound';
import { reducer } from '../utils/reducer';
import { StateContext } from '../utils/stateContext';
import SignupForm from './SignupForm';
//import axios from 'axios'
import ActivityForm from './ActivityForm';
import IndividualActivity from './IndividualActivity';
import ActivityList from './ActivityList';
import { getActivities } from "../services/activityservices";
import { getUsers } from "../services/userservices";


const App = () => {
  const initialState = {
    loggedInUser: sessionStorage.getItem("full_name")||null,
    //activities: [],
    //users: []
    activities: JSON.parse(sessionStorage.getItem("activities"))||[],
    users: JSON.parse(sessionStorage.getItem("users"))||[]
  }

  useEffect(() => {  
   //Get all the activities from the back end
    getActivities()
    .then(response=>{
      sessionStorage.setItem("activities",JSON.stringify(response.data))
      console.log(response.data)
      dispatch({
        type: 'setActivities',
        data: response.data
    })
    })
    //Get all the Users from the back end
      getUsers()
    .then(response=>{  
      sessionStorage.setItem("users",JSON.stringify(response.data))
      dispatch({
        type: 'setUsers',
        data: response.data
    })
    }  )   
  },[]);

  const [store, dispatch] = useReducer(reducer, initialState)
  const {loggedInUser} = store
  return (
    <div className="App">
        <StateContext.Provider value={{store, dispatch}}>
        <Router>
						<Navigation />
              <Routes>
                <Route path="/" element={<Home replace/>} />
                <Route path="/home" element={<Home />} />
                <Route path="activities" element={<Activities/>}/> 
                <Route path="/activitylist" element={<ActivityList/>}/> {/*form to display all activities*/}
                <Route path="activity_form/:id" element={<ActivityForm/>}/>   {/*form to display activities as per category*/}    
                <Route path="IndividualActivity/:id" element={<IndividualActivity/>}/> {/*form to display details of an Individual Activity*/}
                <Route path="contact" element={<Contact />}/>        
                <Route path="login" element={<LoginForm />} />
                {!loggedInUser && <Route path="signup" element={<SignupForm />} />}
                <Route path="*" element={<Notfound />} />
              </Routes>
            </Router>
        </StateContext.Provider>	
    </div>
  )
}

export default App
