import { Entities, request } from '../config';
import * as T from './types';

export const fetchPhotos:T.ReqGetPhotos = () =>
    request.get(`${Entities.photos}/index?without_default_img=1`);

export const savePhoto:T.ReqSavePhoto = (photoId, data) =>
    request.post(`${Entities.photos}/SetMain?photoid=${photoId}`, data);

export const addPhoto:T.ReqAddPhoto = (data) =>
    request.post(`${Entities.photos}/addAllPhotoWeb`, data);

export const deletePhoto:T.ReqDeletePhoto = (data) =>
    request.post(`${Entities.photos}/delete?photoid=`, data);