import { Dispatch } from 'redux';
import * as TYPES from './types';
import API from '../../api';

const setOfferLoading = (isLoading:boolean) => ({
    type: TYPES.OFFER_IS_LOADING,
    isLoading
});

const setOfferSucceed = (data:string) => ({
    type: TYPES.OFFER_IS_SUCCEED,
    data,
});

const setOfferFailed = (error:object) => ({
    type: TYPES.OFFER_IS_FAILED,
    error,
});

export const getOffer = (lang:string) => (dispatch:Dispatch) => {
    dispatch(setOfferLoading(true));

    API.fetchOffer(lang)
        .then((data) => dispatch(setOfferSucceed(data)))
        .catch((error) => dispatch(setOfferFailed(error)))
        .finally(() => dispatch(setOfferLoading(false)))
}