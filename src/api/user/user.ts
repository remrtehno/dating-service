import { Entities, request } from '../config';
import  { UserReqType } from './types';

export const fetchUserView:UserReqType = (userId:any) =>
    request.get(`${Entities.user}/view?nick=${userId}`);

export const fetchUserPhotos:UserReqType = (userId:any) =>
    request.get(`${Entities.user}/photoList?nick=${userId}`);

export const postLike:UserReqType = (data:any) =>
    request.post(`${Entities.user}/PhotoLike?`, data);