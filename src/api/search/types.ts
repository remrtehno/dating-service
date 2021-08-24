import { AxiosPromise } from 'axios';

export type ReqUsers = (page:string) => AxiosPromise;

export type ReqSearch = (data:IReqSearchInfo) => AxiosPromise;

export type ReqCityList = (data:IReqCityListData) => AxiosPromise;


interface IReqSearchInfo {

}

interface IReqCityListData {

}