import { Entities, request } from '../config';
import * as T from './types';

export const addToBlacklist:T.ReqBlackList = (userId, data) =>
    request.post(`${Entities.blacklist}/add?nick=${userId}`, data);
