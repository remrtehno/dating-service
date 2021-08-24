import { AxiosPromise } from 'axios';

export type ReqGetPhotos = () => AxiosPromise;

export type ReqSavePhoto = (photoId:number, data:IReqSavePhotoData) => AxiosPromise;

export type ReqAddPhoto = (data:IReqAddPhotoData) => AxiosPromise;

export type ReqDeletePhoto = (data:IReqDeletePhotoData) => AxiosPromise;

interface IReqSavePhotoData {

}

interface IReqAddPhotoData {

}

interface IReqDeletePhotoData {

}
