import api from '../services/api';

const getCliente= async (username,senha) =>{
    return new Promise((resolve, reject) => {
        return api.post('login', {username,senha})
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}

const register = async (cliente) => {
    return new Promise((resolve, reject) =>{
        return api.post('create', cliente)
        .then(response => resolve(response))
        .catch(error => reject(error))
    })
}

export {
    getCliente,
    register
};
