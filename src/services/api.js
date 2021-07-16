import axios from 'axios';

const api = axios.create({
    baseURL: 'https://serratec-ecomerce.herokuapp.com/'
});

api.interceptors.request.use((config) => {

    let token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0ZSIsImV4cCI6MTYyNjQzNzE4M30.cK6qdMxjfFX6ucZ6r-melOCLX9-h83uuJ6ndY2pCnhHZiZgd9j5HE54WLqzgeYSHdJiAOTx3c2wx_Ou0SrWobQ"


    if (token) {
        config.headers.Authorization = token;
    }
    return config;
})


export default api;
