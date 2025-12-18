
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';
import { postedAt } from '../utils';
import React from 'react';

function ThreadItem({
  id, title, body, category, createdAt, totalComments, user
}) {

  const navigate = useNavigate();

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key == 'Enter' || event.key == ' ') {
      navigate(`/threads/${id}`);
    }
  };
  console.log('Ini adalah data user', user);


  return (
    <div role="button" tabIndex={0} className="talk-item" onClick={onThreadClick} onKeyDown={onThreadPress}>
      <div className="talk-item__detail">
        <header>
          <div className="talk-item__user-info">
            <p>Dibuat oleh <strong>{user.name ?? 'tidak ada'}</strong></p>
            <p className="talk-item__user-name">{title}</p>
            <p className="thread-item__category"> {category}</p>
            <p>Total Comments : {totalComments}</p>
          </div>
          <p className="talk-item__created-at">{postedAt(createdAt)}</p>
        </header>
        <article>
          <p className="talk-item__text">{body}</p>
        </article>
      </div>
    </div>
  );

}

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  category: PropTypes.string,
  totalComments: PropTypes.number,
  user: PropTypes.object
};

ThreadItem.propTypes = threadItemShape;

export default ThreadItem;