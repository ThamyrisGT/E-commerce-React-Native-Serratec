import axios from 'axios';

const api = axios.create({
    baseURL: 'https://serratec-ecomerce.herokuapp.com/'
});

api.interceptors.request.use((config) => {

    let token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0ZSIsImV4cCI6MTYyNjQ5NjI0MX0.m0vqGueZToKTesXM4W_oMBGKq0DpPpeMAzLLX-nWjY084BroxRGGzf3Emyt5eNM_xFCCKy-WXJnvPAIKKvk6Kg"


    if (token) {
        config.headers.Authorization = token;
    }
    return config;
})


export default api;
