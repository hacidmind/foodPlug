// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import FoodList from './components/FoodList';
import ErrPage from './components/ErrPage';
import BlogPage from './components/BlogPage';
import NewBlog from './components/NewBlog';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes >
        <Route exact path='/foodplug' element={<Home />} />
        <Route path='/food' element={<FoodList />} />
        <Route path='/newblog' element={<NewBlog />} />
        <Route path='blog/:id' element={<BlogPage />} />        
        <Route path='*' element={<ErrPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
