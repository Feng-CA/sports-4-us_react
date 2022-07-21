import React, {useReducer} from 'react';
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
import ActivitiesList from "./ActivitiesList"
import ActivityDetail from './ActivityDetail';

const App = () => {
  const initialState = {
    selectedCategory: null,
    loggedInUser: null
  }

  const [store, dispatch] = useReducer(reducer, initialState)
  const {selectedCategory, loggedInUser} = store
  return (
    <div className="App">
        <StateContext.Provider value={{store, dispatch}}>
        <Router>
						<Navigation />
              <Routes>
                <Route path="/" element={<Home replace/>} />
                <Route path="/home" element={<Home />} />
                <Route path="activities" element={<Activities />}/> 
                <Route path="activitieslist" element={<ActivitiesList />}/> 
                {/* <Route path="activityId" element={<ActivityDetail />}/>        */}
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
