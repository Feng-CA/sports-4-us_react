import React from 'react';
import Home from './Home';
import LoginForm from './LoginForm';
import Navigation from './Navigation';


const App = () => {
  return (
    <>
          <Navigation />
      <div >
            <Home />
            <LoginForm />
      </div>
    </>
  )
}

export default App
