/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function ThreadCommentInput({ comment }) {
  const [content, setContent] = useState('');
  const navigate = useNavigate('/');

  function onAddComment() {
    if (content.trim()) {
      comment(content);
      setContent('');
      navigate('/');
    }
  }

  function handleContentChange({ target }) {
    if (target.value.length <= 320) {
      setContent(target.value);
    }
  }

  return (
    <div className="talk-reply-input">
      <textarea type="text" placeholder="I think..." value={content} onChange={handleContentChange} />
      <p className="talk-reply-input__char-left">
        <strong>{content.length}</strong>
                /320
      </p>
      <button type="submit" onClick={onAddComment}>Comment Thread</button>
    </div>
  );

}

export default ThreadCommentInput;