import request from '../utils/request';

const ENTITY = 'service';

export const fetchOffer = () =>
    request.get(`${ENTITY}/oferta`);

export const fetchOfferIOS = () =>
    request.get(`${ENTITY}/iosoferta`);

export const fetchFaq = () =>
    request.get(`${ENTITY}/faqList`);

export const fetchFaqAndroid = () =>
    request.get(`${ENTITY}/faqAndroid`);

export const fetchConfig = () =>
    request.get(`${ENTITY}/config`);

export const fetchLang = (lang:string) =>
    request.get(`${ENTITY}/language/set/by_${lang}`);