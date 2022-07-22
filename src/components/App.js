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
import axios from 'axios'
import ActivityForm from './ActivityForm';
import IndividualActivity from './IndividualActivity';
import ActivityList from './ActivityList';

const App = () => {
  const initialState = {
    loggedInUser: sessionStorage.getItem("first_name")||null,
    activities: [],
    users: [],
    categoryItem: 0

  }
  useEffect(() => {  
    axios.get('https://sports4us-api.herokuapp.com/activities')
    .then(response=>{
      dispatch({
        type: 'setActivities',
        data: response.data
    })
    }  
      )
      axios.get('https://sports4us-api.herokuapp.com/users')
    .then(response=>{
      dispatch({
        type: 'setUsers',
        data: response.data
    })
    }  )   
  },[]);

  const [store, dispatch] = useReducer(reducer, initialState)
  const {loggedInUser, users} = store
  console.log(users)
  return (
    <div className="App">
        <StateContext.Provider value={{store, dispatch}}>
        <Router>
						<Navigation />
              <Routes>
                <Route path="/" element={<Home replace/>} />
                <Route path="/home" element={<Home />} />
                <Route path="activities" element={<Activities/>}/> 
                <Route path="/activitylist" element={<ActivityList/>}/>
                <Route path="activity_form/:id" element={<ActivityForm/>}/>       
                <Route path="IndividualActivity/:id" element={<IndividualActivity/>}/>
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
