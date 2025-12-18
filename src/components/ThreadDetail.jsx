/* eslint-disable react/prop-types */
import { postedAt } from '../utils';
import React from 'react';


function ThreadDetail({ threadDetail }) {
  return (
    <section className="talk-detail">
      <header>
        <div className="talk-item__user-photo">
          <img src={threadDetail.owner.avatar} alt={threadDetail.owner.name} />
        </div>
        <div className="talk-detail__user-info">
          <p className="talk-detail__user-id">
            {threadDetail.owner.name}
          </p>
          <p className="talk-detail__created-at">{postedAt(threadDetail.createdAt)}</p>
        </div>
      </header>
      <p className="talk-detail__user-name">{threadDetail.title}</p>
      <article>
        <p className="talk-detail__text">{threadDetail.body}</p>
      </article>
    </section>
  );
}

export default ThreadDetail;