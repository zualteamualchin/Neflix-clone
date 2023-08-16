import React, { useRef, useState } from 'react'
// import {BackroundImage} from '../assets'
import { useNavigate } from 'react-router-dom';
import { BackroundImage } from '../components/backroundImage';
import { Header } from '../components/Header';
import {FaChevronRight} from 'react-icons/fa';

export  const Signup = (props) => {
  const hidden = props.field;
  console.log(hidden);
  const [inputValue, setinputValue] = useState('');
  const inputRef = useRef(null);
  const Navigate = useNavigate();
  const handleClick = (e) => {
    if( /\S+@\S+\.\S+/.test(inputValue)){
      alert(inputValue)
      Navigate('/register', {state:{email:inputValue}});}
    else{
      Navigate('/signup', {field:false})
      console.log("wrong type");
    }
    }
  return (
    <div className='absolute w-full h-screen'>
      <BackroundImage />
      <div name="abs" className='w-full absolute inset-0  bg-[rgba(0,0,0,0.5)] items-center' >
        <Header login />
        <div className='top-[20vh] relative flex flex-col justify-between gap-8 max-w-[1000px] mx-auto p-4 items-center ' >
        <div className=" relative flex flex-col w-full items-center justify-center text-center gap-4">
            <h1 className='font-extrabold text-[3rem] text-white' >Unlimited movies, TV shows and more</h1>
            <h4 className='text-[1.3rem] text-white ' >Watch anywhere. Cancel anytime.</h4>
            <h6 className='text-[1.3rem] text-white' >Ready to watch? Enter your email to create or restart membership.</h6>
        </div>
        <div className='flex justify-center '>
          <form className='flex h-[3.5rem]' > 
            <input
            onChange={(e)=>{setinputValue(e.target.value)}}
            value={inputValue}
            ref={inputRef}
            className='items-center text-white border-[#a19d9d] w-[380px] px-4 bg-[rgba(0,0,0,0.5)] rounded-[0.3rem] border-[0.01rem] ' type='email' placeholder='Email Address' name='email' />
            <button 
            onClick={handleClick}
            className='items-center justify-center text-white  rounded-[0.3rem] flex w-[150px] mx-2 px-2 bg-[#e62d2d] ' >Get Started<FaChevronRight className='ml-2'/></button>
          </form>
        </div>
        <p style={{visibility:(hidden?'hidden':'visible'), color:'white'}}>Hello</p>
      </div>
      </div>
    </div>
  )
}
