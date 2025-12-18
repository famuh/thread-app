
/**
* test scenario for talksReducer
*
* - threadReducer function
*  - should return the initial state when given by unknown action
*  - should return the thread when given by RECEIVE_THREAD action
*  - should return the thread with the new talk when given by ADD_THREAD action
*
*/

import { describe, it, expect } from 'vitest';
import threadReducer from './reducer';

describe('threadReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });


  it('should return the thread when given by RECEIVE_TALKS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        thread: [
          {
            id: 'thread-Np47p4jhUXYhrhRn',
            title: 'Bagaimana pengalamanmu belajar Redux?',
            body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
            category: 'redux',
            createdAt: '2023-05-29T07:55:52.266Z',
            ownerId: 'user-mQhLzINW_w5TxxYf',
            totalComments: 1,
            upVotesBy: [
              'user-mQhLzINW_w5TxxYf'
            ],
            downVotesBy: []
          },
          {
            id: 'thread-Np47p4jhUXYhrhRn2',
            title: 'Bagaimana pengalamanmu belajar Redux?',
            body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
            category: 'redux',
            createdAt: '2023-05-29T07:55:52.266Z',
            ownerId: 'user-mQhLzINW_w5TxxYf',
            totalComments: 1,
            upVotesBy: [
              'user-mQhLzINW_w5TxxYf'
            ],
            downVotesBy: []
          },
        ],
      },
    };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the thread with the new talk when given by ADD_TALK action', () => {

    // arrange
    const initialState = [
      {
        id: 'thread-Np47p4jhUXYhrhRn',
        title: 'Bagaimana pengalamanmu belajar Redux?',
        body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
        category: 'redux',
        createdAt: '2023-05-29T07:55:52.266Z',
        ownerId: 'user-mQhLzINW_w5TxxYf',
        totalComments: 1,
        upVotesBy: [
          'user-mQhLzINW_w5TxxYf'
        ],
        downVotesBy: []
      },
    ];

    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread:{
          title: 'tes',
          body: 'teslagi',
          category: ''
        }
      },
    };

    // action
    const nextState = threadReducer(initialState, action);
    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);

  });

});

