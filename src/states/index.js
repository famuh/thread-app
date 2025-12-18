import { configureStore } from '@reduxjs/toolkit';
import { authUserReducer } from './authUser/reducer';
import { isPreloadReducer } from './isPreload/reducer';
import { loadingBarReducer } from '@dimasmds/react-redux-loading-bar';
import threadReducer from './thread/reducer';
import threadDetailReducer from './thread_detail/reducer';
import usersReducer from './user/reducer';


const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    loadingBar: loadingBarReducer,
    threads: threadReducer,
    threadDetail: threadDetailReducer,
    users: usersReducer
  }

});

export default store;