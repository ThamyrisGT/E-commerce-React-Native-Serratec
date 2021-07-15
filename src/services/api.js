import axios from 'axios';

const api = axios.create({
    baseURL: 'https://serratec-ecomerce.herokuapp.com/'
});

api.interceptors.request.use((config) => {
    let token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0ZSIsImV4cCI6MTYyNjM5MzY4MX0.8jPKVMotacNU5pg7jLLrvJz7oV3ex2ootnyeOicHf5-AKiivr2-gmNyLld_Egib4MWOalpgVBRMI7tpqRNjIGg"

    if (token) {
        config.headers.Authorization = token;
    }
    return config;
})


export default api;
