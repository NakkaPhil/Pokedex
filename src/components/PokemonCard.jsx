import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import palet from '../colors/palet'

export default function PokemonCard({url}) {
    const navigate = useNavigate()
    const [pokemon, setPokemon] = useState({})
    const [img, setImg] = useState('')
    const [type, setType] = useState('')
    
    useEffect(()=>{
        axios.get(url)
        .then(res => {
            setPokemon(res.data)
            
            setImg(res.data.sprites.other['official-artwork']['front_default'])
          
            setType(res.data.types[0]?.type?.name)
        })    
    },[])
    
    const getType = () =>{
        let BGtype = pokemon?.types?.[0].type.name;
        return BGtype
      }
  
      let BGtype = getType()
          
      const setBackground = {
         BG: {'background': `linear-gradient(180deg, ${palet[BGtype]?.[0]} -10%, ${palet[BGtype]?.[1]} 60%, ${palet[BGtype]?.[2]} 99%)` }
      }

      const setBorder = {
        border: {'border': `10px solid ${palet[BGtype]?.[0]}`}
      }


  return (
    pokemon && (
        <div className='pokemonCard' style={setBorder['border']}
        onClick={()=> navigate(`/pokedex/${pokemon.id}`)}>
            <div className='w-100 pokemonCardTop'>
                <div className="background" style={setBackground['BG']}></div>
                <img className='pokemonPhoto' src={img} alt="" />
                <h2>{pokemon.species?.name}</h2>
            </div>
            <div className='pokemonCardBottom'>

                <div className="stats">
                    <div className="stats-col">
                        <h3>HP</h3>
                        <p>45</p>
                    </div>
                    <div className="stats-col">
                        <h3>ATTACK</h3>
                        <p>49</p>
                    </div>
                    <div className="stats-col">
                        <h3>DEFENSE</h3>
                        <p>49</p>
                    </div>
                    <div className="stats-col">
                        <h3>SPECIAL ATTACK</h3>
                        <p>65</p>
                    </div>
                    <div className="stats-col">
                        <h3>SPECIAL DEFFENSE</h3>
                        <p>65</p>
                    </div>
                    <div className="stats-col">
                        <h3>SPEED</h3>
                        <p>45</p>
                    </div>
                </div>
            </div>
        </div>
    )
  )
}
