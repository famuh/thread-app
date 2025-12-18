import { ActionType } from './action';


function threadReducer(threads = [], action = {}) {

  switch (action.type) {
  case ActionType.ADD_THREAD:
    return [action.payload.thread, ...threads];
  case ActionType.RECEIVE_THREADS:
    return action.payload.threads;
  case ActionType.ADD_COMMENT:
    return threads.map((thread) => {
      if (thread.id === action.payload.comment.threadId) {
        return {
          ...thread,
          comments: [
            ...(thread.comments || []),
            action.payload.comment,
          ],
        };
      }
      return thread;
    });
  default:
    return threads;
  }
}

export default threadReducer;