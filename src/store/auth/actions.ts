import { Dispatch } from 'redux';
import * as TYPES from './types';
import API from '../../api';



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

    API.login('47-96591df3-eccc-42ec-aa46-40a6beee541e', {pass: '123', token: '123'})
        .then((data) => dispatch(setAuthSucceed(data)))
        .catch((error) => dispatch(setAuthFailed(error)))
        .finally(() => dispatch(setAuthLoading(false)))
}