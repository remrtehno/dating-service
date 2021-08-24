import { AxiosPromise } from 'axios';

export type ReqLogin = (sid:string, data:IRequestLoginData) => AxiosPromise<IResponseLoginData>;

export type ReqLogout = () => AxiosPromise<IResponseLogoutData>

export type ReqRecoveryByPhoneNumber = (phoneNumber:number) => AxiosPromise;

export type ReqRecoveryByToken = (token:string, pass:string) => AxiosPromise;

export type ReqRegistration = (payload:IRequestRegistrationData) => AxiosPromise;

export type ReqSubscribe = () => AxiosPromise;

interface IResponseLoginData {
    id: number,
    isVipAvailable: false,
    landingUrl: string
    nick: string,
    sessionId: string,
    sex: number,
    status: string,
    tel: number,
    userStates: number[],
}

interface IRequestLoginData {
    pass: string,
    token: string,
}

interface IResponseLogoutData {
    status: string,
}

interface IRequestRegistrationData {
    name: string,
    birthday_day: string,
    birthday_month: string,
    birthday_year: string,
    sex: string,
    city_manual: string,
    greeting: string,
    FILES: string,
}