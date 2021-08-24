export const OFFER_IS_LOADING = 'OFFER_IS_LOADING';
export const OFFER_IS_SUCCEED = 'OFFER_IS_SUCCEED';
export const OFFER_IS_FAILED = 'OFFER_IS_FAILED';

export interface IOfferState {
    isLoading: OfferStatus,
    content: OfferData,
    error: ErrorData,
}

export type OfferActions = OfferLoading | OfferSucceed | OfferError;

export type OfferReducer = (state:IOfferState, action:OfferActions) => IOfferState;

type OfferLoading = {
    type: typeof OFFER_IS_LOADING,
    isLoading: OfferStatus,
}

type OfferSucceed = {
    type: typeof OFFER_IS_SUCCEED,
    data: OfferData,
}

type OfferError = {
    type: typeof OFFER_IS_FAILED,
    error: ErrorData,
}

type OfferData = string;

type ErrorData = string;

type OfferStatus = boolean;



