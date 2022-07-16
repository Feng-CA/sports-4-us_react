import React, {useReducer} from 'react';
import Home from './Home';
import LoginForm from './LoginForm';
import Navigation from './Navigation';
import { reducer } from '../utils/reducer'
import { StateContext } from '../utils/stateContext'

const App = () => {
  const initialState = {
    
    loggedInUser: null
  }

  const [store] = useReducer(reducer, initialState)
  const {loggedInUser} = store
  return (
    <div>
      <StateContext.Provider value={{store}}>
          <div >
            <Navigation />
            <Home />
            {!loggedInUser && <LoginForm />}
          </div>
      </StateContext.Provider>
    </div>
  )
}

export default App
