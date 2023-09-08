import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './About';
import NavigationBar from './NavigationBar';
import Blog from './Blog';
import SingleBlog from './SingleBlog';
import Contat from './Contat';
import NotFound from './NotFound';
import NotAvaliable from './NotAvaliable';
import Home from './Home';
import SingleBlogDyn from './SingleBlogDyn';
import Services from './Services';

function App() {
  return (
    <div>
    <BrowserRouter>
    <NavigationBar/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about-page' element={<About/>}></Route>
    <Route path='/blog-page' element={<Blog/>}></Route>
    <Route path='/contact-page' element={<Contat/>}></Route>
    <Route path='/single-blog-page' element={<SingleBlog/>}></Route>
    <Route path='/page-not-found' element={<NotFound/>}></Route>
    <Route path='/single-blog-dyn/:id' element={<SingleBlogDyn/>}></Route>
    <Route path='/services-page' element={<Services/>}></Route>
    <Route path='*' element={<NotAvaliable/>}></Route>

   
    
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App;