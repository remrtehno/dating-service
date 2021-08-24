import { AxiosPromise } from 'axios';

export type ReqAccess = (sid:string) => AxiosPromise;