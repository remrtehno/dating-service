import { Entities, request } from '../config';
import * as TYPES from './types';

export const fetchOffer:TYPES.FetchTextContent = (lang) =>
    request
        .get(`${Entities.service}/oferta?lang=${lang}`)
        .then((res) => res.data);


export const fetchOfferIOS:TYPES.FetchTextContent = (lang) =>
    request
        .get(`${Entities.service}/iosoferta?lang=${lang}`)
        .then((res) => res.data);


export const fetchFaq:TYPES.FetchTextContent = (lang) =>
    request
        .get(`${Entities.service}/faqList?lang=${lang}`)
        .then((res) => res.data);


export const fetchFaqAndroid:TYPES.FetchTextContent = (lang) =>
    request
        .get(`${Entities.service}/faqAndroid?lang=${lang}`)
        .then((res) => res.data);


export const fetchConfig:TYPES.FetchConfig = () =>
    request
        .get(`${Entities.service}/config`)
        .then((res) => res.data);


export const fetchLang:TYPES.FetchLanguage = (lang) =>
    request
        .get(`${Entities.service}/language/set/by_${lang}`)
        .then((res) => res.data);