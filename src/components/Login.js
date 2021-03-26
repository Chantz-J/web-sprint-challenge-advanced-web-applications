import React, { useState, useEffect } from "react";

const Login = () => {
  const [form, setForm] = useState({username: '', password: ''})
  useEffect(()=>{
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
  });

  const handleChange = e => {
    const {name, value, checkbox} = e.target
    setForm({...form, [name]: value})
  }
  const handleSubmit = e => {
    e.preventDefault()
  }
  
  const error = "";
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
      </div>
      <form>
        <input 
        type='text' 
        name="username" 
        value={form.username}
        onChange={handleChange}
        data-testid="username"/>
        <input 
        type='text' 
        name="password" 
        value={form.password}
        onChange={handleChange}
        data-testid="password"/>
        <button>Login</button>
      </form>
      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.