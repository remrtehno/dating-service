import { AxiosPromise } from 'axios';

export interface IDialogsResponse {
    cnt: number,
    messages: IDialogsItem[]
}

export interface IDialogsItem {
    personInfo: {
        name: string,
        iurl: string,
        nick: string,
        online: boolean,
    }
    id: number,
    msg: string,
}

export type GetDialogs = () => Promise<IDialogsResponse>























export type ReqGetMessages = (userId:string) => AxiosPromise<IResGetMessagesData>;

export type ReqSendMessage = (data:IRequestGetMessagesData) => AxiosPromise;

export type ReqDeleteMessage = (data:IRequestDeleteMessageData) => AxiosPromise;

export type ReqEditMessage = (data:IRequestEditMessageData) => AxiosPromise;

interface IRequestGetMessagesData {

}

interface IRequestDeleteMessageData {

}

interface IRequestEditMessageData {

}



interface IResGetMessagesData {
    cnt: number,
    personInfo: {
        name: string,
        nick: string,
        iurl: string,
    },
    messages: {
        id: number,
        msg: string,
    }[]
}