import { Entities, request } from '../config';
import * as T from './types';

export const getDialogs:T.GetDialogs = () =>
    request
        .get(Entities.messages)
        .then((res) => res.data);

export const fetchMessages:T.ReqGetMessages = (userId) =>
    request.get(`${Entities.messages}/conversation?nick=${userId}`);

export const sendTextMessage:T.ReqSendMessage = (data) =>
    request.post(`${Entities.messages}/PostAndRead`, data);

export const sendVoiceMessage:T.ReqSendMessage = (data) =>
    request.post(`${Entities.messages}/sendVoice`, data);

export const sendImgMessage:T.ReqSendMessage = (data) =>
    request.post(`${Entities.messages}/sendPhoto`, data);

export const sendLocationMessage:T.ReqSendMessage = (data) =>
    request.post(`${Entities.messages}/sendLocation`, data);

export const deleteMessage:T.ReqDeleteMessage = (data) =>
    request.post(`${Entities.messages}/deleteMessages`, data);

export const editMessage:T.ReqEditMessage = (data) =>
    request.post(`${Entities.messages}/editMessageText`, data);
