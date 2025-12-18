import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { asyncReceiveThreadDetail } from '../states/thread_detail/action';
import ThreadDetail from '../components/ThreadDetail';
import ThreadCommentInput from '../components/ThreadCommentInput';
import { asyncAddComment } from '../states/thread/action';
import CommentItem from '../components/CommentItem';


function ThreadDetailPage() {
  const { threadId } = useParams();
  const threadDetail = useSelector((states) => states.threadDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(threadId));
  }, [threadId, dispatch]);

  const onAddComment = (content) => {
    dispatch(asyncAddComment({ threadId, content }));
  };
  if (!threadDetail) {
    return <h2>Tidak ada data</h2>;
  }

  return (
    <>
      <ThreadDetail threadDetail={threadDetail} />
      <br />
      <p>Comments {threadDetail.comments.length}</p>
      {
        threadDetail.comments.map((comment) => {
          // eslint-disable-next-line react/jsx-key
          return <CommentItem comment={comment} />;
        })
      }
      <ThreadCommentInput comment={onAddComment} />
    </>

  );
}

export default ThreadDetailPage;