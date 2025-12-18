/* eslint-disable react/prop-types */
import { postedAt } from '../utils';
import React from 'react';


function CommentItem({ comment }) {
  return (
    <div className="comment-item">
      <img src={comment.owner.avatar} alt={comment.owner.name} />
      <header>
        <div className="talk-item__user-info">
          <p className="talk-item__user-name">{comment.owner.name}</p>
          <article>
            <p className="talk-item__text">{comment.content}</p>
          </article>
        </div>
        <p className="talk-item__created-at">{postedAt(comment.createdAt)}</p>
      </header>
    </div>
  );

}

export default CommentItem;