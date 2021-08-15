import React, { useEffect, useState } from 'react';
import  axios  from '../api/axios-config.js';
import { useSelector, useDispatch } from 'react-redux'
import { addFav, removeFav } from '../store/fav.js'

import { Card } from '../components/card'
import pokemon from '../images/pokemon-com.png';

export function Main () {
  const [ pokemons, setPokemon ] = useState([])
  let favorites = useSelector((state) => state.fav.favorites)
  const dispatch = useDispatch()

  useEffect(() => {
    getPokemons()
  }, [])

  function getPokemons () {
    const start = new Event('loadingStart')
    const finish = new Event('loadingFinish')

    window.dispatchEvent(start)
    Promise.all(
      Array.from({length: 20}, (v, i) => 
        getPokemonColor(`https://pokeapi.co/api/v2/pokemon/${i+1}`)
      )
    ).then((res) => {
      setPokemon(res)
      window.dispatchEvent(finish)
    })
  }

  async function getPokemonColor (url) {
    const result = await axios.get(url)
    return result.data
  }

  function addFavorite (e, id) {
    e.stopPropagation()
    if (favorites.includes(id)) {
      dispatch(removeFav(id))
    } else {
      dispatch(addFav(id))
    }
  }

  function openSideBar (id) {
    const openSideBar = new CustomEvent('openSidebar', {'detail': id})
    window.dispatchEvent(openSideBar)
  }

  return (
    <main className="main container">
      <div className="banner">
        <img src={pokemon} alt="pokemon company"/>
      </div>
      <div className="row">
      {
        pokemons.map((item, index) => {
          return (
            <div key={index} className="col-3 col-lg-2 pb-4">
              <Card
                key={index}
                data={{
                  isFavorite: favorites.includes(item.id), 
                  id: item.id,
                  name: item.name,
                  image: `https://img.pokemondb.net/artwork/large/${item.name}.jpg`,
                  type: item.types[0].type.name,
                  typeFull: item.types,
                  stats: item.stats
                }}
                addFavorite={addFavorite}
                openSideBar={openSideBar}
              />
            </div>
          )
        })
      }
      </div>
    </main>
  )
}
