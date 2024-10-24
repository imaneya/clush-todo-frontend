import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/routes/home';
import Join from './routes/join';
import Login from './routes/login';
import { customAxios } from './service/customAxios';
import { useState } from 'react';

const App = () => {
  const isLoggedIn = () => {
    return localStorage.getItem('accessToken') ? true : false;
  }
  const [authUser, setAuthUser] = useState(isLoggedIn);

  const signIn = async (user) => {
    try {
      const tokenSet = await customAxios.post('/auth/signInProc', JSON.stringify(user));
      // 토큰 받아와서 localStorage 저장
      localStorage.setItem('accessToken', tokenSet.data.AccessToken);
      localStorage.setItem('refreshToken', tokenSet.data.RefreshToken);
      
      // userId localStorage 저장
      localStorage.setItem('userId', user.userId);
      
      setAuthUser(()=>isLoggedIn());

      window.location.href = '/list';

    } catch(error) {
      console.log(error);
      window.alert(error);
    }
  }

  const signUp = async (user) => {
      const data = await customAxios.post('/auth/signUpProc', JSON.stringify(user));
      window.alert('회원가입이 완료되었습니다 👏');
      window.location.href = '/login';

      return data;
  }

  const signOut = () => {
      // localStorage 토큰 제거
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      // localStorage userId 제거
      localStorage.removeItem('userId');

      window.location.href = '/login';
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home
        signOut={signOut}
        authUser={authUser}
        />} />
        <Route path="/join" element={<Join
        signUp={signUp}
        />} />
        <Route path="/login" element={<Login
        signIn={signIn}
        authUser={authUser}
        />} />
        <Route path="/list" element={<Home
        signOut={signOut}
        authUser={authUser}
        />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
