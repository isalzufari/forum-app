/**
 * skenario testing
 *
 * - RegisterInput component
 *   - should handle name typing correctly
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call register function when register button is clicked
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterInput from './RegisterInput';

import '@testing-library/jest-dom';

describe('RegisterPage component', () => {
  it('should handle name typing correctly', async () => {
    // arrange
    render(<RegisterInput register={() => { }} />);
    const nameInput = await screen.getByPlaceholderText('Enter Name');

    // action
    await userEvent.type(nameInput, 'usernametest');

    // assert
    expect(nameInput).toHaveValue('usernametest');
  });

  it('should handle email typing correctly', async () => {
    // arrange
    render(<RegisterInput register={() => { }} />);
    const emailInput = await screen.getByPlaceholderText('Enter email');

    // action
    await userEvent.type(emailInput, 'usernametest@gmail.com');

    // assert
    expect(emailInput).toHaveValue('usernametest@gmail.com');
  });

  it('should handle password typing correctly', async () => {
    // arrange
    render(<RegisterInput register={() => { }} />);
    const passwordInput = await screen.getByPlaceholderText('Password');

    // action
    await userEvent.type(passwordInput, 'password');

    // assert
    expect(passwordInput).toHaveValue('password');
  });

  it('should call register function when register button is clicked', async () => {
    // arrange
    const mockRegister = jest.fn();
    render(<RegisterInput register={mockRegister} />);
    const nameInput = await screen.getByPlaceholderText('Enter Name');
    await userEvent.type(nameInput, 'nametest');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'passwordtest');
    const emailInput = await screen.getByPlaceholderText('Enter email');
    await userEvent.type(emailInput, 'emailtest@gmail.com');
    const registerButton = await screen.getByRole('button', { name: 'Register' });

    // action
    await userEvent.click(registerButton);

    // expect
    expect(mockRegister).toBeCalledWith({
      onName: 'nametest',
      onEmail: 'emailtest@gmail.com',
      onPassword: 'passwordtest',
    });
  });
});
