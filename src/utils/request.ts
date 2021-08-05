import axios from 'axios';


const request = axios.create({
    baseURL: '/mtsrbapp/android/',
    timeout: 10000,
    withCredentials: true,
});

export default request;