import React from 'react'
import { Redirect } from 'react-router-dom'
import { getAnonymousToken } from '../../Api'
import './splash.scss'

const Splash = ({ redirect, addToken, addRedirect }) => {

  const handleSubmit = async (e) => {
    let result = await getAnonymousToken()
    addToken(result.data)
    addRedirect(true)
  }

  return (
    <div className="splash">
    {redirect ? <Redirect to="/home" /> : ''}
      <h1 className="splash__title">Hello! This is a super cool OTM player</h1>
      <p className="splash__description">To use watch our videos you have to sign in as anonymous or sign in with your existing account</p>
      <button
        type="button"
        className="splash__btn"
        onClick={
          (e) => (handleSubmit(e))
        }
      >
        Sign in as anonymous
      </button>
    </div>
  )
}

export default Splash;
