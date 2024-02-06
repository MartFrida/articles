import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { registerThunk } from '../../redux/auth/operations'

const Register = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const submit = data => {
    console.log(data)
    dispatch(registerThunk(data))
  }

  return (
    <div className='flex justify-center items-center min-h-[80vh]'>
      <form onSubmit={handleSubmit(submit)} className='grid gap-4 border-2 border-black rounded-md shadow-md px-10 py-14'>
        <label className='flex flex-col gap-2'>
          <span>Name</span>
          <input {...register('name')} placeholder='Enter the name' className='border-2 border-black rounded-md p-1' type='text' />
        </label>
        <label className='flex flex-col gap-2'>
          <span>Email</span>
          <input {...register('email')} placeholder='Enter the email' className='border-2 border-black rounded-md p-1' type='email' />
        </label>
        <label className='flex flex-col gap-2'>
          <span>Password</span>
          <input {...register('password')} placeholder='Enter the password' className='border-2 border-black rounded-md p-1' type='password' />
        </label>
        <button className='border-2 border-black rounded-md px-4 py-2' >Register</button>
      </form>
    </div>
  )
}

export default Register