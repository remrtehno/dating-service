import { Dispatch } from 'redux';
import * as TYPES from './types';
import API from '../../api';

const setDialogsLoading:TYPES.SetDialogsLoading = (isLoading) => ({
    type: TYPES.DIALOGS_IS_LOADING,
    isLoading,
});

const setDialogsSucceed:TYPES.SetDialogsSucceed = (data) => ({
    type: TYPES.DIALOGS_IS_SUCCEED,
    data,
});

const setDialogsFailed:TYPES.SetDialogsFailed = (error) => ({
    type: TYPES.DIALOGS_IS_FAILED,
    error,
});

export const loadDialogs = () => (dispatch:Dispatch) => {
    dispatch(setDialogsLoading(true));

    API.getDialogs()
        .then((data) => dispatch(setDialogsSucceed(data)))
        .catch((error) => dispatch(setDialogsFailed(error)))
        .finally(() => dispatch(setDialogsLoading(false)))
};