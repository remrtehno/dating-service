import * as TYPES from './types';


const initialState: TYPES.IAppState = {
    configIsLoading: false,
    flowUrl: null,
    captchaKey: null,

    language: '',
    languageIsLoading: false,
}

const appReducer = (state=initialState, action:TYPES.AppActionTypes):TYPES.IAppState => {
    switch (action.type) {
        case TYPES.CONFIG_IS_LOADING:
            return {
                ...state,
                configIsLoading: action.isLoading,
            }
        case TYPES.CONFIG_IS_SUCCEED:
            return {
                ...state,
                flowUrl: action.data.flow_url,
                captchaKey: action.data.recaptchav3_public,
            }
        case TYPES.LANGUAGE_IS_LOADING:
            return {
                ...state,
                languageIsLoading: action.isLoading,
            }
        case TYPES.LANGUAGE_IS_SUCCEED:
            return {
                ...state,
                language: action.data.lang,
            }
        default:
            return state;
    }
}

export default appReducer;