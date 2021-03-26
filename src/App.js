import React, { useState } from "react";
import { useHistory, BrowserRouter as Router, Route } from "react-router-dom";

import BubblePage from './components/BubblePage'
import PrivateRoute from './components/PrivateRoute'

import Login from "./components/Login";
import "./styles.scss";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  

    const logout = () => {
        localStorage.removeItem('token')
        setLoggedIn(!loggedIn)
        console.log('Successfully logged out.')
        
    }

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" onClick={() => logout()}>logout</a>
        </header> 

        <Route exact path="/" component={Login} />
        <PrivateRoute path="/bubblepage" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.