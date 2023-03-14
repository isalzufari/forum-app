import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  const [onEmail, onEmailChange] = useInput('');
  const [onPassword, onPasswordChange] = useInput('');

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <Form className="mt-5 mx-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={onEmail} onChange={onEmailChange} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We&apos;ll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={onPassword} onChange={onPasswordChange} type="password" placeholder="Password" />
      </Form.Group>
      <Button onClick={() => onLogin({ onEmail, onPassword })} variant="primary" type="button">
        Login
      </Button>
      <p className="mt-3">
        Don&apos;t have an account?
        {' '}
        <Link to="/register">Register in here</Link>
      </p>
    </Form>
  );
}

export default LoginPage;
