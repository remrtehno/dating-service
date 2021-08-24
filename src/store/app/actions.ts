import { Dispatch } from 'redux';
import Cookies from 'js-cookie';
import { COOKIE_NAMES, DEFAULT_LANGUAGE } from '../../constants';
import API from '../../api';
import * as TYPES from './types';


const setConfigLoading = (isLoading:boolean) => ({
    type: TYPES.CONFIG_IS_LOADING,
    isLoading,
});

const setConfigSucceed = (data:object) => ({
    type: TYPES.CONFIG_IS_SUCCEED,
    data,
});

const setConfigFailed = (error:object) => ({
    type: TYPES.CONFIG_IS_FAILED,
    error,
});

export const getConfig = () => (dispatch:Dispatch) => {
    setConfigLoading(true);

    API.fetchConfig()
        .then((data) => dispatch(setConfigSucceed(data)))
        .catch((error) => dispatch(setConfigFailed(error)))
        .finally(() => dispatch(setConfigLoading(false)))
}


const setLanguageLoading = (isLoading:boolean) => ({
    type: TYPES.LANGUAGE_IS_LOADING,
    isLoading,
});

const setLanguageSucceed = (data:object) => ({
    type: TYPES.LANGUAGE_IS_SUCCEED,
    data
});

const setLanguageFailed = (error:object) => ({
    type: TYPES.LANGUAGE_IS_FAILED,
    error,
});

export const getLanguage = () => (dispatch:Dispatch) => {
    const fromCookie = Cookies.get(COOKIE_NAMES.LANGUAGE);
    const lang = fromCookie || DEFAULT_LANGUAGE;

    dispatch(setLanguageLoading(true));

    API.fetchLang(lang)
        .then((data) => dispatch(setLanguageSucceed(data)))
        .catch((error) => dispatch(setLanguageFailed(error)))
        .finally(() => dispatch(setLanguageLoading(false)))
}