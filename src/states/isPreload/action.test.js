
import api from '../../utils/api';
import {
  describe, beforeEach, afterEach, it, vi, expect
} from 'vitest';
import { asyncPreloadProcess, setIsPreloadAction } from './action';
import { hideLoading, showLoading } from '@dimasmds/react-redux-loading-bar';
import { setAuthUserAction } from '../authUser/action';


/**
 * skenario test
 *
 * - asyncGetOwnProfile thunk
 *  - should dispatch action correctly when data fetching success
 */

const fakeOwnProfile = {
  id: 'user-4SBEX98KPPbDcOfU',
  name: 'pamu123',
  email: 'pamu123@mail.com',
  avatar: 'https://ui-avatars.com/api/?name=pamu123&background=random'
};

describe('async get own profile thunk', () => {
  beforeEach(() => {
    api._getOwnProfile = api.getOwnProfile;
  });

  afterEach(() => {
    api._getOwnProfile = api.getOwnProfile;
    api._getOwnProfile;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    api.getOwnProfile = () => Promise.resolve(fakeOwnProfile);

    const dispatch = vi.fn();

    await asyncPreloadProcess()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserAction(fakeOwnProfile));
    expect(dispatch).toHaveBeenCalledWith(setIsPreloadAction(false));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

});