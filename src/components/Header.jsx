import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { selectIsLoggedIn, selectUserName } from '../redux/selectors'
import { logoutThunk } from '../redux/auth/operations'

const Header = () => {
  const navigate = useNavigate()
  const userName = useSelector(selectUserName)
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const dispatch = useDispatch()
  return (
    <header className='text-3xl py-4 bg-blue-950 flex justify-between px-4'>

      <NavLink to='/' className='text-white hover:text-'>
        {userName || 'logo'}
      </NavLink>
      <NavLink to='/articles' className='text-white hover:text-'>Articles</NavLink>
      <button onClick={() => navigate('/articles/new')} className='bg-white px-4 py-1 text-xl rounded-md'>Add article</button>
      {!isLoggedIn && (<>
        <NavLink to='/register'>SignUp</NavLink>
        <NavLink to='/login'>Login</NavLink>
      </>)}
      {isLoggedIn && (<>
        |<button onClick={() => dispatch(logoutThunk())} className='text-white font-bold'>Exit</button>
      </>)}
    </header>
  )
}

export default Header