import React, { useEffect, useState } from 'react'
// import Navigation from '../../Navigation'
import ArticleItem from './ArticleItem'
import { useDispatch, useSelector } from 'react-redux'
import { selectArticles } from '../../../redux/selectors'
import { fetchData } from '../../../redux/articles/operations'
import { login } from '../../../redux/user/slice'

const Articles = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])
  const articles = useSelector(selectArticles)
  const [value, setValue] = useState('')
  return (
    <><div>
      <input value={value} onChange={ev => setValue(ev.target.value)} type='text' />
      <button onClick={() => dispatch(login(value))}>Login</button>
    </div>

      <ul>
        {articles?.map(item =>
          <li key={item.id}>
            <ArticleItem {...item} />
          </li>
        )}
      </ul>

    </>
  )
}

export default Articles