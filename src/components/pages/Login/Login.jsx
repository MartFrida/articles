import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { loginThunk } from '../../../redux/auth/operations'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const Login = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: 'marisata1@email.com',
      password: 'marisata@email.com',
    }
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const submit = data => {
    console.log(data)
    dispatch(loginThunk(data))
      .unwrap()
      .then((res) => {
        navigate('/articles')
        toast.success(`Welcome ${res.user.name}`)
      })
      .catch(() => { toast.error('Something went wrong!') })
  }

  return (
    <div className='flex justify-center items-center min-h-[80vh]'>
      <form onSubmit={handleSubmit(submit)} className='grid gap-4 border-2 border-black rounded-md shadow-md px-10 py-14'>
        <label className='flex flex-col gap-2'>
          <span>Email</span>
          <input {...register('email')} placeholder='Enter the email' className='border-2 border-black rounded-md p-1' type='email' />
        </label>
        <label className='flex flex-col gap-2'>
          <span>Password</span>
          <input {...register('password')} placeholder='Enter the password' className='border-2 border-black rounded-md p-1' type='password' />
        </label>
        <button className='border-2 border-black rounded-md px-4 py-2' >Login</button>
      </form>
    </div>
  )
}

export default Login