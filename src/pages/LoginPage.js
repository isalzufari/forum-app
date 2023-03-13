import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInput from '../hooks/useInput';

// Redux
import { asyncSetAuthUser } from '../states/authUser/action';
import { useDispatch } from 'react-redux';

const LoginPage = () => {
  const dispatch = useDispatch();

  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  }

  return (
    <Form className='mt-5 mx-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} onChange={onEmailChange} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} onChange={onPasswordChange} type="password" placeholder="Password" />
      </Form.Group>
      <Button onClick={() => onLogin({ email, password })} variant="primary" type="button">
        Login
      </Button>
      <p className='mt-3'>Belum punya akun? <Link to="/register">Daftar di sini</Link></p>
    </Form>
  )
}

export default LoginPage;
