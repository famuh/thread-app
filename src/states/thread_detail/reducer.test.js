
/**
* test scenario for talksReducer
*
* - threadDetailReducer function
*  - should return the initial state when given by unknown action
*  - should return the thread detail when given by RECEIVE_THREAD_DETAIL action
*
*/

import { describe, it, expect } from 'vitest';
import threadDetailReducer from './reducer';

describe('threadDetailReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = null;
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });


  it('should return the thread when given by RECEIVE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREAD_DETAIL',
      payload: {
        threadDetail: {
          id: 'thread-4g5TJ2zXYinEVgVk',
          title: 'tes',
          body: 'teslagi',
          createdAt: '2025-12-18T03:04:29.886Z',
          owner: {
            id: 'user-4SBEX98KPPbDcOfU',
            name: 'pamu123',
            avatar: 'https://ui-avatars.com/api/?name=pamu123&background=random'
          },
          category: 'general',
          comments: [],
          upVotesB: [],
          downVotesBy: []
        }
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });


});

