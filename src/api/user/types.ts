import { AxiosPromise } from 'axios';

type FetchUserInfo = (userId:string) => AxiosPromise;

type FetchUserPhotos = (userId:string) => AxiosPromise;

type PostLike = (data:IPostLikeRequestData) => AxiosPromise;

interface IPostLikeRequestData {

}

export type UserReqType =
    FetchUserInfo
    | FetchUserPhotos
    | PostLike;