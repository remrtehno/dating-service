import request from "../utils/request";

const ENTITY = 'feedback';

const SEND_FEEDBACK = ENTITY + '/send';
const SEND_CAPTCHA = ENTITY + '/GetCaptcha?transparent=1';

export const sendFeedback = (data:object) =>
    request.post(SEND_FEEDBACK, data);

export const getCaptchaUrl = () => SEND_CAPTCHA;

export const getCaptchaKey = () => "6LdH_7QZAAAAAK3jbNQTaMDdwjda25NSWpl7shRH"