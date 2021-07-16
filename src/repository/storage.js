import { findCliente } from '../services/realm';

const findClienteStorage = async () => {
  const cliente = await findCliente();
  const realmCliente = cliente.objects('Cliente');
  let clienteAtual = {};
  realmCliente.forEach(item => clienteAtual = item);
  // cliente.close();
  console.log(clienteAtual);
  return clienteAtual;
}

export {
  findClienteStorage
}
