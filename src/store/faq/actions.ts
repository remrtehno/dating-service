import { Dispatch } from 'redux';
import * as TYPES from './types';
import API from '../../api';

const setFAQLoading = (isLoading:boolean) => ({
    type: TYPES.FAQ_IS_LOADING,
    isLoading
});

const setFAQSucceed = (data:string) => ({
    type: TYPES.FAQ_IS_SUCCEED,
    data,
});

const setFAQFailed = (error:object) => ({
    type: TYPES.FAQ_IS_SUCCEED,
    error,
});

export const getFaq = () => (dispatch:Dispatch) => {
    dispatch(setFAQLoading(true));

    API.fetchFaq('1')
        .then((data) => dispatch(setFAQSucceed(data)))
        .catch((error) => dispatch(setFAQFailed(error)))
        .finally(() => dispatch(setFAQLoading(false)))
}