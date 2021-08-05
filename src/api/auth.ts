import request from '../utils/request';

const ENTITY = 'auth';

export const login = (token:string, pass:string) =>
    request.post(`${ENTITY}/login`, {token, pass});

export const logout = () =>
    request.get(`${ENTITY}/logout`);

export const recoveryByPhone = (phone:string) =>
    request.post(`${ENTITY}/phoneInput?tel=${phone}`, {}); 

export const recoveryByPass = (token:string, pass:string) =>
    request.get(`${ENTITY}?token=${token}&pass=${pass}`);

export const subscribe = () =>
    request.post(`${ENTITY}/subscribe`);

export const registration = (data:object) =>
    request.post(`${ENTITY}/registration`, data);