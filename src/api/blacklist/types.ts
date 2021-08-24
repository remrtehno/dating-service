import { AxiosPromise } from 'axios';

export type ReqBlackList = (userId:number, data:IRequestBlacklistData) => AxiosPromise;

interface IRequestBlacklistData {
    nick: string,
}