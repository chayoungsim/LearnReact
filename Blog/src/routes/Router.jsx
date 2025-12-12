import React from 'react'
import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage'
import PostDetail from '../pages/PostDetail'
import NewPost from '../pages/NewPost'
import About from '../pages/About'

const Router = () => {
  return (
    
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/new" element={<NewPost />} />
        <Route path="/edit/:id" element={<NewPost />} />
    </Routes>
  )
}

export default Router