import React, { useEffect, useState } from 'react';
import  axios  from '../api/axios-config.js';
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";

export function Sidebar () {
  let location = useLocation()
  let query = useQuery()

  const [ sidebarState, setState ] = useState()
  const [ pokemon, setPokemon ] = useState({})

  useEffect(() => {
    window.addEventListener('openSidebar', () => {
      setState(true)
    })
    window.addEventListener('closeSidebar', () => {
      setState(false)
    })
  }, [])

  useEffect(async () => {
    const id = query.get('poke')
    const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    console.log(result.data);
    setPokemon(result.data)
  }, [location])

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  function closeSideBar () {
    setState(false)
  }

  return (
    <div className={`sidebar-container ${sidebarState ? 'open' : 'close'}`}>
      <div className="sidebar">
        <div className="head">
          <div className="image">
            <img src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} alt="pokemon"/>
          </div>
          <p className="name fw-bold text-center">{ pokemon.name }</p>
        </div>
        <div className="info">
          <div className="d-flex">
            <p className="fw-bold title">Height:</p>
            <p className="value">{ pokemon.height }m</p>
          </div>
          <div className="d-flex">
            <p className="fw-bold">Abilities:</p>
            <p className="value">{
              pokemon &&
              pokemon.abilities &&
              pokemon.abilities[0] &&
              pokemon.abilities[0].ability.name
            }</p>
          </div>
          <div className="d-flex">
            <p className="fw-bold">Type:</p>
            <div className="value">
              {
                pokemon &&
                pokemon.types &&
                pokemon.types.map(
                  (type, index) => <p className={`badge badge-light me-1 card__${type.type.name}`} key={index}>{type.type.name}</p>
                )
              }
            </div>
          </div>
        </div>
        <div className="stats">
        <p className="fw-bold">Stats:</p>
        <div>
          {
            pokemon && pokemon.stats && pokemon.stats.map((stat, index) => {
              return (
                <div key={index} className="progress">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{width: `${stat.base_stat}%`}}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              )
            })
          }
        </div>
      </div>
      </div>
      <div className="back-drop" onClick={closeSideBar}></div>
    </div>
  )
}
