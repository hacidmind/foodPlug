// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Example from './components/Example';
import FoodList from './components/FoodList';
import ErrPage from './components/ErrPage';
import BlogPage from './components/BlogPage';
import Cars from './components/Cars';
import NewBlog from './components/NewBlog';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes >
        <Route exact path='/' element={<Home />} />
        <Route path='/example' element={<Example />} />
        <Route path='/food' element={<FoodList />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/newblog' element={<NewBlog />} />
        <Route path='blog/:id' element={<BlogPage />} />        
        <Route path='*' element={<ErrPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
