import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from './redux/auth/operations';
import { useEffect } from 'react';
// import PrivateRoute from './redux/routesConfig/PrivateRoute';
import HomePage from './pages/HomePage/HomePage';
import PublicRoute from './redux/routesConfig/PublicRoute';
import { selectIsRefresh } from './redux/selectors';
import Loader from './components/Loader';
import ArticlesRTKQ from './pages/ArticlesRTKQ/ArticlesRTKQ'
import ArticleFormRTKQ from './pages/ArticlesRTKQ/ArticleFormRTKQ'
import Articles from './components/Articles/Articles';
import NewArticle from './components/NewArticle/NewArticle';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(refreshThunk())
  }, [dispatch])

  const isRefresh = useSelector(selectIsRefresh)

  return isRefresh ? (<Loader />) : (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/articles' element={
          <PrivateRoute>
            <Articles />
          </PrivateRoute>
        } /> */}
        <Route path='/articles' element={<Articles />} />
        <Route path='/articles/new' element={<NewArticle />} />
        <Route path='/articlesRTK' element={<ArticlesRTKQ />} />
        <Route path='/articlesRTK/new' element={<ArticleFormRTKQ />} />
        <Route path='/register' element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        } />
        <Route path='/login' element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
        <Route path='*' element={<h2>Page not found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
