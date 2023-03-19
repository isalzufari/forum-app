import React from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [onName, onNameChange] = useInput();
  const [onEmail, onEmailChange] = useInput();
  const [onPassword, onPasswordChange] = useInput();

  return (
    <Form className="mt-5 mx-5">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control value={onName} onChange={onNameChange} type="text" placeholder="Enter Name" />
      </Form.Group>

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
      <Button onClick={() => register({ onName, onEmail, onPassword })} variant="primary" type="button">
        Register
      </Button>
    </Form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
