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
import userEvent from '@testing-library/user-event'; import LoginInput from './LoginInput';
import matchers from '@testing-library/jest-dom/matchers';


expect.extend(matchers);

describe('LoginInput component', () => {
  afterEach(() => {
    cleanup();
  });


  it('should handle email typing correctly', async () => {

    render(<LoginInput login={() => { }} />);

    const emailInput = screen.getByPlaceholderText('Email');

    await userEvent.type(emailInput, 'pamu123@mail.com');

    expect(emailInput).toHaveValue('pamu123@mail.com');
  });

  it('should handle password typing correctly', async () => {

    render(<LoginInput login={() => { }} />);

    const passwordInput = screen.getByPlaceholderText('Password');

    await userEvent.type(passwordInput, 'password123');

    expect(passwordInput).toHaveValue('password123');
  });

  it('should call login function when login button is clicked', async () => {
    // Arrange
    const mockLogin = vi.fn();
    render(<LoginInput login={mockLogin} />);
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'emailTest');

    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'passwordtest');

    const loginButton = await screen.getByRole('button', { name: 'Login' });


    // Action
    await userEvent.click(loginButton);

    // Assert
    expect(mockLogin).toBeCalledWith({
      email: 'emailTest',
      password: 'passwordtest',
    });
  });
});
