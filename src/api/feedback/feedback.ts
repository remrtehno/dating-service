import { Entities, request } from '../config';
import * as T from './types';

export const sendFeedback:T.ReqFeedback = (data) =>
    request.post(`${Entities.feedback}/send`, data);