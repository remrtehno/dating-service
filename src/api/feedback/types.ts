import { AxiosPromise } from 'axios';

export type ReqFeedback = (data:IRequestFeedbackData) => AxiosPromise;

interface IRequestFeedbackData {

}