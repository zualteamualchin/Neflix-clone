import React from 'react'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import {FaGlobe} from 'react-icons/fa';

export const Header = (props) => {
    const Navigate = useNavigate();
  return (
    <div className=' w-[1000px] mx-auto h-[100px] flex justify-between ' >
        <div className='h-full w-[200px]  ' >
            <img className='' alt='netflix logo' src={logo} />
        </div>
        <div className='flex justify-evenly  items-center h-full w-[300px] font-[1.5rem]'>
            <select className=' border-[0.01px] border-[#a19d9d] rounded-[0.2rem] text-white bg-[rgba(0,0,0,0)] h-[35px] w-[150px] ' name="region" >
                {/* <FaGlobe className='text-white' /> */}
                <option value="hindi">Hindi</option>
                <option value='hindi'>English</option>
            </select>
            <button className='rounded-[0.2rem] font-semibold text-white   bg-[#e62d2d] w-[80px] h-[35px]' 
            onClick={()=>{
                Navigate((props.login? "/login":"/signup"))
            }} >{props.login ? "Log In" : "Sign In"}</button>
        </div>
    </div>
  )
}

