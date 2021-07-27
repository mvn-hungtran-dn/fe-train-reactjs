import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export function Login () {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  let history = useHistory();

  function submit (event) {
    event.preventDefault()
    localStorage.setItem('userName', userName)
    history.push('/')
  }

  return (
    <div className="page-login container">
      <form action="" className="text-center mt-4 w-50 mx-auto">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="form-control mb-3"
          placeholder="User Name"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control mb-3"
          placeholder="Password"
        />
        <button
          onClick={submit}
          className="btn btn-primary btn-lg"
          type="submit"
        >Login</button>
      </form>
    </div>
  )
}
