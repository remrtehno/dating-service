import { IDialogsResponse, IDialogsItem } from '../../api/messages/types';

export const DIALOGS_IS_LOADING = 'DIALOGS_IS_LOADING';
export const DIALOGS_IS_SUCCEED = 'DIALOGS_IS_SUCCEED';
export const DIALOGS_IS_FAILED = 'DIALOGS_IS_FAILED';

interface IDialogsLoadingAction {
    type: typeof DIALOGS_IS_LOADING,
    isLoading: boolean,
}

interface IDialogsSucceedAction {
    type: typeof DIALOGS_IS_SUCCEED,
    data: IDialogsResponse,
}

interface IDialogsFailedAction {
    type: typeof DIALOGS_IS_FAILED,
    error: object,
}

export interface IDialogsState {
    isLoading: boolean,
    count: number,
    dialogs: IDialogsItem[],
    error: object,
}

export type DialogsActions = IDialogsLoadingAction | IDialogsSucceedAction | IDialogsFailedAction;

export type DialogsReducer = (state:IDialogsState, action:DialogsActions) => IDialogsState

export type SetDialogsLoading = (isLoading:boolean) => IDialogsLoadingAction;

export type SetDialogsSucceed = (data:IDialogsResponse) => IDialogsSucceedAction;

export type SetDialogsFailed = (error:object) => IDialogsFailedAction;
