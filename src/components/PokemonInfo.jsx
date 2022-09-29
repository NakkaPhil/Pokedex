import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import palet from '../colors/palet'
import { useNavigate } from 'react-router'

export default function PokemonInfo() {
    const navigate = useNavigate()
    const [pokemon, setPokemon] = useState({})
    const [img, setImg] = useState('')
    const [type, setType] = useState('')
    const [skills, setSkills] = useState([])
    const [stats, setStats] = useState([])
    const { id } = useParams()
    id.toLowerCase()

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => {
          setPokemon(res.data)

          setImg(res.data.sprites.other['official-artwork']['front_default'])
          
          setType(res.data.types[0]?.type?.name)

          setSkills(res.data.abilities)

          setStats(res.data.stats)
        })

    },[])
    console.log(stats)
    
    const getType = () =>{
      let BGtype = pokemon?.types?.[0].type.name;
      return BGtype
    }

    let BGtype = getType()
  
    const setBackground = {
       BG: {'background': `linear-gradient(180deg, ${palet[BGtype]?.[0]} 5%, ${palet[BGtype]?.[1]} 60%, ${palet[BGtype]?.[2]} 99%)` }
    }

    const back = ()=>{ navigate(-1)}
  return (
    <div className='container'>
      <button className='back' onClick={back}><i className='bx bx-arrow-back'></i></button>
    <div className='pokemonInfo'>
      <div className='pokemonInfoCard'>
      <div className="backgroundInfo" style={setBackground['BG']} ></div>
        <img className='pokemonInfoImg' src={img} alt="" />
        <h2 className='ID'>
          # {pokemon.id}
        </h2>
        <h1 className='pokemonInfoTitle'>{pokemon.species?.name}</h1>
        <div className='pokemonMorph' >  
            <p>Weight: {pokemon.weight}</p>
            <p>Height: {pokemon.height}</p>
        </div>
        <div className='mainStats'>
          <div className='pokemonTypes'>
            <h2 className='pokemonTitle'>Type</h2>
            <p>{type}</p>
          </div>
          <div className='pokemonSkills'>
              <h2 className='pokemonTitle'>Skills</h2>
            <div className='pokemonMainSkills'>
              {skills.map((skill) => (
                <p key={skill.ability?.url}>{skill.ability?.name}</p>
              ))}
            </div>
          </div>
        </div>
            <div className='pokemonStats'>
                <h2>Stats</h2>
                <div className='statsBox'>
                  <div className='statsInfo'>
                    <h3>HP</h3>
                    <h3>Attack</h3>
                    <h3>Defense</h3>
                    <h3>Speed</h3>
                  </div>
                  <div className='statsInfo'>
                    <h3>{stats[0]?.base_stat}/150</h3>
                    <h3>{stats[1]?.base_stat}/150</h3>
                    <h3>{stats[2]?.base_stat}/150</h3>
                    <h3>{stats[3]?.base_stat}/150</h3>
                  </div>
                </div>
            </div>
      </div>
    </div>
    </div>
  )
}
