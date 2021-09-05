import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import logoGoogle from '../images/logo-google.png';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


export function Login () {
  const [ userName, setUserName ] = useState('')
  const [ password, setPassword ] = useState('')
  let history = useHistory()

  const start = new Event('loadingStart')
  const finish = new Event('loadingFinish')

  const auth = getAuth()
  const provider = new GoogleAuthProvider()

  function login (e) {
    e.preventDefault()
    window.dispatchEvent(start)
    setTimeout(() => {
      if (password === 'anhyeuem123' && userName === 'hung') {
        localStorage.setItem('token', new Date().getTime())
        history.push('/')
      }
      window.dispatchEvent(finish)
      return
    }, 1000)
  }

  function loginWithGoogle () {
    window.dispatchEvent(start)
    signInWithPopup(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // const user = result.user;
      localStorage.setItem('token', token)
      // console.log(result.user.uid)
      localStorage.setItem('userId', result.user.uid)
      history.push('/')
    }).finally(() => {
      window.dispatchEvent(finish)
    })
  }

  return (
    <div className="page-login">
      <form className="form mx-auto text-center">
        <div className="mb-3">
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            name="userName"
            className="input w-100"
            placeholder="User Name"
            type="text"
          />
        </div>
        <div className="mb-3">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            className="input w-100"
            placeholder="Password"
            type="password"
          />
        </div>
        <button onClick={login} className="button" type="button">Sign in</button>
        <div className="pt-2">
          <button onClick={loginWithGoogle} className="button button-google" type="button">
            <div className="wrap-img">
              <img src={logoGoogle} alt=""/>
            </div>
            <p className="text p-0">Sign in with Google</p>
          </button>
        </div>
      </form>
    </div>
  )
}
