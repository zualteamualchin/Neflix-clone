import React, { useState } from 'react'
import { BackroundImage } from '../components/backroundImage';
import { Header } from '../components/Header';
import {createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import {firebaseAuth} from '../utils/firebase-config';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export  const Register = (props) => {
  
    const location = useLocation();
    const emailID = location.state && location.state.email; 
    console.log(emailID);
    const [valueHolder, setValueHolder] = useState({
      email: emailID || '',
      password:'',
  });
    const navigate = useNavigate();
    // const history = useHistory();
    
    console.log(valueHolder.email);
    const handleSignIn = async (e) => {
      e.preventDefault();
        try{
            const {email,password} = valueHolder;
            await createUserWithEmailAndPassword( firebaseAuth, email,password );
            onAuthStateChanged(firebaseAuth, (user)=>{
              if(user){
                navigate('/login')
              }
        
            })
        }
        catch (err){
            console.log(err)
        }
    }
    
  return (
    <div className='absolute w-full h-[110vh]'>
      <BackroundImage height='110vh' />
      <div name="abs" className='w-full absolute inset-0 bg-[rgba(0,0,0,0.1)] items-center' >
        <Header login />
        <div className=' relative bg-[rgba(0,0,0,0.8)] flex flex-col max-w-[450px] mx-auto p-4 items-center ' >
          <h1 className='text-white self-start ml-[3.5rem] text-4xl font-semibold mt-10 ' >Register</h1>
          <form className='flex flex-col mt-10 w-[300px] gap-4 ' > 
            {/* <p className='text-white'>{props.email}</p> */}
            <input
            value={valueHolder.email} 
            name='email'
            onChange={(e)=>{setValueHolder({...valueHolder, [e.target.name]: e.target.value})}}
            className='items-center h-[50px] px-4 bg-[rgba(77,73,73,0.7)] rounded-[0.3rem]  ' type='email' placeholder='Email Address' />
            <input
            value={valueHolder.password}
            name='password'
            onChange={(e)=>{setValueHolder({...valueHolder, [e.target.name]:e.target.value})}} 
            className='items-center h-[50px] px-4 bg-[rgba(77,73,73,0.7)] rounded-[0.3rem] ' type='text' placeholder='Password' />
            <button 
            onClick={handleSignIn}
            className='items-center justify-center text-white h-[50px] mt-4 rounded-[0.3rem] flex   bg-[#e62d2d] ' >Register</button>
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
