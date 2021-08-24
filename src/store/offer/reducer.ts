import * as TYPES from './types';

const initialState:TYPES.IOfferState = {
    isLoading: false,
    content: '',
    error: '',
}

const offerReducer:TYPES.OfferReducer = (state=initialState, action) => {
    switch (action.type) {
        case TYPES.OFFER_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            }
        case TYPES.OFFER_IS_SUCCEED:
            return {
                ...state,
                content: action.data,
            }
        case TYPES.OFFER_IS_FAILED:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

export default offerReducer;