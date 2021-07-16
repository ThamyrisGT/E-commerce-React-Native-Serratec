import axios from 'axios';

const api = axios.create({
    baseURL: 'https://serratec-ecomerce.herokuapp.com/'
});

api.interceptors.request.use((config) => {
    let token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0ZSIsImV4cCI6MTYyNjQzODYxNX0.YV7i1b9usLBWhuB1fT8h3WxZcJf3lVQJRZ6rN8x6BYwDN79MB7dT1kPz_ukZJmDo1URh0n8_U6j_79Y0D_T7uA"

    if (token) {
        config.headers.Authorization = token;
    }
    return config;
})


export default api;
