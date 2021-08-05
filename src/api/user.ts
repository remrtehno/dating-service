import request from "../utils/request";

const ENTITY = 'profile';

const USER_VIEW = ENTITY + '/view?nick=';
const USER_PHOTOS = ENTITY + '/photoList?nick=';
const SEND_LIKE = ENTITY + '/PhotoLike?';

export const fetchUserView = () =>
    request.get(USER_VIEW);

export const fetchUserPhotos = () =>
    request.get(USER_PHOTOS);

export const sendLike = (data:object) =>
    request.post(SEND_LIKE, data);