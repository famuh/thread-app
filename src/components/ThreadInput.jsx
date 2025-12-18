import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ThreadInput({ addThread }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');


  function onAddThread() {
    if (title.trim() && body.trim) {
      addThread({ title, body });
      setTitle('');
      setBody('');
    }
  }

  function handleTextChange({ target }) {
    if (target.value.length <= 320) {
      setBody(target.value);
    }
  }

  function handleTitleChange({ target }) {
    if (target.value.length <= 200) {
      setTitle(target.value);
    }
  }


  return (
    <div className="talk-input">
      <textarea type="text" placeholder="Title" value={title} onChange={handleTitleChange} />
      <textarea type="text" placeholder="What are you thinking?" value={body} onChange={handleTextChange} />
      <p className="talk-input__char-left">
        <strong>{body.length}</strong>
                /320
      </p>
      <button type="submit" onClick={onAddThread}>Post Thread</button>
    </div>
  );

}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired
};

export default ThreadInput;