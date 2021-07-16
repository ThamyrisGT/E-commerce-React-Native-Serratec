import axios from 'axios';
import {findCliente} from './realm';
import {deleteToken} from './realm';

const api = axios.create({
  baseURL: 'https://serratec-ecomerce.herokuapp.com/',
});

const findClienteStorage = async () => {
  const realm = await findCliente();
  const realmCliente = realm.objects('Cliente');
  let clienteAtual = {};
  realmCliente.forEach(item => (clienteAtual = item));
  const token = clienteAtual.tokenAcesso;
  if (token != '') {
    api.interceptors.request.use(
      config => {
        if (token) {
          config.headers.Authorization = token;
        }

        return config;
      },
      error => {
        try {
          realm.write(() => {
            realm.create(
              'Cliente',
              {
                idLocal: 1,
                id: clienteAtual.id,
                idPedido: clienteAtual.idPedido,
                tokenAcesso: '',
              },
              'modified',
            );
          });
        } catch (error) {
          console.log(error);
        }
      },
    );
  }
};

findClienteStorage();


export default api;
