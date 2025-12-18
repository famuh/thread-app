import { showLoading } from '@dimasmds/react-redux-loading-bar';
import api from '../../utils/api';
import { hideLoading } from '@dimasmds/react-redux-loading-bar';

const ActionType = {
  SET_AUTH_USER : 'SET_AUTH_USER',
  UNSET_AUTH_USER : 'UNSET_AUTH_USER'
};

function setAuthUserAction(authUser) {
  return {
    type : ActionType.SET_AUTH_USER,
    payload: {
      authUser
    }
  };
}

function unsetAuthUserAction() {
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: {
      authUser: null
    }
  };
}

function asyncSetAuthUser({ email, password }) {
  return async (dispatch) =>{
    dispatch(showLoading());
    try {
      const token = await api.login({ email, password });
      api.putAccessToken(token);

      const authUser = await api.getOwnProfile();
      dispatch(setAuthUserAction(authUser));

    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUnsetAuthUser() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      dispatch(unsetAuthUserAction());
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  setAuthUserAction,
  unsetAuthUserAction,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
  ActionType
};