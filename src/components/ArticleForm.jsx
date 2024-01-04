import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addArticle } from '../redux/slice'
import { useNavigate } from 'react-router-dom'

const ArticleForm = () => {
  const { register, handleSubmit, reset } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const submit = data => {
    console.log({ ...data, tags: data.tags.split(','), author: 'Mari', createdAt: new Date(Date.now()) })
    dispatch(addArticle({ ...data, author: 'Mari', createdAt: Date.now() }))
    reset()
    navigate('/articles')
  }
  return (
    <form onSubmit={handleSubmit(submit)} className='border-2 w-[90%] mx-auto flex flex-col gap-6 rounded-md py-8 px-4 border-black'>
      <input placeholder='Article title' {...register('title')} className='border border-black rounded-md' />
      <textarea placeholder='Article text' {...register('description')} className='border border-black rounded-md' />
      <input placeholder='Article tags' {...register('tags')} className='border border-black rounded-md' />
      <button className='border border-black rounded-md bg-green-500'>Add article</button>
      <button type='button' className='border border-black rounded-md bg-red-500'>Cancel</button>
    </form>
  )
}

export default ArticleForm