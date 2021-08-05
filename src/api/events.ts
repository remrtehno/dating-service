import request from "../utils/request";

const ENTITY = 'events';

const ACCESS = ENTITY + '/v1/access';
const STREAM = ENTITY + '/v1/stream';

export const getStreamUrl = () => STREAM;

export const fetchAccess = (sid:string) =>
    request.get(ACCESS + '/' + sid);