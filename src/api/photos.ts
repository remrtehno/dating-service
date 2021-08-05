import request from "../utils/request";

const ENTITY = 'ownPhoto';

const PHOTO_LIST = ENTITY + '/index?without_default_img=1';
const SAVE_PHOTO = ENTITY + '/SetMain?photoid=';
const ADD_PHOTO = ENTITY + '/addAllPhotoWeb';
const DELETE_PHOTO = ENTITY + '/delete?photoid=';

export const fetchPhotoList = () =>
    request.get(PHOTO_LIST);

export const savePhoto = (data:object) =>
    request.post(SAVE_PHOTO, data);

export const addPhoto = (data:object) =>
    request.post(ADD_PHOTO, data);

export const deletePhoto = (data:object) =>
    request.post(DELETE_PHOTO, data);