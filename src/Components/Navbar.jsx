import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

  const {
    isLoading,
    isAuthenticated,
    error,
    loginWithRedirect: login,
    logout: auth0Logout,
    user,
  } = useAuth0();

  const signup = () =>
    login({ authorizationParams: { screen_hint: "signup" } });

  const logout = () =>
    auth0Logout({ logoutParams: { returnTo: window.location.origin } });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className='flex justify-between px-7 py-4 items-center border-b-2 border-b-gray-200'>
      <div className='flex gap-6 items-center'>
        <h2 className='tracking-widest text-red-700 font-bold text-xl mr-25'>BLAZE</h2>

        <Link className='hover:border-gray-400 border-b-2 border-transparent transition-all duration-300 text-gray-500 font-bold' to='/'>Home</Link>
        <Link className='hover:border-gray-400 border-b-2 border-transparent transition-all duration-300 text-gray-500' to='/shop'>Shop</Link>
        <Link className='hover:border-gray-400 border-b-2 border-transparent transition-all duration-300 text-gray-500' to='/about'>AboutUs</Link>
        <Link className='hover:border-gray-400 border-b-2 border-transparent transition-all duration-300 text-gray-500' to='/blog'>Blog</Link>
        <Link className='hover:border-gray-400 border-b-2 border-transparent transition-all duration-300 text-gray-500' to='/contact'>ContactUs</Link>
      </div>

      <div>
        {!isAuthenticated ? (
          <button className='px-4 py-1 text-white bg-[#0066CD] rounded-md active:scale-95 ' onClick={login}>Login</button>
        ) : (
          <button className='px-4 py-1 text-white bg-[#0066CD] rounded-md active:scale-95 ' onClick={logout}>Logout</button>
        )}
      </div>
    </div>
  )
}

export default Navbar