import React, {useContext, useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Outlet } from 'react-router-dom';
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
import RequireAuth from './layouts/RequireAuth';

const App = () => {
  return (
    
    <>
    <Header />

    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/main' element={<Main />} />

      <Route path='/music' element={<RequireAuth><Music /></RequireAuth>} />
      <Route path='/food' element={<RequireAuth><Food /></RequireAuth>} />
      <Route path='/netflix' element={<RequireAuth><Netflix /></RequireAuth>} />
      <Route path='/youtube' element={<RequireAuth><Youtube /></RequireAuth>} />
      <Route path='/calendar' element={<RequireAuth><Calendar /></RequireAuth>} />
      <Route path='/login' element={<Login />} />

      <Route path='/*' element={<NotFound />} />
    </Routes>
    <Footer />
    </>
    
  );
}

export default App;
