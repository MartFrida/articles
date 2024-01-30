import { Route, Routes } from 'react-router-dom';
import Articles from './components/pages/Articles/Articles';
import Header from './components/Header';
import NewArticle from './components/pages/NewArticle/NewArticle';
import Register from './components/pages/Register/Register';
import Login from './components/pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/articles' element={<Articles />} />
        <Route path='/articles/new' element={<NewArticle />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<h2>Page not found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
