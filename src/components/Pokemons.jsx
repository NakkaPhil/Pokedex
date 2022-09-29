import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from './PokemonCard'
import { useNavigate } from 'react-router'
import axios from 'axios'

export default function Pokemons() {
    const trainer = useSelector(e => e.Name)
    const navigate = useNavigate()
    const [types, setTypes] = useState([])
    const [pokimons, setPokimons] = useState([])
    const [input, setInput] = useState('')

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=150')
        .then(res => setPokimons(res.data.results))

        axios.get('https://pokeapi.co/api/v2/type/')
        .then(res => setTypes(res.data.results))
    },[])
    const searchByName = ()=> {
        navigate(`/pokedex/${input}`)
    }

    const searchByType = (type)=> {
        axios.get(`https://pokeapi.co/api/v2/type/${type}/`)
        .then(res => setPokimons(res.data.pokemon))
    }
    
    const [page, setPage] = useState(1)
    const pokimonsPerPage = 16;
    const lastPokimonIndex= page * pokimonsPerPage;
    const firstPokimonIndex = lastPokimonIndex - pokimonsPerPage;
    const pokimonsPaginated = pokimons.slice(firstPokimonIndex, lastPokimonIndex)

    const totalPages = Math.ceil(pokimons.length / pokimonsPerPage)
    const pagesNumbers = [];
    for(let i = 1; i <= totalPages; i++){
        pagesNumbers.push(i)
    }

  return (
    <div>
        <div className='pokeTitle'>
            <img src="/src/assets/img/pokedex_logo.png" alt="" />
            <div className='searchersBox'>
                <div className='searchByNameBox'>
                    <input 
                    className='input'
                    type="text"  
                    placeholder='Buscar por nombre o ID de Pokemon'
                    value={input}
                    onChange={e => setInput((e.target.value).toLowerCase())}
                    />
                    <button 
                    onClick={searchByName}
                    className='buttonSearch orange' 
                    >Search</button>
                </div>
                <div className='searchByTypeBox'>
                    <label htmlFor="byType">Search By Type: </label>
                    <select onChange={(e)=> searchByType(e.target.value)} className='orange'>
                        <option key={0} selected>All Pokemons</option>
                        {types.map((type) => (
                            <option key={type.name} value={type.name}>{type.name}</option>
                        ))}
                    </select>
                </div>
                <div className='pagesBox'>
                      <button className='orange' onClick={() => setPage(page - 1)} disabled={page === 1}>
                          Prev page
                      </button>
                      {pagesNumbers.map((number) => (
                          <button className='orange' onClick={() => setPage(number)}>{number}</button>
                      ))}
                      <button className='orange' onClick={() => setPage(page + 1)} disabled={page === totalPages}>
                          Next page
                      </button>
                </div>
            </div>
            <h2>Welcome {trainer}!</h2>
        </div>
        <div className='pokemonsBox'>
            {pokimonsPaginated.map((pokemon)=>(
                <PokemonCard url={pokemon.url ? pokemon.url : pokemon.pokemon?.url } key={pokemon.url}/>
            ))}
        </div>
        <div className='searchersBox'>
                <div className='searchByNameBox'>
                    <input 
                    className='input'
                    type="text"  
                    placeholder='Buscar por nombre o ID de Pokemon'
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    />
                    <button 
                    onClick={searchByName}
                    className='buttonSearch orange' 
                    >Search</button>
                </div>
                <div className='searchByTypeBox'>
                    <label htmlFor="byType">Search By Type: </label>
                    <select onChange={(e)=> searchByType(e.target.value)} className='orange'>
                        <option key={0} selected>All Pokemons</option>
                        {types.map((type) => (
                            <option key={type.name} value={type.name}>{type.name}</option>
                        ))}
                    </select>
                </div>
                <div className='pagesBox'>
                      <button className='orange' onClick={() => setPage(page - 1)} disabled={page === 1}>
                          Prev page
                      </button>
                      {pagesNumbers.map((number) => (
                          <button className='orange' onClick={() => setPage(number)}>{number}</button>
                      ))}
                      <button className='orange' onClick={() => setPage(page + 1)} disabled={page === totalPages}>
                          Next page
                      </button>
                </div>
            </div>
    </div>
  )
}
