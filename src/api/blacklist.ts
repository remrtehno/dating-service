import request from "../utils/request";

const ENTITY = 'blacklist';

const ADD_TO_BLACK_LIST = ENTITY + '/add?nick=';

export const addToBlacklist = (data:object) =>
    request.post(ADD_TO_BLACK_LIST, data);