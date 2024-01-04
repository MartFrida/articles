import React from 'react'
// import Navigation from '../../Navigation'
import ArticleItem from './ArticleItem'
import { useSelector } from 'react-redux'
import { selectArticles } from '../../../redux/selectors'

const Articles = () => {
  const articles = useSelector(selectArticles)
  return (
    <>
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