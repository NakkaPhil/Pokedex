import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { Name } from '../store/slices/trainerName.slice'
export default function Welcome() {

  
  
  const [trainerName, setTrainerName] = useState('')
  
  const dispach = useDispatch()
  const navigate = useNavigate()

  const pancho = ()=>{
    dispach(Name(trainerName))
    navigate('/pokedex')
  }
  return (
    <div className='userInputBox'>
        <h1>Hi Trainer!<br/>How's your name?</h1>
      <div className="inputBox">
        <input
          type="text"
          value={trainerName}
          onChange={(e) => setTrainerName(e.target.value)}
        />

        <button onClick={() => pancho() }>Go!</button>
      </div>
    </div>
  )
}
