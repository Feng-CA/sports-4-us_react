import React, { useEffect, useReducer} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Categories from './Categories';
import Contact from './Contact';
import LoginForm from './LoginForm';
import Navigation from './Navigation';
import Notfound from './NotFound';
import { reducer } from '../utils/reducer';
import { StateContext } from '../utils/stateContext';
import axios from 'axios';
import SignupForm from './SignupForm';
import FullActivityList from "./FullActivityList"
import CategoriedActivityList from './CategoriedActivityList';
import ActivityDetail from './ActivityDetail';

const App = () => {
  const initialState = {
    loggedInUser: null,
    activities: [],
    users: [],
    categoryItem: 0

  }

  useEffect(() => {  
    axios.get('https://sports4us-api.herokuapp.com/activities')
    .then(response => {
      dispatch({
        type: 'setActivities',
        data: response.data
    })
    })
      
    axios.get('https://sports4us-api.herokuapp.com/users')
    .then(response => {
      dispatch({
        type: 'setUsers',
        data: response.data
    })
    })   
  },[]);

  const [store, dispatch] = useReducer(reducer, initialState)
  const {loggedInUser, users, activities} = store
  console.log(activities)
  console.log(users)
 
  return (
    <div className="App">
        <StateContext.Provider value={{store, dispatch}}>
        <Router>
						<Navigation />
              <Routes>
                <Route path="/" element={<Home replace/>} />
                <Route path="/home" element={<Home />} />
                <Route path="categories" element={<Categories />}/> 
                <Route path="activities" element={<FullActivityList />}/> 
                <Route path="categoriedlist/:id" element={<CategoriedActivityList />}/> 
                <Route path="activities/:id" element={<ActivityDetail />}/>       
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
