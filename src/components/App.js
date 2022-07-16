import React from 'react';
import Home from './Home';
import LoginForm from './LoginForm';
import Navigation from './Navigation';
import SignupForm from './SignupForm';


const App = () => {
  return (
    <>
          <Navigation />
      <div >
            <Home />
            <LoginForm />
            <SignupForm />
      </div>
    </>
  )
}

export default App
