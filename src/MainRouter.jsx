import React, { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from './contexts/auth';
import LoginPage from './pages/auth/LoginPage';
import MainPage from './pages/main/MainPage';
import ChatPage from './pages/chat/ChatPage';

function MainRouter() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/login'
          element={user.userId ? <Navigate replace to='/' /> : <LoginPage />}
        />
        <Route
          path='/'
          element={
            user.userId ? <MainPage /> : <Navigate replace to='/login' />
          }
        />
        <Route
          path='/chat'
          element={
            user.userId ? <ChatPage /> : <Navigate replace to='/login' />
          }
        />
        <Route path='/*' element={<Navigate replace to='/login' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
