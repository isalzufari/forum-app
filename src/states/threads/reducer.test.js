/**
 * test scenario for talksReducer
 *
 *  - threadsReducers function
 *  - should return the initial state when given by unknown action
 *  - should return the thread when given by RECEIVE_THREADS action
 *  - should return the thread when given by ADD_THREAD action
 *  - should return the threads with the toggled upVotesBy thread when given by TOGGLE_UP_VOTE_THREAD action
 *  - should return the threads with the toggled downVotesBy thread when given by TOGGLE_DOWN_VOTE_THREAD action
 *  - should return the threads with the toggled upVotesBy thread when given by TOGGLE_NEUTRAL_UP_VOTE_THREAD action
 *  - should return the threads with the toggled downVotesBy thread when given by TOGGLE_NEUTRAL_DOWN_VOTE_THREAD action
 *
 */
import threadsReducer from './reducer';

describe('threadsReducers function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the thread when given by RECEIVE_THREADS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            id: 'thread-1',
            title: 'Title Test',
            body: 'Body Test',
            category: 'Category Test',
            user: 'user-1',
            upVotesBy: [],
            downVotesBy: [],
            created: '2023-03-17T10:06:55.588Z',
          },
        ],
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the thread with new thread when given by ADD_THREAD action', () => {
    const initialState = [
      {
        id: 'thread-1',
        title: 'Title Test 1',
        body: 'Body Test 1',
        category: 'Category Test 2',
        user: 'user-1',
        upVotesBy: [],
        downVotesBy: [],
        created: '2023-03-17T10:06:55.588Z',
      },
    ];
    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread: [
          {
            id: 'thread-2',
            title: 'Title Test 2',
            body: 'Body Test 2',
            category: 'Category Test 2',
            user: 'user-2',
            upVotesBy: [],
            downVotesBy: [],
            created: '2023-03-17T10:06:55.588Z',
          },
        ],
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it('should return the threads with the toggled upVotesBy when given by TOGGLE_UP_VOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Title Test 1',
        body: 'Body Test 1',
        category: 'Category Test 2',
        user: 'user-1',
        upVotesBy: [],
        downVotesBy: [],
        created: '2023-03-17T10:06:55.588Z',
      },
    ];
    const action = {
      type: 'TOGGLE_UP_VOTE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    // action: upVotesBy
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('shoudl return the threads with toggle downVotesBy when given by TOGGLE_DOWN_VOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Title Test 1',
        body: 'Body Test 1',
        category: 'Category Test 2',
        user: 'user-1',
        upVotesBy: [],
        downVotesBy: [],
        created: '2023-03-17T10:06:55.588Z',
      },
    ];
    const action = {
      type: 'TOGGLE_DOWN_VOTE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('should return the threads with upVotesBy when given by TOGGLE_NEUTRAL_UP_VOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Title Test 1',
        body: 'Body Test 1',
        category: 'Category Test 2',
        user: 'user-1',
        upVotesBy: ['user-1'],
        downVotesBy: [],
        created: '2023-03-17T10:06:55.588Z',
      },
    ];
    const action = {
      type: 'TOGGLE_NEUTRAL_UP_VOTE_THREAD',
      payload: {
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
      },
    ]);
  });

  it('should return the threads with downVotesBy when given by TOGGLE_NEUTRAL_DOWN_VOTE_THREAD action ', () => {
    const initialState = [
      {
        id: 'thread-1',
        title: 'Title Test 1',
        body: 'Body Test 1',
        category: 'Category Test 2',
        user: 'user-1',
        upVotesBy: ['user-1'],
        downVotesBy: ['user-2'],
        created: '2023-03-17T10:06:55.588Z',
      },
    ];
    const action = {
      type: 'TOGGLE_NEUTRAL_DOWN_VOTE_THREAD',
      payload: {
        userId: 'user-2',
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });
});
