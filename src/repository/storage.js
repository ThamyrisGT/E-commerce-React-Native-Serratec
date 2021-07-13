import getCliente1 from '../services/realm';

const getCliente = async () => {
    const clientes = await getCliente1();
    const realmCliente = clientes.objects('Post');
    const cliente = realmCliente.filtered('id = 2')
    return cliente;
}

const setCliente = async (cliente) => {
    const realm = await getCliente1();
    realm.create('Cliente', {
        id: cliente.id,
        idPedido: cliente.pedido.id,
        token: cliente.token
    })
}


export default {
    getCliente,
    setCliente
}
