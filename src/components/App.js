import React, { useEffect, useReducer} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Categories from './Categories';
import Contact from './Contact';
import LoginForm from './LoginForm';
import Navigation from './Navigation';
import Notfound from './NotFound';
import { reducer } from '../utils/reducer';
import { StateContext } from '../utils/stateContext';
import SignupForm from './SignupForm';
import FullActivityList from "./FullActivityList"
import CategoriedActivityList from './CategoriedActivityList';
import ActivityDetail from './ActivityDetail';
import ActivityForm from './ActivityForm';
import "../style.css";
import { getActivities } from "../services/activitiesServices";
import { getUsers } from "../services/usersServices";
import MessageForm from './MessageForm';
import Messages from './Messages';
import MessageDetail from './MessageDetail';


const App = () => {
  const initialState = {
    loggedInUser: sessionStorage.getItem("full_name") || null,
    activities: JSON.parse(sessionStorage.getItem("activities")) || [],
    users: JSON.parse(sessionStorage.getItem("users")) || []
  }

  useEffect(() => {
    //Get all the activities from the back end
    getActivities()
    .then(response => {
      sessionStorage.setItem("activities", JSON.stringify(response.data))
      console.log(response.data)
      dispatch({
        type: 'setActivities',
        data: response.data
    })
    })
    //Get all the users from the back end
    getUsers()
    .then(response => {
      sessionStorage.setItem("users", JSON.stringify(response.data))
      dispatch({
        type: 'setUsers',
        data: response.data
    })
    })   
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
                <Route path="categories" element={<Categories />}/>
                <Route path="categoriedlist/:id" element={<CategoriedActivityList />}/> {/* form to display activities as per category */}
                <Route path="activities">
                  <Route index element={<FullActivityList />}/> {/* form to display all activities */}
                  {/*<Route path=":id" element={<ActivityDetail />}/> */}{/* form to display details of an individual activity */}     
                  <Route path="new" element={
                    loggedInUser ?
                  <ActivityForm/>
                    :
                    <Navigate to="/" />
                    }/> {/* form to create details of an individual activity */}     
                 <Route path=":id" element={<ActivityDetail />}/>
                </Route>
                <Route path="messages">
                  <Route index element={<Messages />}/>
                  <Route path="new" element={
                    loggedInUser?
                      <MessageForm  />
                    :
                      <Navigate to="/login" />
                    } />
                  <Route path=":messageId" element={<MessageDetail />} />
                  <Route path="mymessages" element={<Messages />} />
                  <Route path="user/:username" element={<Messages />} />
                </Route>
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
