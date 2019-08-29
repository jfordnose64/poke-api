import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Poke = () => {
  const [searchTerm, setSearchTerm] = useState('ditto')
  const [pokemon, newPokemon] = useState('')
  const [searchData, setSearchData] = useState('')

  const fetchData = async () => {
    const resp = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
    )
    newPokemon(resp.data.name)
    setSearchData(resp.data.weight)
  }

  return (
    <div>
      <h1>Poke Dex</h1>
      <input
        type="search"
        className="search-box"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button type="button" onClick={fetchData}>
        Search
      </button>
      <h3>{pokemon}</h3>
      <h4>{searchData}</h4>
    </div>
  )
}

export default Poke
