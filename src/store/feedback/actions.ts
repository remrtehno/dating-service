import {Dispatch} from "redux";
import API from '../../api'

export const sendFeedback = (values:any) => (dispatch:Dispatch) => {
    console.log(values);
    API.sendFeedback(values)
        .then((data) => console.log(data));
}