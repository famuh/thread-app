import { useDispatch } from 'react-redux';
import { Link } from 'react-router';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';
import { FaMessage } from 'react-icons/fa6';
import React from 'react';


function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };


  return (
    <section className="login-page">
      <header className="login-page__hero">
        <h1><FaMessage /></h1>
      </header>
      <article className="login-page__main">
        <h2>
          Buat obrolan menjadi
          {' '}
          <strong>Menyenangkan</strong>
          {' '}
          <br />
          dengan Threads App
        </h2>

        <LoginInput login={onLogin} />
        <p>
          Don&apos;t have an account?
          {' '}
          <Link to="/register">Register</Link>
        </p>
      </article>
    </section>
  );

}

export default LoginPage;