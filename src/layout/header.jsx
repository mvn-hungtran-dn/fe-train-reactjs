import React, { useEffect, useState } from "react";
import logo from '../images/logo-poke.png';
import { AiOutlineHeart } from 'react-icons/ai';
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

export function Header () {
  let favorites = useSelector((state) => state.fav.favorites)
  const [isShake, setSake] = useState(false)

  useEffect(() => {
    if (favorites.length > 0) {
      setSake(true)
      setTimeout(() => {
        setSake(false)
      }, 500)
    }
  }, [favorites])

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
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </header>
  )
}
