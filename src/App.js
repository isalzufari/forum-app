import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Navigation from './components/Navigation';
import Loading from './components/Loading';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ThreadsPage from './pages/ThreadsPage';
import ThreadDetailPage from './pages/ThreadDetailPage';

import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';

function App() {
  const dispatch = useDispatch();

  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);

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
        <Loading />
        <header>
          <Navigation authUser={{}} signOut={onSignOut} />
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/*" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </Container>
        </main>
      </>
    );
  }

  return (
    <>
      <Loading />
      <header>
        <Navigation authUser={authUser} signOut={onSignOut} />
      </header>
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<ThreadsPage />} />
            <Route path="/thread/:id" element={<ThreadDetailPage />} />
          </Routes>
        </Container>
      </main>
    </>
  );
}

export default App;
