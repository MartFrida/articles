import { Route, Routes } from 'react-router-dom';
import Articles from './components/pages/Articles/Articles';
import Header from './components/Header';
import NewArticle from './components/pages/NewArticle/NewArticle';
import Register from './components/pages/Register/Register';
import Login from './components/pages/Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from './redux/auth/operations';
import { useEffect } from 'react';
import PrivateRoute from './redux/routesConfig/PrivateRoute';
import HomePage from './components/pages/HomePage/HomePage';
import PublicRoute from './redux/routesConfig/PublicRoute';
import { selectIsRefresh } from './redux/selectors';
import Loader from './components/Loader';

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
        <Route path='/articles' element={
          <PrivateRoute>
            <Articles />
          </PrivateRoute>
        } />
        <Route path='/articles/new' element={<NewArticle />} />
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
