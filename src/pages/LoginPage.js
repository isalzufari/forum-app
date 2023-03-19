import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { asyncSetAuthUser } from '../states/authUser/action';
import LoginInput from '../components/LoginInput';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ onEmail, onPassword }) => {
    dispatch(asyncSetAuthUser({ email: onEmail, password: onPassword }));
  };

  return (
    <>
      <h3 className="text-center">Login</h3>
      <LoginInput login={onLogin} />
      <p className="mt-3 mx-5">
        Don&apos;t have an account?
        {' '}
        <Link to="/register">Register in here</Link>
      </p>
    </>
  );
}

export default LoginPage;
