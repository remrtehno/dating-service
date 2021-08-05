import request from "../utils/request";

const ENTITY = 'ownProfile';

const EVT_STATUS = ENTITY + '/EventsStatus';
const EDIT = ENTITY + '/edit';
const VIEW = ENTITY + '/view';
const FIELDS = ENTITY + '/EditableFieldsAndPossibleValues';
const DATA_SAVE = ENTITY + '/dataSave';
const VIEW_SHORT = ENTITY + '/viewShort';
const DELETE_PROFILE = ENTITY + '/ownProfile/delete?confirm=YES';

export const fetchEventStatus = () =>
    request.get(EVT_STATUS);

export const editProfile = () =>
    request.get(EDIT);

export const viewProfile = () =>
    request.get(VIEW);

export const getFields = () =>
    request.get(FIELDS);

export const saveProfile = (data:object) =>
    request.post(DATA_SAVE, data);

export const fetchViewShort = () =>
    request.get(VIEW_SHORT);

export const deleteProfile = () =>
    request.get(DELETE_PROFILE)
