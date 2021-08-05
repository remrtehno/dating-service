import request from "../utils/request";

const ENTITY = 'message';

const CONVERSATION = '/conversation?nick=';
const POST_MESSAGE = '/PostAndRead';
const POST_VOICE = '/sendVoice';
const POST_PHOTO = '/sendPhoto';
const POST_LOCATION = '/sendLocation';
const DELETE_MESSAGES = '/deleteMessages';
const EDIT_MESSAGE = '/editMessageText';

export const fetchDialogs = () =>
    request.get(ENTITY);

export const fetchMessages = (nick:string) =>
    request.get(CONVERSATION + nick);

export const sendMessage = (data:object) =>
    request.post(POST_MESSAGE, data);

export const sendVoice = (data:object) =>
    request.post(POST_VOICE, data);

export const sendImage = (data:object) =>
    request.post(POST_PHOTO, data);

export const sendLocation = (data:object) =>
    request.post(POST_LOCATION, data);

export const deleteMessage = (data:object) =>
    request.post(DELETE_MESSAGES, data);

export const editMessage = (data:object) =>
    request.post(EDIT_MESSAGE, data);
