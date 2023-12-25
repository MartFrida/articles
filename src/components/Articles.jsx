import React from 'react'
import Navigation from './Navigation'
import ArticleItem from './ArticleItem'
import { useSelector } from 'react-redux'
import { selectArticles } from '../redux/selectors'

const Articles = () => {
  const articles = useSelector(selectArticles)
  return (
    <>
      {/* <Navigation /> */}
      <header className='text-3xl py-4 bg-blue-950 flex justify-between px-4'>
        <h2 className='text-red-500 font-bold text-center md:text-white lg:text-violet-600 hover:text-white transition-colors duration-300'>Articles</h2>
        <button className='bg-white px-4 py-1 text-xl rounded-md'>Add article</button>
      </header>
      <ul>
        {articles.map(item =>
          <li key={item.id}>
            <ArticleItem {...item} />
          </li>
        )}

      </ul>

    </>
  )
}

export default Articles