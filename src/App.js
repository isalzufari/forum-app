import { Button } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navigation from './components/Navigation';

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ThreadsPage from './pages/ThreadsPage';
import ThreadDetail from './pages/ThreadDetail';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Container>
          <Routes>
            {/* <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} /> */}
            <Route path="/" element={<ThreadsPage />} />
            <Route path="/threads" element={<ThreadDetail />} />
          </Routes>
        </Container>
      </main >
    </>
  );
}

export default App;
