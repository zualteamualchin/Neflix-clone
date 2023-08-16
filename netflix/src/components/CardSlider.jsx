import React, { useEffect, useRef, useState } from 'react'
import { Card } from './Card'
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'

export const CardSlider = ({title, data}) => {
    const [showControls, setShowControls] = useState(false);
    const [sliderPostion, setSliderPosition] = useState(0);
    const sliderRef = useRef();
    const handleDirection = (side) => {
        const distance = sliderRef.current.getBoundingClientRect().x ;
        console.log(distance)
        if( side === "left" && sliderPostion > 0 ){
            sliderRef.current.style.transform = `translateX( ${500 + distance}px )`
            setSliderPosition(sliderPostion-1)
            console.log('left')
        }
        if( side === "right" && sliderPostion < 3 ){
            sliderRef.current.style.transform = `translateX( ${-420 + distance}px )`
            setSliderPosition(sliderPostion+1)
            console.log('right')
        }
    }
    return (
    <div onMouseEnter={()=>setShowControls(true)} onMouseLeave={()=>setShowControls(false)} className='p-4 relative w-full text-white items-center flex justify-center bg-black border-2'>
        <button onClick={() => {handleDirection("left")}} className={showControls?'opacity-100 transition-opacity duration-300 absolute left-0 z-10 h-[150px] bg-[rgba(0,0,0,0.9)] w-[50px] flex items-center justify-center':'opacity-0 absolute left-0 z-10 h-[150px] bg-[rgba(0,0,0,0.9)] w-[50px] flex items-center justify-center'} >
            <AiOutlineLeft className='text-white text-3xl ' />
        </button>
        <button onClick={() => {handleDirection("right")}} className={showControls?'opacity-100 transition-opacity duration-300 absolute right-0 z-10 h-[150px] bg-[rgba(0,0,0,0.9)] w-[50px] flex items-center justify-center':'opacity-0 absolute right-0 z-10 h-[150px] bg-[rgba(0,0,0,0.9)] w-[50px] flex items-center justify-center'}>
            <AiOutlineRight className='text-white text-3xl' />
        </button>
        <div ref={sliderRef} className='text-white w-max ease-out duration-300 items-center h-[150px] gap-[2.1rem] flex ml-[68%]  ' >
        {data.map( (movie, index) => {
            return <Card movie={movie} index={index} key={movie.id} />
        } )}
    </div>
    </div>
    
  )
}