export enum APP_LANGUAGES {
    RU = 'ru',
    BY = 'by',
}

export enum APP_VERSIONS {
    WEB = 'web',
    IOS = 'ios',
}

export enum COOKIE_NAMES {
    LANGUAGE = 'lang',
    APP_VERSION = 'version',
    SID = 'sid',
}

export const DEFAULT_LANGUAGE = APP_LANGUAGES.RU;

export const COOKIE_EXPIRE_DATE = 30;

export enum APP_STORE_LINKS {
    GOOGLE =  'https://play.google.com/store/apps/details?id=by.mts.dating',
    HUAWEI = 'https://appgallery.huawei.com/#/app/C101709067',
}