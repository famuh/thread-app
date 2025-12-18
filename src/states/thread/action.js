import { hideLoading } from '@dimasmds/react-redux-loading-bar';
import { showLoading } from '@dimasmds/react-redux-loading-bar';
import api from '../../utils/api';


const ActionType = {
  RECEIVE_THREADS : 'RECEIVE_THREADS',
  ADD_THREAD : 'ADD_THREAD',
  ADD_COMMENT : 'ADD_COMMENT_THREAD',
};

function receiveThreadsAction(threads) {
  return {
    type : ActionType.RECEIVE_THREADS,
    payload : {
      threads
    }
  };
}

function addThreadAction(thread) {
  return {
    type : ActionType.ADD_THREAD,
    payload : {
      thread
    }
  };
}

function addThreadCommentAction(comment) {
  return {
    type : ActionType.ADD_COMMENT,
    payload : {
      comment
    }
  };
}

function asyncReceiveThreads() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const threads = await api.getAllThreads();
      dispatch(receiveThreadsAction(threads));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };

}

function asyncAddThread({ title, body, category = '' }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(addThreadAction(thread));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncAddComment({ threadId, content }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      console.log('Thread id di action', threadId);

      const comment = await api.createComment({ threadId, content });
      dispatch(addThreadCommentAction(comment));

    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export { ActionType, receiveThreadsAction, addThreadAction, addThreadCommentAction, asyncAddComment, asyncAddThread, asyncReceiveThreads };