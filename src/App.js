import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ThreadsPage from './pages/ThreadsPage';
import ThreadDetail from './pages/ThreadDetail';

function App() {
  const {
    authUser = null,
    isPreload = false,
  } = {};

  const onSignOut = () => {

  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <header>
          <Navigation authUser={authUser} />
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/*" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </Container>
        </main >
      </>
    )
  }

  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<ThreadsPage />} />
            <Route path="/threads" element={<ThreadDetail />} />
          </Routes>
        </Container>
      </main >
    </>
  );
}

export default App;
