/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle username typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import RegisterInput from './RegisterInput';


expect.extend(matchers);

describe('RegisterInput component', () => {
  afterEach(() => {
    cleanup();
  });


  it('should handle email typing correctly', async () => {

    render(<RegisterInput register={() => { }} />);

    const emailInput = screen.getByPlaceholderText('Email');

    await userEvent.type(emailInput, 'pamu123@mail.com');

    expect(emailInput).toHaveValue('pamu123@mail.com');
  });

  it('should handle password typing correctly', async () => {

    render(<RegisterInput register={() => { }} />);

    const passwordInput = screen.getByPlaceholderText('Password');

    await userEvent.type(passwordInput, 'password123');

    expect(passwordInput).toHaveValue('password123');
  });

  it('should handle name typing correctly', async () => {

    render(<RegisterInput register={() => { }} />);

    const passwordInput = screen.getByPlaceholderText('Name');

    await userEvent.type(passwordInput, 'name');

    expect(passwordInput).toHaveValue('name');
  });

  it('should call register function when login button is clicked', async () => {
    // Arrange
    const mockRegister = vi.fn();
    render(<RegisterInput register={mockRegister} />);

    const nameInput = await screen.getByPlaceholderText('Name');
    await userEvent.type(nameInput, 'nameTest');

    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'emailTest');

    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'passwordtest');

    const loginButton = await screen.getByRole('button', { name: 'Register' });


    // Action
    await userEvent.click(loginButton);

    // Assert
    expect(mockRegister).toBeCalledWith({
      name: 'nameTest',
      email: 'emailTest',
      password: 'passwordtest',
    });
  });


});
