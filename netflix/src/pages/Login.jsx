import React, { useState } from 'react'
// import {BackroundImage} from '../assets'
import styled from 'styled-components';
import { BackroundImage } from '../components/backroundImage';
import { Header } from '../components/Header';
import {FaChevronRight} from 'react-icons/fa';
import {firebaseAuth} from '../utils/firebase-config'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


export const Login = () => {
  const Navigate = useNavigate();
  const [valueHolder, setValueHolder] = useState({
    email:'',
    password:'',
  });
  const handleValues = async (e) => {
    e.preventDefault();
    try{
      await signInWithEmailAndPassword(firebaseAuth, valueHolder.email, valueHolder.password);
      onAuthStateChanged(firebaseAuth,(user)=>{
        if(user)
          Navigate('/netflix');
      })
    }
    catch(err){
      alert("NO")
    }
  }
  return (
    <div className='absolute w-full h-[110vh]'>
      <BackroundImage height='110vh' />
      <div name="abs" className='w-full absolute inset-0 bg-[rgba(0,0,0,0.1)] items-center' >
        <Header login />
        <div className=' relative bg-[rgba(0,0,0,0.8)] flex flex-col max-w-[450px] mx-auto p-4 items-center ' >
          <h1 className='text-white self-start ml-[3.5rem] text-4xl font-semibold mt-10 ' >Sign In</h1>
          <form className='flex flex-col mt-10 w-[300px] gap-4 ' > 
            <input
            value={valueHolder.email}
            onChange={(e)=> { setValueHolder( {...valueHolder, [e.target.name]:e.target.value } ) } }
            className='items-center h-[50px] px-4 bg-[rgba(77,73,73,0.7)] rounded-[0.3rem]  ' type='email' placeholder='Email Address' name='email' />
            <input 
            value={valueHolder.password}
            onChange={(e)=> { setValueHolder( {...valueHolder, [e.target.name]:e.target.value } ) } }
            className='items-center h-[50px] px-4 bg-[rgba(77,73,73,0.7)] rounded-[0.3rem] ' type='text' placeholder='Password' name='password' />
            <button onClick={handleValues} className='items-center justify-center text-white h-[50px] mt-4 rounded-[0.3rem] flex   bg-[#e62d2d] ' >Get Started<FaChevronRight className='ml-2'/></button>
          </form>
          <div className='flex w-[300px] justify-between text-[0.9rem] mt-4 ' >
            <div className='text-[rgb(156,151,151)] items-center flex ' > 
            <p className='ml-1'> <input type='checkbox' className='' />Remember me</p>
            </div>
            <div className='text-[rgb(156,151,151)]'>
              <a>Need help?</a>
            </div>
          </div>
      </div>
      </div>
    </div>
  )
}
