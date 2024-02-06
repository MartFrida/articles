import React, { useState } from 'react'
import ArticleItemRTKQ from './ArticleItemRTKQ'
import { Link } from 'react-router-dom'
import { useGetArticlesQuery } from '../../redux/rtqQuery/atriclesAPI'


const ArticlesRTKQ = () => {
  const [value, setValue] = useState('')
  const { data, isLoading, isError, error } = useGetArticlesQuery()

  return (
    <>
      <Link to='/articlesRTK/new'>Add article</Link>
      <div>
        <input value={value} onChange={e => setValue(e.target.value)} type='text' />
      </div>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>{error}</h2>}
      <ul>
        {data?.map(item =>
          <li key={item.id}>
            <ArticleItemRTKQ {...item} />
          </li>
        )}
      </ul>
    </>

  )
}

export default ArticlesRTKQ