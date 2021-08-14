import React, { useEffect, useState } from "react";
import logo from '../images/logo-poke.png';
import { AiOutlineHeart } from 'react-icons/ai';
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

export function Header () {
  let location = useLocation()
  let favorites = useSelector((state) => state.fav.favorites)

  const [isShake, setSake] = useState(false)
  const [isLogin, setLoginState] = useState(!!localStorage.getItem('token'))
  const [isShowHeader, setShowHeader] = useState(true)

  useEffect(() => {
    if (favorites.length > 0) {
      setSake(true)
      setTimeout(() => {
        setSake(false)
      }, 500)
    }
  }, [favorites])

  useEffect(() => {
    console.log('?')
    if (location.pathname === '/login') {
      setShowHeader(false)
    } else {
      setShowHeader(true)
    }
  }, [location])

  function logout () {
    localStorage.removeItem('token')
    setLoginState(false)
  }

  function headerUI () {
    return (
      <header className="header nav container">
        <div className="logo">
          <img
            src={logo}
            width="80"
          />
        </div>
        <ul className="menu menu-right">
          <li className={`menu-item ${isShake ? 'shake' : ''}`}>
            <AiOutlineHeart className="icon" />
            { favorites.length ? <p className="fav-count">{favorites.length}</p> : '' }
          </li>
          <li className="menu-item login">
            {
              isLogin ? <p onClick={logout}>Logout</p> : <Link to="/login">Login</Link>
            }
          </li>
        </ul>
      </header>
    )
  }

  return (
    isShowHeader ? headerUI() : ''
  )
}
