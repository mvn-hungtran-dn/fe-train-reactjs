import React, { useEffect, useState } from "react";

import logo from '../images/logo-poke.png';
import { AiOutlineHeart } from 'react-icons/ai';
import { useSelector } from 'react-redux'
import {
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
    if (location.pathname === '/login') {
      setShowHeader(false)
    } else {
      setShowHeader(true)
    }

    if (localStorage.getItem('token')) {
      setLoginState(true)
    } else {
      setLoginState(false)
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
          <a href="/">
            <img
              src={logo}
              width="80"
              alt="logo"
            />
          </a>
        </div>
        <ul className="menu menu-right">
          <li className={`menu-item ${isShake ? 'shake' : ''}`}>
            <Link to="/favorite">
              <AiOutlineHeart className="icon" />
              { favorites.length ? <p className="fav-count">{favorites.length}</p> : '' }
            </Link>
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
