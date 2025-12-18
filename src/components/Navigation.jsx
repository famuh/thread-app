import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

function Navigation({ authUser, signOut }) {
  const { id, name, email, avatar } = authUser;

  return (
    <div className="navigation">
      <img src={avatar} alt={id} title={name} />
      <p>{email}</p>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <button type="button" onClick={signOut}>Sign out</button>
    </div>
  );
}

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  avatar: PropTypes.string,

};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
