import React from 'react'
import { CardSlider } from './CardSlider';

export const Slider = ({movies, title}) => {
    const getMoviesRange = ( from, to ) => {
        return movies.slice( from, to );
    }

  return (
    <div className=' flex flex-col bg-black p-4 ' >
        <h1 className='text-4xl font-semibold  text-white '>{title}</h1>
        <div >
            <CardSlider title="Trending now" data={getMoviesRange(0, 10)} />
            <CardSlider title="Trending now" data={getMoviesRange(10, 20)} />
            <CardSlider title="Trending now" data={getMoviesRange(20, 30)} />
            <CardSlider title="Trending now" data={getMoviesRange(30, 40)} />
            <CardSlider title="Trending now" data={getMoviesRange(40, 50)} />
            <CardSlider title="Trending now" data={getMoviesRange(50, 60)} />    
        </div>
    </div>
  )
}
