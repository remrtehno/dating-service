import { Entities, request } from '../config';
import * as T from './types';

export const fetchUsers:T.ReqUsers = (page) =>
    request.get(`${Entities.search}/ByLiked?page=${page}`);

export const fetchBySimpleSearch:T.ReqSearch = (data) =>
    request.post(`${Entities.search}/perform`, data);

export const fetchByAdvancedSearch:T.ReqSearch = (data) =>
    request.post(`${Entities.search}/advanced`, data);

export const fetchCityList:T.ReqCityList = (data) =>
    request.post(`${Entities.search}/citylist`, data);