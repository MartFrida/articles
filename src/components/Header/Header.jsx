import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectIsLoggedIn, selectUserName } from '../../redux/selectors'
import { logoutThunk } from '../../redux/auth/operations'

const Header = () => {

  const userName = useSelector(selectUserName)
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const dispatch = useDispatch()
  return (
    <header className='text-3xl text-zinc-700 font-bold py-4 bg-white flex justify-between px-4 shadow-md fixed top-0 left-0 right-0 u'>

      <NavLink to='/' className='hover:text-zinc-950 '>
        {userName || 'logo'}
      </NavLink>

      <div className='flex justify-around gap-x-12 uppercase'>
        <NavLink to='/articlesRTK/new' className='hover:text-zinc-950 '>Add your article</NavLink>
        <NavLink to='/articlesRTK' className='hover:text-zinc-950 '>Articles</NavLink>
      </div>

      {!isLoggedIn && (<div className='flex gap-x-4 '>
        <NavLink to='/register' className='hover:text-zinc-950 '>SignUp</NavLink>
        <NavLink to='/login' className='hover:text-zinc-950 '>Login</NavLink>
      </div>)}

      {isLoggedIn && (<div className='flex '>
        <NavLink onClick={() => dispatch(logoutThunk())} className='hover:text-zinc-950 '>Exit</NavLink>
      </div>)}
    </header>
  )
}

export default Header