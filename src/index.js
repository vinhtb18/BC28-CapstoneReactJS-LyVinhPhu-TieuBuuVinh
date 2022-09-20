import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/style.scss'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import HomeTemplate from './templates/HomeTemplate';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Detail from './pages/Detail/Detail';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Carts from './pages/Carts/Carts';
import Search from './pages/Search/Search';

// Cau hinh redux
import { Provider } from 'react-redux';
import { store } from './redux/configStore.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='' element={<HomeTemplate />}>
        <Route index element={<Home />} />
        <Route path='register' element={<Register />} />
        <Route path='detail' element={<Detail />} />
        <Route path='login' element={<Login />} />
        <Route path='profile' element={<Profile />} />
        <Route path='carts' element={<Carts />} />
        <Route path='search' element={<Search />} />
        <Route path='*' element={<Navigate to='' />} />

      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
