import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  function btnClicked() {

  }
  return (
    <div className='flex justify-between px-7 py-4 items-center border-b-2 border-b-gray-200'>
      <div className='flex gap-6 items-center'>
        <h2 className='tracking-widest text-red-700 font-bold text-xl mr-25'>BLAZE</h2>
        <Link className='hover:border-gray-400 border-b-2 border-transparent transition-all duration-300 text-gray-500 font-bold' to='/' >Home</Link>
        <Link className='hover:border-gray-400 border-b-2 border-transparent transition-all duration-300 text-gray-500' to='/shop' >Shop</Link>
        <Link className='hover:border-gray-400 border-b-2 border-transparent transition-all duration-300 text-gray-500' to='/about' >AboutUs</Link>
        <Link className='hover:border-gray-400 border-b-2 border-transparent transition-all duration-300 text-gray-500' to='/blog' >Blog</Link>
        <Link className='hover:border-gray-400 border-b-2 border-transparent transition-all duration-300 text-gray-500' to='/contact' >ContactUs</Link>
        
      </div>
      <div>
        <Link className='font-bold active:scale-95 hover:bg-[#0e3e5e] text-white bg-[#0066CB] px-5 py-1.5  rounded-full active:scale-95 border-none' to='/login' >Login</Link>
      </div>
    </div>
  )
}

export default Navbar
