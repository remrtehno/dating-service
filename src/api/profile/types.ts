import { AxiosPromise } from 'axios';

export type ReqSaveProfile = (data:IReqSaveProfileData) => AxiosPromise;

export type ReqEventStatus = () => AxiosPromise;

export type ReqProfileEdit = () => AxiosPromise;

export type ReqProfileView = () => AxiosPromise;

export type ReqProfileFields = () => AxiosPromise;

export type ReqPhotosInfo = () => AxiosPromise;

export type ReqDeleteProfile = () => AxiosPromise;


interface IReqSaveProfileData {

}