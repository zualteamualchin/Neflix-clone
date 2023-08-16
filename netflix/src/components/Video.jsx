import React from 'react'
import Vid from '../assets/Vid.mp4'
import {BsArrowLeft} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export const Video = () => {
    const Navigate = useNavigate();
  return (
    <div className='w-full h-screen' >
        
        <video src={Vid} className='w-full h-full' autoPlay controls muted ></video>
        <div>
            <BsArrowLeft className='z-1 text-[4rem]  font-extrabold m-[0.5rem]  text-white absolute top-0  hover:scale-110 duration:400' onClick={()=>{Navigate(-1)}} />
        </div>
    </div>
  )
}
