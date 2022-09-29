import React from 'react'
import UserInput from './UserInput'
export default function Intro() {
  return (
    <div className='introBox'>
        
        <div className='imgBox'>
            <img className='introImg' src="/src/assets/img/oakoakoak_tenecesitoOak.png" alt="oak-img"  />
        </div>
        <UserInput/>
    </div>
  )
}
