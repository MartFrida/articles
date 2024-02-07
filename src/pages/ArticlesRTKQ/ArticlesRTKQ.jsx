import React from 'react'
import ArticleItemRTKQ from './ArticleItemRTKQ'
import { useGetArticlesQuery } from '../../redux/rtqQuery/atriclesAPI'


const ArticlesRTKQ = () => {
  const { data, isLoading, isError, error } = useGetArticlesQuery()

  return (
    <div className='mt-24'>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>{error}</h2>}
      <ul>
        {data?.map(item =>
          <li key={item.id}>
            <ArticleItemRTKQ {...item} />
          </li>
        )}
      </ul>
    </div>

  )
}

export default ArticlesRTKQ