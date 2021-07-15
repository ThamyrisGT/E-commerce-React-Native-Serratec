import realm from '../services/realm';
//import Produto from '../model/Produto'

const getCliente = async id => {
  const clientes = await realm.findCliente();
  const realmCliente = clientes.objects('Cliente');
  const cliente = realmCliente.filtered(`id = ${id}`);
  return cliente;
};

const getProdutoById = async id => {
  const produtos = await realm.findCliente();
  const realmProdutos = produtos.objects('Produto');
  const produto = realmProdutos.filtered(`id = ${id}`);
  return produto;
};

const setCliente = async cliente => {
  const realm = await realm.findCliente();
  realm.write(() => {
    realm.create(
      'Cliente',
      {
        id: cliente.id,
        idPedido: cliente.pedido.id,
        token: cliente.token,
      },
      'modified',
    );
  });
};

const setProdutos = async produtoTemp => {
  const realm = await realm.findProdutos();
  realm
    .then(realm => {
      realm.write(() => {
        realm.create('Produto', {
          id: produtoTemp.id,
          nome: produtoTemp.nome,
          preco: produtoTemp.preco,
          idCegoria: produtoTemp.idCegoria,
          url: produtoTemp.url,
        });
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export {
  getCliente,
  setCliente,
  setProdutos,
  getProdutoById,
};
