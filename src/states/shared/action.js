import { hideLoading } from '@dimasmds/react-redux-loading-bar';
import { showLoading } from '@dimasmds/react-redux-loading-bar';
import api from '../../utils/api';
import { receiveThreadsAction } from '../thread/action';
import { receiveUsersAction } from '../user/action';



function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();

      dispatch(receiveThreadsAction(threads));
      dispatch(receiveUsersAction(users));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export { asyncPopulateUsersAndThreads };