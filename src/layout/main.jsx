import React, { useEffect, useState } from 'react';
import  axios  from '../api/axios-config.js';
import { Card } from '../components/card'
import pokemon from '../images/pokemon-com.png';

export function Main () {
  const [ pokemons, setPokemon ] = useState([])
  const [ pokemonColor, setPokemonColor ] = useState()

  useEffect(() => {
    getPokemons()
  }, [])

  function getPokemons () {
    Promise.all(
      Array.from({length: 20}, (v, i) => 
        getPokemonColor(`https://pokeapi.co/api/v2/pokemon/${i+1}`)
      )
    ).then((res) => {
      setPokemon(res)
    })
  }

  async function getPokemonColor (url) {
    const result = await axios.get(url)
    return result.data
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
            <div key={index} className="col-2 col-md-3 pb-4">
              <Card
                key={index}
                data={{
                  id: item.id,
                  name: item.name,
                  image: `https://img.pokemondb.net/artwork/large/${item.name}.jpg`,
                  type: item.types[0].type.name,
                  typeFull: item.types,
                  stats: item.stats
                }} />
            </div>
          )
        })
      }
      </div>
    </main>
  )
}
