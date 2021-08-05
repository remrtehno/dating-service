import * as TYPES from './types';

const initialState:TYPES.IFeedState = {
    users: null,
    isLoading: false,
}

const feedReducer = (state=initialState, action:TYPES.FeedActionTypes):TYPES.IFeedState => {
    switch (action.type) {
        case TYPES.USERS_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case TYPES.FEED_IS_SUCCEED:
            return {
                ...state,
                users: action.data
            }
        default:
            return state;
    }
}

export default feedReducer;

