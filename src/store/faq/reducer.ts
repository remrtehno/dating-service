import * as TYPES from './types';

const initialState:TYPES.IFAQState = {
    isLoading: false,
    content: '',
    error: '',
}

const faqReducer:TYPES.FAQReducer = (state=initialState, action) => {
    switch (action.type) {
        case TYPES.FAQ_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            }
        case TYPES.FAQ_IS_SUCCEED:
            return {
                ...state,
                content: action.data,
            }
        case TYPES.FAQ_IS_FAILED:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

export default faqReducer;