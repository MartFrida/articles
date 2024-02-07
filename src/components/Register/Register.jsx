import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { registerThunk } from '../../redux/auth/operations'
import { toast } from 'react-toastify'

const Register = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  const submit = data => {
    dispatch(registerThunk(data))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome ${res.user.name}`)
      })
      .catch(() => { toast.error('Something went wrong!') })
  }

  return (
    <div className='flex justify-center items-center min-h-screen px-6 py-12 lg:px-8'>
      <form onSubmit={handleSubmit(submit)} className='bg-white grid gap-4 shadow-lg border border-gray-300 rounded-md px-10 py-14 min-w-80'>
        <label className='flex flex-col gap-2'>
          <span>Name</span>
          <input {...register('name')} placeholder='Enter the name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ' type='text' />
        </label>
        <label className='flex flex-col gap-2'>
          <span>Email</span>
          <input {...register('email')} placeholder='Enter the email' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ' type='email' />
        </label>
        <label className='flex flex-col gap-2'>
          <span>Password</span>
          <input {...register('password')} placeholder='Enter the password' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ' type='password' />
        </label>
        <button className='shadow-lg w-full rounded border-2 bg-white px-3 py-3 text-base font-bold text-gray-900 transition duration-100 hover:shadow-gray-300 mt-2' >Register</button>
      </form>
    </div>
  )
}

export default Register