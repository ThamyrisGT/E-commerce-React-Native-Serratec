import { findCliente } from '../services/realm';
//import Produto from '../model/Produto'

/**
 * const getCliente = async id => {
  const clientes = await realm.findCliente();
  const realmCliente = clientes.objects('Cliente');
  const cliente = realmCliente.filtered(`id = ${id}`);
  return cliente;
};
 * 
 */

const findClienteStorage = async () => {
  const cliente = await findCliente();
  const realmCliente = cliente.objects('Cliente');
  realmCliente.forEach(item => console.log(item));
  cliente.close();
}
// const testes = findClienteStorage();
// if (testes) {
//   console.log('tem item')
// } else {
//   console.log('sem item')
// }

export {
  findClienteStorage
}
