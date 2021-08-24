import { Dispatch } from 'redux';
import * as API from '../../api/search/search';
import * as TYPES from './types';

const setFeedLoading = (isLoading:boolean) => ({
    type: TYPES.USERS_IS_LOADING,
    isLoading,
})

const setFeedSucceed = (data:object) => ({
    type: TYPES.FEED_IS_SUCCEED,
    data,
})

const setFeedFailed = (error:object) => ({
    type: TYPES.FEED_IS_FAILED,
    error,
})

export const getFeed = () => (dispatch:Dispatch) => {
    dispatch(setFeedLoading(true));

    API.fetchUsers('1')
        .then((data) => dispatch(setFeedSucceed(data.data.users)))
        .catch((error) => dispatch(setFeedFailed(error)))
        .finally(() => dispatch(setFeedLoading(false)))
}
