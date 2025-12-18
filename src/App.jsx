import { useDispatch } from 'react-redux';
import './styles/App.css';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import Loading from './components/Loading';
import React, { useEffect } from 'react';
import { asyncPreloadProcess } from './states/isPreload/action';
import Navigation from './components/Navigation';
import { asyncUnsetAuthUser } from './states/authUser/action';
import ThreadDetailPage from './pages/ThreadDetail';
// import { asyncUnsetAuthUser } from './states/authUser/action';

function App() {
  const authUser = useSelector((state) => state.authUser);
  // const isPreload = false;
  const isPreload = useSelector((state) => state.isPreload);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onSignOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading/>
        <main>
          <Routes>
            <Route path='/*' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      <Loading/>
      <div className="app-container">
        <header>
          <Navigation authUser={authUser} signOut={onSignOut} />

        </header>
        <main>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/threads/:threadId' element={<ThreadDetailPage/>}/>

          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
