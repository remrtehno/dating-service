import { Entities, request } from '../config';
import * as T from './types';

export const fetchEventStatus:T.ReqEventStatus = () =>
    request.get(`${Entities.profile}/EventsStatus`);

export const fetchProfileEdit:T.ReqProfileEdit = () =>
    request.get(`${Entities.profile}/edit`);

export const fetchProfileView:T.ReqProfileView = () =>
    request.get(`${Entities.profile}/view`);

export const fetchProfileFields:T.ReqProfileFields = () =>
    request.get(`${Entities.profile}/EditableFieldsAndPossibleValues`);

export const fetchPhotosInfo:T.ReqPhotosInfo = () =>
    request.get(`${Entities.profile}/viewShort`);

export const saveProfile:T.ReqSaveProfile = (data) =>
    request.post(`${Entities.profile}/dataSave`, data);

export const deleteProfile:T.ReqDeleteProfile = () =>
    request.get(`${Entities.profile}/ownProfile/delete?confirm=YES`);
