import React from 'react'
import { cutText } from '../../helpers/cutText'
import { selectUserName } from '../../redux/selectors'
import { formatDistanceToNow } from 'date-fns'
import { useSelector } from 'react-redux'
import { useDeleteArticleMutation, useRenameArticleMutation } from '../../redux/rtqQuery/atriclesAPI'

const ArticleItemRTKQ = ({ title, id, author, description, createdAt, tags }) => {
  const [deleteArticle] = useDeleteArticleMutation()
  const [rename] = useRenameArticleMutation()
  const user = useSelector(selectUserName)
  return (
    <div className='w-[90%] mx-auto mt-2 p-4 border-2 border-black rounded-md shadow-md flex flex-col items-start'>
      <h2 className='text-4xl font-bold'>{title}</h2>
      <p className='italic'>{author}</p>
      <div className='flex gap-4'>
        {tags?.map(tag => <span key={tag} className='border-2 px-4'>{tag}</span>)}</div>
      <p className='font-light'>{formatDistanceToNow(
        createdAt,
        { addSuffix: true }
      )}</p>
      <p className='text-xl'> {cutText(description)} </p>
      <div className='flex gap-4 py-2 mt-4 justify-end'>
        {user === author && (
          <>
            <button onClick={() => rename({ title, id, author, description, createdAt, tags })} className='border-2 border-black shadow-md px-4 py-1 rounded-md'>edit</button>

            <button onClick={() => deleteArticle(id)} className='border-2 border-black shadow-md px-4 py-1 rounded-md'>delete</button>
          </>)}
        <button className='border-2 border-black shadow-md px-4 py-1 rounded-md'>read more</button>

      </div>
    </div>
  )
}

export default ArticleItemRTKQ