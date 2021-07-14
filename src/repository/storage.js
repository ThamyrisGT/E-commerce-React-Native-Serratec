import getCliente1 from '../services/realm';
import api from '../services/api';

const getCliente = async (id) => {
    const clientes = await getCliente1();
    const realmCliente = clientes.objects('Cliente');
    const cliente = realmCliente.filtered(`id = ${id}`)
    return cliente;
};

const setCliente = async (cliente) => {
    const realm = await getCliente1();
    realm.create('Cliente', {
        id: cliente.id,
        idPedido: cliente.pedido.id,
        token: cliente.token
    });
};
 
const getProducts =async()=>{
    console.log('cheguei aqui')
    try {
        const productslist = await api.get('produto', {responseType:'text'})
        if(productslist.status!==200) throw new Error("Ocorreu uma falha")
        return productslist.data
    } catch (error) {
        console.log(error)
    }
}


export {
    getCliente,
    setCliente,
    getProducts
}
