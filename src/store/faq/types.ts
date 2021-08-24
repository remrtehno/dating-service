export const FAQ_IS_LOADING = 'FAQ_IS_LOADING';
export const FAQ_IS_SUCCEED = 'FAQ_IS_SUCCEED';
export const FAQ_IS_FAILED = 'FAQ_IS_FAILED';

type FAQData = typeof FAQ_IS_FAILED;

type FAQError = string;

type FAQLoading = {
    type: typeof FAQ_IS_LOADING,
    isLoading: boolean,
}

type FAQSucceed = {
    type: typeof FAQ_IS_SUCCEED,
    data: FAQData,
}

type FAQFailed = {
    type: typeof FAQ_IS_FAILED,
    error: FAQError,
}

export interface IFAQState {
    isLoading: boolean,
    content: FAQData,
    error: FAQError,
}

export type FAQActions = FAQLoading | FAQSucceed | FAQFailed;

export type FAQReducer = (state:IFAQState, action:FAQActions) => IFAQState;
