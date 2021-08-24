import { Entities, request } from '../config';
import * as T from './types';

export const fetchAccess:T.ReqAccess = (sid) =>
    request.get(`${Entities.events}/v1/access/${sid}`);

export const getStreamUrl = () =>
    `${Entities.events}/v1/stream`;

