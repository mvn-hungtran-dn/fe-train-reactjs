import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export function Login () {
  const [ userName, setUserName ] = useState('')
  const [ password, setPassword ] = useState('')
  let history = useHistory();

  function login (e) {
    e.preventDefault()
    const start = new Event('loadingStart')
    const finish = new Event('loadingFinish')

    window.dispatchEvent(start)
    setTimeout(() => {
      if (password === 'anhyeumem123' && userName === 'hung') {
        localStorage.setItem('token', new Date().getTime())
        history.push('/')
      }
      window.dispatchEvent(finish)
      return
    }, 1000)
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
        <button onClick={login} className="button" type="button">Login</button>
      </form>
    </div>
  )
}
