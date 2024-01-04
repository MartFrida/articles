import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  return (
    <>
      {/* <Navigation /> */}
      <header className='text-3xl py-4 bg-blue-950 flex justify-between px-4'>
        <h2 className='text-red-500 font-bold text-center md:text-white lg:text-violet-600 hover:text-white transition-colors duration-300'>Logo</h2>
        <NavLink to='/articles' className='text-white hover:text-'>Articles</NavLink>
        <button onClick={() => navigate('/articles/new')} className='bg-white px-4 py-1 text-xl rounded-md'>Add article</button>
      </header>
    </>

  )
}

export default Header