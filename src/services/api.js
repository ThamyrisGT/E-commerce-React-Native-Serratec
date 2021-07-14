import axios from 'axios';

const api = axios.create({
    baseURL: 'https://serratec-ecomerce.herokuapp.com/'
});

api.interceptors.request.use((config) => {
    let token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0ZSIsImV4cCI6MTYyNjMyNDIxM30.h0kbwZI29kyLoaEdNYw3ST5b_G91PC4ylECNYhQ3cOHTTQ-f1i0xC5lPKrFLIbP6dDSN9Iide0lGqfc0hNQ60Q"

    if (token) { 
        config.headers.Authorization = token; 
    }

    return config;
})


export default api;
