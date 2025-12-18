import { hideLoading } from '@dimasmds/react-redux-loading-bar';
import { showLoading } from '@dimasmds/react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL : 'RECEIVE_THREAD_DETAIL',
  ADD_THREAD_COMMENT : 'ADD_THREAD_COMMENT',
  CLEAR_THREAD_DETAIL : 'CLEAR_THREAD_DETAIL'
};

function receiveThreadDetailAction(threadDetail) {
  return {
    type : ActionType.RECEIVE_THREAD_DETAIL,
    payload : {
      threadDetail
    }
  };
}

function clearThreadDetailAction() {
  return {
    type : ActionType.CLEAR_THREAD_DETAIL
  };
}

function addThreadCommentAction(threadId) {
  return {
    type : ActionType.ADD_THREAD_COMMENT,
    payload : {
      threadId
    }
  };
}


function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailAction(threadDetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncCreateThreadComment({ threadId, content }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const comment = await api.createComment({ threadId, content });
      dispatch(addThreadCommentAction(comment));
    } catch (error) {
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export {
  ActionType,
  clearThreadDetailAction,
  addThreadCommentAction,
  asyncCreateThreadComment,
  asyncReceiveThreadDetail,
};