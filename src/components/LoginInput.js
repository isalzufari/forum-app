/* eslint-disable react/react-in-jsx-scope */
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [onEmail, onEmailChange] = useInput('');
  const [onPassword, onPasswordChange] = useInput('');

  return (
    <Form className="mt-5 mx-5">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={onEmail} onChange={onEmailChange} type="email" placeholder="Email" />
        <Form.Text className="text-muted">
          We&apos;ll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={onPassword} onChange={onPasswordChange} type="password" placeholder="Password" />
      </Form.Group>
      <Button onClick={() => login({ onEmail, onPassword })} variant="primary" type="button">
        Login
      </Button>
    </Form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
