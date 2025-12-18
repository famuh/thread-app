import ThreadItem from './ThreadItem';
import React from 'react';
import propTypes from 'prop-types';


function ThreadList({ threads }) {
  console.log('isi thread list', threads);

  return (
    <div className="thread-list">
      {
        threads.map((thread) => (
          <ThreadItem key={thread.id} {...thread}/>
        ))
      }
    </div>
  );
}

ThreadList.propTypes = propTypes.array;

export default ThreadList;