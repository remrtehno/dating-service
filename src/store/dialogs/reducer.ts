import * as T from './types';

const initialState:T.IDialogsState = {
    isLoading: false,
    count: 0,
    dialogs: [],
    error: {},
}

const dialogsReducer:T.DialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case T.DIALOGS_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            }
        case T.DIALOGS_IS_SUCCEED:
            return {
                ...state,
                count: action.data.cnt,
                dialogs: action.data.messages,
            }
        case T.DIALOGS_IS_FAILED:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

export default dialogsReducer;