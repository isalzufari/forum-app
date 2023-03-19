import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';
import RegisterInput from '../components/RegisterInput';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onRegister = ({ onName, onEmail, onPassword }) => {
    dispatch(asyncRegisterUser({
      name: onName,
      email: onEmail,
      password: onPassword,
    }));

    navigate('/');
  };

  return (
    <>
      <h3 className="text-center">Register</h3>
      <RegisterInput register={onRegister} />
      <p className="mt-3 mx-5">
        Have an account?
        {' '}
        <Link to="/">Login in here</Link>
      </p>
    </>
  );
}

export default RegisterPage;
