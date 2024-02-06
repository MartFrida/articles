import React from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectUserName } from '../../redux/selectors'
import { useAddArticlesMutation } from '../../redux/rtqQuery/atriclesAPI'

const ArticleFormRTKQ = () => {
  const { register, handleSubmit, reset } = useForm()
  const navigate = useNavigate()
  const user = useSelector(selectUserName)
  const [addArticle] = useAddArticlesMutation()
  const submit = data => {
    addArticle({ ...data, tags: data.tags.split(','), author: user, createdAt: Date.now() })
    reset()
    navigate('/articlesRTK')
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

export default ArticleFormRTKQ