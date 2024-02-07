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
    <div className=" flex min-h-screen flex-1 flex-col justify-center item-center px-6 py-12 lg:px-8">
      <form onSubmit={handleSubmit(submit)}
        className='border-2 w-[90%] mx-auto flex flex-col gap-6 rounded-md py-8 px-4 shadow-lg border border-gray-300 justify-center bg-white'>
        <input placeholder='Article title' {...register('title')} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ' />
        <textarea placeholder='Article text' {...register('description')} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ' />
        <input placeholder='Article tags' {...register('tags')} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ' />
        <div className='flex gap-x-8'>
          <button className=' shadow-lg w-[30%] rounded border-2  bg-white px-3 py-3 text-base font-bold text-emerald-600 transition duration-100 hover:shadow-emerald-500'>Add article</button>
          <button type='button' className='shadow-lg w-[30%] rounded border-2  bg-white px-3 py-3 text-base font-bold text-rose-600 transition duration-100 hover:shadow-rose-500'>Cancel</button>

        </div>


      </form>
    </div>

  )
}

export default ArticleFormRTKQ