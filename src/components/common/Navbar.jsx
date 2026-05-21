import React from 'react'
import CustomBottom from './CustomBottom'
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';

const Navbar = () => {
  const navigate = useNavigate();
  const {login} = useAuth();


  const handleLogin =() =>{
    login();
    navigate("/login")
  }
  
  return (
   <header className='flex px-20 py-2 justify-between items-center bg-white shadow-md '>
    {/* left part */}
     <div>
      <h1 className='text-2xl font-bold text-gray-600 hover:text-gray-400 cursor-pointer'>
         GhumFir.
      </h1>
     </div>


    {/* right part */}
      <div className='flex gap-10 items-center'>
        <nav className='m-4 flex gap-10 text-gray-600 [&>a]:hover:text-amber-600  '>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/help">Help</a>
        </nav>
        <div  onClick={handleLogin}/>
         <a href="/login"></a>
       <a href="/login"><CustomBottom text="Login" /></a>
       
      
       

      </div>

   </header>
  )
}

export default Navbar