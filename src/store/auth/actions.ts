import * as TYPES from './types';
import * as API from '../../api/auth';
import { Dispatch } from 'redux';

// LOGIN
const setAuthLoading = (isLoading:boolean) => ({
    type: TYPES.AUTH_IS_LOADING,
    isLoading
});

const setAuthSucceed = (data:object) => ({
    type: TYPES.AUTH_IS_SUCCEED,
    data,
})

const setAuthFailed = (error:object) => ({
    type: TYPES.AUTH_IS_FAILED,
    error,
})

export const login = () => (dispatch:Dispatch) => {
    setAuthLoading(true);

    API.login('123', '123')
        .then((data) => dispatch(setAuthSucceed(data)))
        .catch((error) => dispatch(setAuthFailed(error)))
        .finally(() => dispatch(setAuthLoading(false)))
}

//