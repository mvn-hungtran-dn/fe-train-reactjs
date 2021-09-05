import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import axios  from '../api/axios-config.js';
import { removeFav } from '../store/fav.js'

export function Fav () {
  let favorites = useSelector((state) => state.fav.favorites)
  const [ pokemons, setPokemon ] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    function getPokemon () {
      return Promise.all(
        favorites.map((id) =>
          handApi(`https://pokeapi.co/api/v2/pokemon/${id}`)
        )
      ).then((res) => {
        setPokemon(res)
      })
    }
    getPokemon()
  }, [favorites])

  async function handApi (url) {
    const result = await axios.get(url)
    return result.data
  }

  function onRemoveFav (id) {
    dispatch(removeFav({favorites, id}))
  }

  return (
    <div className="page-fav container">
      <ul className="list-fav row">
        {
          pokemons.map((item, index) => (
            <li className="col-6" key={index}>
              <div className="item-fav">
                <img
                  src={ `https://img.pokemondb.net/artwork/large/${item.name}.jpg`}
                  alt="pokemon"
                />
                <p className="name">{item.name}</p>
                <AiOutlineCloseCircle onClick={() => onRemoveFav(item.id)} className="icon" />
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
