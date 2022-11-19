import axios from 'axios';

const api = axios.create({
    baseURL: 'https://a947-177-69-185-17.sa.ngrok.io/',
});

export default api;