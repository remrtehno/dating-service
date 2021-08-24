import { Entities, request } from '../config';
import * as T from './types'

export const login:T.ReqLogin = (sid, payload) =>
    request.post(`${Entities.auth}/login?sid=${sid}`, payload);

export const logout:T.ReqLogout = () =>
    request.get(`${Entities.auth}/logout`);

export const recoveryByPhone:T.ReqRecoveryByPhoneNumber = (phoneNumber) =>
    request.post(`${Entities.auth}/phoneInput?tel=${phoneNumber}`, {});

export const recoveryByPass:T.ReqRecoveryByToken = (token, pass) =>
    request.get(`${Entities.auth}?token=${token}&pass=${pass}`);

export const subscribe:T.ReqSubscribe = () =>
    request.post(`${Entities.auth}/subscribe`);

export const registration:T.ReqRegistration = (payload) =>
    request.post(`${Entities.auth}/registration`, payload);

