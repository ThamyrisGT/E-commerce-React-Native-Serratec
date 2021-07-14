import axios from 'axios';

const api = axios.create({
    baseURL: 'https://serratec-ecomerce.herokuapp.com/'
});


export default api;
