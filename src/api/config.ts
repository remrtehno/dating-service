import axios from 'axios';

export enum Entities {
    base = '/mtsrbapp/android/',
    auth = 'auth',
    blacklist = 'blacklist',
    events = 'events',
    feedback = 'feedback',
    messages = 'message',
    photos = 'ownPhoto',
    profile = 'ownProfile',
    search = 'search',
    service = 'service',
    user = 'profile',
}

export const request = axios.create({
    baseURL: Entities.base,
    timeout: 10000,
    withCredentials: true,
});