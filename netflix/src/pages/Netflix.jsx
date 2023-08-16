import React from 'react'
// import {BackroundImage} from '../assets'
import { useState, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import home from '../assets/home.jpg'
import MovieLogo from '../assets/homeTitle.webp';
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, getMovies, store } from '../store';
import { Slider } from '../components/Slider';

export  const Netflix = () => {
  const genLoaded = useSelector((state)=>{return state.netflix.genLoaded} );
  const genres = useSelector( (state) => state.netflix.genres )
  const movies = useSelector( (state) => state.netflix.movies )
  // console.log(genresLoaded, "hetah")
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getGenres())
  },[dispatch])

  useEffect(() => {
      if(genLoaded){
        dispatch(getMovies({genres, type: 'all'}))
    }
  },[dispatch])
  // console.log(typeof(movies))
  const [scrolled, setScrolled] = useState(false);
  const Navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handlePlayer = () => {
    Navigate('/player');
  }
  return (
    <div className='absolute w-full h-[90vh]'>
      <div name="abs" className='w-full z-10 fixed' >
        <Navbar scrolled={scrolled} />
      </div>

      
      <div name='movie' className=' ' >
        <img src={home} className=' w-full h-screen' />
        <img src={MovieLogo} alt="" className='absolute top-[15rem] ml-[5rem]'/>
        <div className='absolute flex gap-8 top-[35rem] ml-[5rem] justify-between ' >
          <button className=' hover:scale-110 duration-500 p-[0.2rem] pl-[1.5rem] pr-[1.7rem] cursor-pointer justify-center flex items-center w-[120px] gap-3 text-[1.2rem] bg-white rounded-[0.2rem]  ' > 
            <FaPlay className='' />
            <h1 className='' onClick={handlePlayer} >Play</h1>
          </button>
          <button className=' bg-[rgba(126,126,126,1)]  hover:scale-110 duration-500 p-[0.2rem] pl-[1.5rem] pr-[1.7rem] cursor-pointer justify-center flex items-center w-[170px] gap-3 text-[1.2rem] rounded-[0.2rem] '>
            <AiOutlineInfoCircle/>
            <h1>More info</h1>
          </button>
        </div>
      </div>
      <Slider movies={movies} title="Trending now" />
    </div>
  )
}


// useEffect(()=>{
//   const handleScroll = () => {
//   if( window.scrollY > 0 ){
//     setScrolled(true)
//   }
//   else
//     setScrolled(false)
//   }})

//   window.addEventListener('scroll', handleScroll)
//   return () => {
//     removeEventListener('scroll', handleScroll)
//   }