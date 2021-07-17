import Realm from 'realm';
import Cliente from '../schemas/Cliente';
import Produto from '../schemas/Produto';

function findCliente() {
    return Realm.open({ schema: [Cliente] })
}
function findProdutos() {
    return Realm.open({ schema: [Produto] })
}

export {
    findCliente,
    findProdutos
    
}
