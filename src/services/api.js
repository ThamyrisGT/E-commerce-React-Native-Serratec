import axios from 'axios';

const api = axios.create({
    baseURL: 'https://serratec-ecomerce.herokuapp.com/'
});

api.interceptors.request.use((config) => {

    let token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0ZSIsImV4cCI6MTYyNjQ4MDc3NX0.Dk78depKUNp70TOKcrCqrPAjOmHkRoFpHos4QByUMdhWA3UIOM5ifDP5d12DQiHhAOI-0WIl6hiCqTq8Md6ulA"

    if (token) {
        config.headers.Authorization = token;
    }
    return config;
})


export default api;
