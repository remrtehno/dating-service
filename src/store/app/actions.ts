import { Dispatch } from 'redux';
import * as API from '../../api/service';
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