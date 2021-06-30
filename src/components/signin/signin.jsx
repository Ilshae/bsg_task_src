import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { signInUser } from '../../Api'
import './signin.scss'

const SignIn = ({ addToken, }) => {
  const [username, setUsername ] = useState('');
  const [password, setPassword ] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await signInUser(username, password)
    addToken(result.data)
  }

  return (
    <>
    <form
      onSubmit={handleSubmit}
      className="signin__form"
      method="POST"
    >
    <div className="signin__input">
      <label className="signin__input__label" htmlFor="username" required>Username:</label>
      <input type="test" name="username" value={username} onChange={({target}) => setUsername(target.value)} required/>
    </div>

    <div className="signin__input">    
      <label className="signin__input__label" htmlFor="password">Password:</label>
      <input type="password" name="password" value={password} onChange={({target}) => setPassword(target.value)} required />
    </div>

    <button type="submit" className="signin__submit" >
      Sign Up
    </button>
  </form>
  </>
  )
}

export default SignIn