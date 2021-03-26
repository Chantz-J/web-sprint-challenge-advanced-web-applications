import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../helpers/axiosWithAuth'
import axios from 'axios'

const Login = () => {
  const [form, setForm] = useState({username: '', password: ''})
  const [errors, setErrors] = useState('')
  useEffect(()=>{
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
    // axiosWithAuth()
    // This useeffect seems wonky to be honest? It crashes my app, and the handleSubmit functions works just fine??????
  });

  const handleChange = e => {
    const {name, value, checkbox} = e.target
    setForm({...form, [name]: value})
  }

  const { push } = useHistory()
  const handleSubmit = e => {
    e.preventDefault()
    axiosWithAuth() //Sends it with needed headers. Will return token if data matches database.
    .post(`/api/login`, form)
    .then(res => {
      console.log(res)
      localStorage.setItem("token", res.data.payload)
      push('/bubblepage')
    })
    .catch(err => {
      setErrors('Username or Password is invalid. Please try again.')
      console.error(`There was a problem with your login information: ${err}`)
    })
  }
  
  const error = errors;
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
      </div>
      <form onSubmit={handleSubmit}>
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