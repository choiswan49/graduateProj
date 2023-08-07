import React, {useContext, useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

import {Header, NavBar, Footer} from './components/index'
import  {
  Main,
  Music,
  Food,
  Netflix,
  Youtube,
  Calendar,
  Login,
  NotFound
} from './routes'

const App = () => {
  return (
    
    <>
    <Header />
    <NavBar />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/main' element={<Main />} />

      <Route path='/music' element={<Music />} />
      <Route path='/food' element={<Food />} />
      <Route path='/netflix' element={<Netflix />} />
      <Route path='/youtube' element={<Youtube />} />
      <Route path='/calendar' element={<Calendar />} />
      <Route path='/login' element={<Login />} />

      <Route path='/*' element={<NotFound />} />
    </Routes>
    <Footer />
    </>
    
  );
}

export default App;
