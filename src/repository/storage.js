import { findCliente } from '../services/realm';

const findClienteStorage = async () => {
  const realm = await findCliente();
  const realmCliente = realm.objects('Cliente');
  let clienteAtual = {};
  realmCliente.forEach(item => clienteAtual = item);
  return clienteAtual;
}

export {
  findClienteStorage
}
