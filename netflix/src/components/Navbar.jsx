import React from 'react'
import logo from '../assets/logo.png'
import { FaSearch } from 'react-icons/fa'
import {AiOutlinePoweroff} from 'react-icons/ai';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import {useNavigate} from 'react-router-dom';

export const Navbar = ({scrolled}) => {
    const Navigate = useNavigate();
    const handleLogout = () => {
        signOut(firebaseAuth); 
        alert("signed Out");
        onAuthStateChanged(firebaseAuth, (user)=>{
            if(user)
                Navigate('/login');
        })
    }

  return (
    <div className='w-full h-[100px] transition-colors duration-300 ' style={scrolled?{backgroundColor:'rgba(0,0,0,1)'}:{backgroundColor:'rgba(0,0,0,0)'}} >
        <div className='flex h-full justify-between  items-center px-10' >
                <div className='flex items-center  w-full max-w-[600px] justify-between ' >
                    <img className=' w-[150px] h-[70px]' src={logo} alt="" />
                    <div className='text-white w-[400px] ' >
                        <ul className='flex justify-evenly '>
                            <li>Home</li>
                            <li>Tv Shows</li>
                            <li>Movies</li>
                            <li>My List</li>
                        </ul>
                    </div>
                
            <div>
            </div>     
        </div>
        <div className='flex text-[1.3rem] w-[100px] justify-around ' >
            <button className='hover:scale-110 duration:300 ' ><FaSearch className='text-white'/></button>
            <button onClick={handleLogout} className=' hover:scale-110 duration-300' >
                <AiOutlinePoweroff className='text-[#e62d2d]'/>
            </button>
            
        </div>
        </div>
    </div>
  )
}
