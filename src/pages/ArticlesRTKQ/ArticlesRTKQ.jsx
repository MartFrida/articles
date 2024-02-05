import React, { useEffect } from 'react'
// import Navigation from '../../Navigation'
import ArticleItem from './ArticleItemRTKQ'
import { useDispatch, useSelector } from 'react-redux'
import { selectArticles } from '../../../redux/selectors'
import { fetchData } from '../../../redux/articles/operations'
// import { login } from '../../../redux/user/slice'

const Articles = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])
  const articles = useSelector(selectArticles)

  return (
    <ul>
      {articles?.map(item =>
        <li key={item.id}>
          <ArticleItem {...item} />
        </li>
      )}
    </ul>
  )
}

export default Articles