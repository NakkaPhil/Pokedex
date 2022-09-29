import React from 'react'
import UserInput from './UserInput'
import img from '../assets/img/oakoakoak_tenecesitoOak.png'
export default function Intro() {
  return (
    <div className='introBox'>
        
        <div className='imgBox'>
            <img className='introImg' src={img}  />
        </div>
        <UserInput/>
    </div>
  )
}
