import request from "../utils/request";

const ENTITY = 'search';

const GET_USERS = ENTITY + '/ByLiked?page=';
const ADVANCED_SEARCH = ENTITY + '/advanced';
const CITY_LIST = ENTITY + '/citylist';
const SEARCH = ENTITY + '/perform';

export const fetchUsers = (page:string) =>
    request.get(GET_USERS + page);

export const fetchByAdvancedSearch = (data:object) =>
    request.post(ADVANCED_SEARCH, data);

export const fetchBySimpleSearch = (data:object) =>
    request.post(SEARCH, data);

export const fetchCityList = (data:object) =>
    request.post(CITY_LIST, data);