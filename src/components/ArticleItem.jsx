import React from 'react'
import { cutText } from './helpers/cutText'

const ArticleItem = ({ title, id, author, description, createdAt, tags }) => {
  return (
    <div className='w-[90%] mx-auto mt-2 p-4 border-2 border-black rounded-md shadow-md flex flex-col items-start'>
      <h2 className='text-4xl font-bold'>{title}</h2>
      <p className='italic'>{author}</p>
      <div className='flex gap-4'>
        {tags.map(tag => <span key={tag} className='border-2 px-4'>{tag}</span>)}</div>
      <p className='font-light'>{createdAt}</p>
      <p className='text-xl'> {cutText(description)} </p>
      <div className='flex gap-4 py-2 mt-4 justify-end'>
        <button className='border-2 border-black shadow-md px-4 py-1 rounded-md'>edit</button>
        <button className='border-2 border-black shadow-md px-4 py-1 rounded-md'>delete</button>
        <button className='border-2 border-black shadow-md px-4 py-1 rounded-md'>read more</button>
      </div>
    </div>
  )
}

export default ArticleItem