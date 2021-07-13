import Api from './api'

function obterPorNumero(numero) {
    return new Promise((resolve, reject) => {
        return Api.get(`/pedido/busca?numero=${numero}`)
            .then(response => resolve(response))
            .catch(error => reject(error))
    });
}

const obterTodos = async () => {
        //Criação da Promise que irá retornar todos os pedidos.
    return new Promise((resolve, reject) => {
        return Api.get('/pedido')
            .then(response => resolve(response))
            .catch(error => reject(error))
    });
}

function obterProdutos(numeroDoPedido) {
    //Criação da Promise que irá retornar os produtos do pedido.
    return new Promise((resolve, reject) => {
        return Api.get(`pedido/detalhes/${numeroDoPedido}/produtos`)
            .then(response => resolve(response))
            .catch(error => reject(error))
    });
}

export default {
    obterPorNumero,
    obterTodos,
    obterProdutos
}